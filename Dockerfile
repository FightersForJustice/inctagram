FROM node:16.14.0 as dependencies

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install

FROM node:16.14.0 as builder

WORKDIR /app

COPY . .

COPY --from=dependencies /app/node_modules ./node_modules

RUN npm install -g pnpm

RUN pnpm build:production

FROM node:16.14.0 as runner

WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["pnpm", "start"]
