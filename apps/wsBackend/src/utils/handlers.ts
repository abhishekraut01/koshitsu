import handleJoinRoom from "../services/joinRoomService.js";
import handleChat from "../services/chatRoomService.js";
import handleLeaveRoom from "../services/leaveRoomService.js";
import handleCreateRoom from "../services/createRoomService.js";

const handlers: Record<string, Function> = {
    "join-room": handleJoinRoom,
    "chat": handleChat,
    "leave-room": handleLeaveRoom,
    "create-room": handleCreateRoom,
};

export default handlers;