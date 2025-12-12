import { WebSocketServer, WebSocket } from 'ws'
import checkAuth from './utils/checkAuth.js';
import handleLeaveRoom from './services/leaveRoomService.js';
import { safeSend } from './utils/safeSend.js';
import handlers from './utils/handlers.js';

const PORT = process.env.PORT || "8002"

const wss = new WebSocketServer({ port: Number(PORT) })

wss.on("connection", (socket: WebSocket, req) => {
    try {
        // Authenticate user (your jwt validation)
        const userId = checkAuth(socket, req);
        if (!userId) {
            socket.close(1008, "Unauthorized");
            return;
        }

        console.log(`User connected: ${userId}`);

        socket.on("message", (raw) => {
            let data: any;

            try {
                data = JSON.parse(raw.toString());
            } catch (err) {
                return safeSend(socket, {
                    type: "error",
                    message: "Invalid JSON format",
                });
            }

            if (!data?.type) {
                return safeSend(socket, {
                    type: "error",
                    message: "Missing message type",
                });
            }

            const handler = handlers[data.type];

            if (!handler) {
                return safeSend(socket, {
                    type: "error",
                    message: `Unknown message type ${data.type}`,
                });
            }

            try {
                handler(socket, userId, data);
            } catch (err) {
                console.error("Handler error:", err);
                safeSend(socket, {
                    type: "error",
                    message: "Internal server error",
                });
            }
        });

        socket.on("close", () => {
            console.log(`User disconnected: ${userId}`);

            // cleanup logic should be in leaveRoomService:
            // remove user from room, delete room if empty
            try {
                handleLeaveRoom(socket, userId, { type: "leave-room" });
            } catch (e) {
                console.error("Leave room cleanup failed:", e);
            }
        });

    } catch (error) {
        console.error("WS connection error:", error);
        socket.close(1011, "Internal WebSocket error");
    }
});


console.log(`WebSocket server is running on ws://localhost:${PORT}`)