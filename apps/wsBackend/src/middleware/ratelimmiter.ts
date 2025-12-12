import { safeSend } from "../utils/safeSend.js";
import WebSocket from "ws";
const userRateLimit = new Map<string, { tokens: number, lastRefill: number }>();

const MAX_TOKENS = 5;        // max burst
const REFILL_RATE = 1;       // 1 token per sec

export function rateLimit(userId: string, socket: WebSocket) {
    const now = Date.now();

    if (!userRateLimit.has(userId)) {
        userRateLimit.set(userId, { tokens: MAX_TOKENS, lastRefill: now });
    }

    const bucket = userRateLimit.get(userId)!;

    // refill tokens
    const secondsPassed = (now - bucket.lastRefill) / 1000;
    const tokensToAdd = Math.floor(secondsPassed * REFILL_RATE);

    if (tokensToAdd > 0) {
        bucket.tokens = Math.min(MAX_TOKENS, bucket.tokens + tokensToAdd);
        bucket.lastRefill = now;
    }

    // no tokens means rate limit exceeded
    if (bucket.tokens <= 0) {
        safeSend(socket, {
            type: "error",
            message: "Rate limit exceeded. Slow down.",
        });
        return false;
    }

    bucket.tokens -= 1;
    return true;
}
