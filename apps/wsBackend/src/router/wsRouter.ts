import handleCreateRoom from "../services/createRoomService.js";
import handleJoinRoom from "../services/joinRoomService.js";
import handleChat from "../services/chatRoomService.js";
import handleLeaveRoom from "../services/leaveRoomService.js";

export function routeMessage(type: string) {
    switch (type) {
        case "create-room": return handleCreateRoom;
        case "join-room":   return handleJoinRoom;
        case "chat":        return handleChat;
        case "leave-room":  return handleLeaveRoom;

        default:
            return null;
    }
}
