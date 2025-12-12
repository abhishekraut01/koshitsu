// src/services/createRoomService.ts
import type { WebSocket } from "ws";
import { rooms } from "../store/inMemoryStore.js";
import type { Room } from "../store/inMemoryStore.js";
import { safeSend } from "../utils/safeSend.js";
import type { IncomingMessage } from "../schemas/wsSchema.js";

export default function handleCreateRoom(
    socket: WebSocket,
    userId: string,
    data: IncomingMessage
) {
    const roomId = data.roomId; // Zod already ensures this exists and is a string

    // Check if room already exists
    if (rooms.has(roomId)) {
        return safeSend(socket, {
            type: "error",
            message: "Room already exists",
        });
    }

    // Create room metadata object
    const newRoom: Room = {
        roomId,
        createdAt: Date.now(),
        members: new Map(), // empty set of users
    };

    rooms.set(roomId, newRoom);

    console.log(`🟢 [ROOM CREATED] Room ${roomId} created by user ${userId}`);

    safeSend(socket, {
        type: "room-created",
        roomId,
    });

    return newRoom;
}
