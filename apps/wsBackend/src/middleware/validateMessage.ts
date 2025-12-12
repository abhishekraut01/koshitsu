import WebSocket from "ws";
import { incomingMessageSchema } from "../schemas/wsSchema.js";
import { safeSend } from "../utils/safeSend.js";

export function validateMessage(raw: string, socket: WebSocket) {
    let json;

    try {
        json = JSON.parse(raw);
    } catch {
        safeSend(socket, {
            type: "error",
            message: "Invalid JSON format",
        });
        return null;
    }

    const parsed = incomingMessageSchema.safeParse(json);

    if (!parsed.success) {
        safeSend(socket, {
            type: "error",
            message: "Invalid message schema",
            issues: parsed.error.issues,
        });
        return null;
    }

    return parsed.data; // ALWAYS valid
}
