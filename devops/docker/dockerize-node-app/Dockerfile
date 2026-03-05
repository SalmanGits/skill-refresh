FROM node:18-slim

RUN mkdir app

WORKDIR /app

COPY package*.json ./

RUN npm i pnpm -g

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD ["node","dist/index.js"]
