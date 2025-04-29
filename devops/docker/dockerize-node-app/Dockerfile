FROM node:19-bullseye

RUN mkdir app

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","dist/index.js"]
