FROM node:latest

WORKDIR /app

COPY . .

ENV PORT=8000

ENV NODE_ENV=docker

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]