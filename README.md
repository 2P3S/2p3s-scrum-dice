This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project package versions

### Node.js

```bash
$ nvm install 18.14.2
$ nvm use 18.14.2
```

### pnpm

```bash
$ corepack enable
$ corepack prepare pnpm@7.30.5 --activate
```

## Setup

### Install package

```bash
$ cp .env.example .env
$ pnpm install --frozen-lockfile
```

### Start development

```bash
# http://localhost:3000
$ pnpm dev
```

## Docker

```bash
$ pnpm run docker:build
$ pnpm run docker:run
$ pnpm run docker:stop
```
