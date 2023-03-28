FROM node:18.14.2-alpine AS build-env
WORKDIR /app

RUN npm install --location=global pnpm@7

# for pnpm install --frozen-lockfile
COPY .npmrc ./
COPY package.json ./
COPY pnpm-lock.yaml ./

# docker build --build-arg BUILDKIT_INLINE_CACHE=1 --secret id=npm,src=/tmp/.npmrc
RUN --mount=type=secret,id=npm,target=/app/.npmrc pnpm install --frozen-lockfile

# for build
COPY . /app

# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

RUN pnpm run build

FROM gcr.io/distroless/nodejs:16
##FROM gcr.io/distroless/nodejs:16-debug
USER nonroot
WORKDIR /app
COPY --chown=nonroot:nonroot --from=build-env /app/next.config.js ./
COPY --chown=nonroot:nonroot --from=build-env /app/public ./public
COPY --chown=nonroot:nonroot --from=build-env /app/.next ./.next
COPY --chown=nonroot:nonroot --from=build-env /app/node_modules ./node_modules

EXPOSE 3000

CMD ["./node_modules/next/dist/bin/next", "start"]
