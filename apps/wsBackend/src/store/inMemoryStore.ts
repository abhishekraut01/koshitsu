import type { WebSocket } from "ws";

/**
 * Room structure:
 * - roomId: unique identifier for the room
 * - members: Map<userId, WebSocket>
 *      (we keep direct socket references for fast sending)
 */
export type Room = {
    roomId: string;
    members: Map<string, WebSocket>;
    createdAt?: number;
};

/**
 * All active rooms in memory
 * Map<roomId, Room>
 * 
 * Example:
 * rooms = {
 *   "room_A" => {
 *      roomId: "room_A",
 *      createdAt: 17100000000,
 *      members: Map {
 *         "user_1" => WebSocketObj,
 *         "user_2" => WebSocketObj
 *      }
 *   }
 * }
 */
export const rooms = new Map<string, Room>();


/**
 * Tracks which room each user is currently inside.
 * Map<userId, roomId>
 * 
 * Example:
 * userRoomMap = {
 *   "user_1" => "room_A",
 *   "user_2" => "room_A",
 *   "user_3" => "room_B"
 * }
 */
export const userRoomMap = new Map<string, string>();


/**
 * Utility: Create room if not exists.
 */
export function getOrCreateRoom(roomId: string): Room {
    if (!rooms.has(roomId)) {
        rooms.set(roomId, {
            roomId,
            createdAt: Date.now(),
            members: new Map(),
        });
    }
    return rooms.get(roomId)!;
}


/**
 * Utility: Remove user from a room and destroy room if empty.
 */
export function removeUserFromRoom(userId: string, roomId: string) {
    const room = rooms.get(roomId);
    if (!room) return;

    room.members.delete(userId);
    userRoomMap.delete(userId);

    // Auto-destroy ephemeral room when last user leaves
    if (room.members.size === 0) {
        rooms.delete(roomId);
        console.log(`🔴 [ROOM DESTROYED] ${roomId}`);
    }
}


/**
 * Utility: Get all members of a room
 */
export function getRoomMembers(roomId: string): WebSocket[] {
    const room = rooms.get(roomId);
    if (!room) return [];
    return [...room.members.values()];
}

