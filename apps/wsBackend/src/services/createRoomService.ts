// src/services/createRoomService.ts
import WebSocket from "ws";
import { rooms } from "../store/inMemoryStore.js";
import type { Room } from "../store/inMemoryStore.js";
import { safeSend } from "../utils/safeSend.js";

export default function handleCreateRoom(socket: WebSocket, userId: string, data: any) {
    const roomId = data.roomId;

    if (!roomId || typeof roomId !== "string") {
        return safeSend(socket, {
            type: "error",
            message: "roomId is required for room creation",
        });
    }

    // Prevent duplicates
    if (rooms.has(roomId)) {
        return safeSend(socket, {
            type: "error",
            message: "Room already exists",
        });
    }

    // Room metadata (expandable)
    const newRoom: Room = {
        roomId,
        createdAt: Date.now(),
        members: new Map(),
    };

    rooms.set(roomId, newRoom);

    console.log(`🟢 Room created → ${roomId} by user ${userId}`);

    safeSend(socket, {
        type: "room-created",
        roomId,
    });

    return newRoom;
}
