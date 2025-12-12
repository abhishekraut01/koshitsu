import { rooms, userRoomMap } from "../store/inMemoryStore.js";
import { safeSend } from "../utils/safeSend.js";
import { broadcastToRoom } from "../utils/broadcast.js";
import WebSocket from "ws";

export default function handleJoinRoom(
    socket: WebSocket,
    userId: string,
    data: any
) {
    const roomId = data.roomId;

    if (!roomId || typeof roomId !== "string") {
        return safeSend(socket, {
            type: "error",
            message: "roomId is required",
        });
    }

    // -------------------------------------------
    // If user is already in a room → remove them
    // -------------------------------------------
    const existingRoomId = userRoomMap.get(userId);
    if (existingRoomId && existingRoomId !== roomId) {
        leaveRoomInternal(userId, existingRoomId);
    }

    // -------------------------------------------
    // Create room if it doesn't exist
    // -------------------------------------------
    if (!rooms.has(roomId)) {
        rooms.set(roomId, {
            roomId,
            members: new Map(),
        });
        console.log(`Room created: ${roomId}`);
    }

    const room = rooms.get(roomId)!;

    // -------------------------------------------
    // Add user to room
    // -------------------------------------------
    room.members.set(userId, socket);
    userRoomMap.set(userId, roomId);

    console.log(`👤 User ${userId} joined room ${roomId}`);

    // -------------------------------------------
    // Acknowledge join
    // -------------------------------------------
    safeSend(socket, {
        type: "joined-room",
        roomId,
    });

    // -------------------------------------------
    // Notify all users in the room
    // -------------------------------------------
    broadcastToRoom(roomId, {
        type: "user-joined",
        userId,
        roomId,
    });
}


// ===================================================
// Internal Utility: remove user from room
// ===================================================
function leaveRoomInternal(userId: string, roomId: string) {
    const room = rooms.get(roomId);
    if (!room) return;

    room.members.delete(userId);
    userRoomMap.delete(userId);

    // Destroy room if empty
    if (room.members.size === 0) {
        rooms.delete(roomId);
        console.log(`🔴 Room destroyed: ${roomId}`);
    }
}
