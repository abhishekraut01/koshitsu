# Koshitsu

A real-time chat application built with a modern monorepo architecture using Turborepo.

## Overview

Koshitsu is a full-stack chat application featuring real-time messaging with WebSocket support, authentication, and a modern React frontend. The project is organized as a monorepo with separate applications for the frontend, HTTP API backend, and WebSocket server.

## Architecture

### Apps

- **web** - Next.js frontend application (port 3000)
- **httpBackend** - Express.js REST API server for authentication and HTTP endpoints
- **wsBackend** - WebSocket server for real-time messaging
- **landing** - Landing page application

### Packages

- **@repo/db** - Prisma database client and schema
- **@repo/ui** - Shared React component library
- **@repo/validation** - Shared validation schemas
- **@repo/utils** - Shared utility functions
- **@repo/eslint-config** - ESLint configurations
- **@repo/typescript-config** - TypeScript configurations

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Express.js, WebSocket (ws)
- **Database**: Prisma ORM
- **Authentication**: JWT, bcrypt
- **Monorepo**: Turborepo
- **Package Manager**: pnpm
- **Code Quality**: ESLint, Prettier, TypeScript

## Prerequisites

- Node.js >= 18
- pnpm 9.0.0 or higher

## Getting Started

### Installation

```sh
pnpm install
```

### Environment Setup

Configure your environment variables for each application:

- `apps/httpBackend/.env` - HTTP backend configuration
- `apps/wsBackend/.env` - WebSocket server configuration
- `packages/db/.env` - Database connection string

### Database Setup

```sh
cd packages/db
pnpm prisma generate
pnpm prisma db push
```

## Development

### Run All Applications

```sh
pnpm dev
```

### Run Specific Application

```sh
# Frontend only
pnpm dev --filter=web

# HTTP Backend only
pnpm dev --filter=httpbackend

# WebSocket Backend only
pnpm dev --filter=wsbackend
```

## Build

### Build All Applications

```sh
pnpm build
```

### Build Specific Application

```sh
pnpm build --filter=web
```

## Code Quality

### Linting

```sh
pnpm lint
```

### Type Checking

```sh
pnpm check-types
```

### Formatting

```sh
pnpm format
```

## Project Structure

```
koshitsu/
├── apps/
│   ├── web/              # Next.js frontend
│   ├── httpBackend/      # Express REST API
│   ├── wsBackend/        # WebSocket server
│   └── landing/          # Landing page
├── packages/
│   ├── db/               # Prisma database
│   ├── ui/               # Shared UI components
│   ├── validation/       # Validation schemas
│   ├── Utils/            # Utility functions
│   ├── eslint-config/    # ESLint config
│   └── typescript-config/# TypeScript config
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## Features

- 🔐 User authentication with JWT
- 💬 Real-time messaging via WebSocket
- 🎨 Modern UI with shared component library
- 📦 Monorepo architecture for code sharing
- ✨ Type-safe with TypeScript
- 🗄️ Database integration with Prisma
- 🔍 Code quality with ESLint and Prettier

## Turborepo

This project uses [Turborepo](https://turborepo.com) for efficient monorepo management, providing:

- Fast, incremental builds
- Smart caching and parallelization
- Task orchestration across packages
- Remote caching capabilities

### Useful Turborepo Commands

```sh
# Run dev for all apps
turbo dev

# Build with filtering
turbo build --filter=web

# Clear cache
turbo clean
```

## License

ISC
