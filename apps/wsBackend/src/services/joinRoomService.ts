// src/services/joinRoomService.ts
import type { WebSocket } from "ws";
import { rooms, userRoomMap, removeUserFromRoom } from "../store/inMemoryStore.js";
import { safeSend } from "../utils/safeSend.js";
import { broadcastToRoom } from "../utils/broadcast.js";
import type { IncomingMessage } from "../schemas/wsSchema.js";

export default function handleJoinRoom(
    socket: WebSocket,
    userId: string,
    data: IncomingMessage
) {
    const roomId = data.roomId; // Zod already validated

    // 1️⃣ Ensure room exists
    if (!rooms.has(roomId)) {
        return safeSend(socket, {
            type: "error",
            message: "Room does not exist",
        });
    }

    const room = rooms.get(roomId)!;

    // 2️⃣ If user already in some room → remove them first
    const previousRoomId = userRoomMap.get(userId);

    if (previousRoomId && previousRoomId !== roomId) {
        removeUserFromRoom(userId, previousRoomId);
        console.log(`↪️ User ${userId} switched from ${previousRoomId} → ${roomId}`);
    }

    // 3️⃣ Add user to room
    room.members.set(userId, socket);
    userRoomMap.set(userId, roomId);

    console.log(`🟢 [JOIN] User ${userId} joined room ${roomId}`);

    // 4️⃣ Send ack to joining user
    safeSend(socket, {
        type: "joined-room",
        roomId,
    });

    // 5️⃣ Notify all room members
    broadcastToRoom(roomId, {
        type: "user-joined",
        userId,
        roomId,
    });
}
