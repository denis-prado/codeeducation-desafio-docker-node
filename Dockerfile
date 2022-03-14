FROM node:15

WORKDIR /usr/src/app

RUN npm install

COPY ./node .

EXPOSE 3000

CMD ["node", "index.js"]