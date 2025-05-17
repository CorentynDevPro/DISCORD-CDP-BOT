# DISCORD-CDP-BOT

## Introduction

## How to work on the project?

## Installed dependencies

```bash
pnpm init

# Discord bot
pnpm add discord.js @discord/rest @discord/voice @discord/builders

# API & Express Server
pnpm add express swagger-ui-express openapi-typescript
pnpm add -D @types/express @types/swagger-ui-express

# Databases
pnpm add prisma @prisma/client
pnpm add supabase @supabase/supabase-js
pnpm add mongoose

# Documentation
pnpm add -D typedoc typedoc-plugin-markdown

# Code quality
pnpm add -D typescript eslint prettier husky lint-staged
pnpm add -D eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-prettier
pnpm add -D ts-node nodemon

# Environment variables
pnpm add dotenv

# Tests
pnpm add -D vitest c8
```

To generate swagger of configuration, run the following command:

```bash
pnpm openapi-typescript src/api/swagger.json --output src/api/types.ts
```