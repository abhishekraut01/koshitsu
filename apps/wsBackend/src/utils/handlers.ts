import handleJoinRoom from "../services/joinRoomService.js";
import handleChat from "../services/chatRoomService.js";
import handleLeaveRoom from "../services/leaveRoomService.js";

const handlers: Record<string, Function> = {
    "join-room": handleJoinRoom,
    "chat": handleChat,
    "leave-room": handleLeaveRoom,
};

export default handlers;