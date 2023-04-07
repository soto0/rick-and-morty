FROM node:19.8.1-alpine

WORKDIR /usr/src/app

COPY . .
RUN npm install

CMD ["npm", "start"]