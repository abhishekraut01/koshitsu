import { z } from "zod";

export const createRoomSchema = z.object({
    type: z.literal("create-room"),
    roomId: z.string().min(8).max(8),
});

export const joinRoomSchema = z.object({
    type: z.literal("join-room"),
    roomId: z.string().min(8).max(8),
});

export const chatSchema = z.object({
    type: z.literal("chat"),
    roomId: z.string().min(8).max(8),
    message: z.string().min(1),
});

export const leaveRoomSchema = z.object({
    type: z.literal("leave-room"),
    roomId: z.string().min(8).max(8),
});


// Union schema for router
export const incomingMessageSchema = z.union([
    createRoomSchema,
    joinRoomSchema,
    chatSchema,
    leaveRoomSchema,
]);

export type IncomingMessage = z.infer<typeof incomingMessageSchema>;
