FROM node:22-alpine AS deps

WORKDIR /app

RUN npm install -g pnpm

COPY package.json .
COPY pnpm-lock.yaml .
COPY . .

RUN pnpm i

EXPOSE 5173
CMD ["pnpm", "dev"]

FROM node:22-alpine AS builder
ARG MODE

WORKDIR /app
COPY --from=deps /app .
RUN npm install -g pnpm
RUN pnpm build --mode=$MODE