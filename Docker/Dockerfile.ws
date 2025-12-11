FROM node:20-bookworm-slim AS base

WORKDIR /app

ENV PNPM_HOME="/usr/local/share/pnpm"
ENV PATH="${PNPM_HOME}:${PATH}"
RUN corepack enable

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/wsBackend/package.json ./apps/wsBackend/package.json
COPY apps/httpBackend/package.json ./apps/httpBackend/package.json
COPY apps/web/package.json ./apps/web/package.json
COPY apps/landing/package.json ./apps/landing/package.json
COPY packages ./packages
RUN pnpm install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
# Isolated linker keeps dependencies per workspace package
COPY --from=deps /app/apps/wsBackend/node_modules ./apps/wsBackend/node_modules
# Keep the pnpm shim available in this stage
COPY --from=deps /usr/local/share/pnpm /usr/local/share/pnpm
COPY . .
RUN pnpm --filter wsbackend exec tsc -b apps/wsBackend/tsconfig.json
RUN pnpm prune --prod

FROM node:20-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/wsBackend/dist ./apps/wsBackend/dist
COPY apps/wsBackend/package.json ./apps/wsBackend/package.json

EXPOSE 8002
CMD ["node", "apps/wsBackend/dist/index.js"]

