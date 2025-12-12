import { rooms } from "../store/inMemoryStore.js";
import { safeSend } from "./safeSend.js";

export function broadcastToRoom(roomId: string, message: any) {
    const room = rooms.get(roomId);
    if (!room) return;

    const payload = JSON.stringify(message);

    for (const socket of room.members.values()) {
        safeSend(socket, payload);
    }
}
