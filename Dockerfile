FROM node:15

WORKDIR /usr/src/app

COPY ./node .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]