# Base image with Node.js and pnpm
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk add --no-cache libc6-compat && \
    corepack enable && \
    pnpm install turbo --global

# Pruning stage - creates an optimized monorepo subset
FROM base AS pruner
WORKDIR /app
COPY . .
RUN turbo prune --scope=wsbackend --docker

# Building stage - installs dependencies and builds the app
FROM base AS builder
WORKDIR /app
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile
COPY --from=pruner /app/out/full/ .
COPY turbo.json turbo.json
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm --filter db prisma generate
RUN pnpm turbo run build --filter=wsbackend...

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=8002
COPY --from=builder /app/apps/wsBackend/dist ./apps/wsBackend/dist
COPY apps/wsBackend/package.json ./apps/wsBackend/package.json
EXPOSE 8002
CMD ["node", "apps/wsBackend/dist/index.js"]

