FROM cl00e9ment/node.js-builder as builder

WORKDIR /app

ARG APP

COPY . .

RUN pnpm i -P

RUN pnpm --filter $APP run build

FROM caddy:alpine

WORKDIR /app

COPY Caddyfile /etc/caddy/Caddyfile

ARG APP

COPY --from=builder /app/apps/$APP/dist .

EXPOSE 80
