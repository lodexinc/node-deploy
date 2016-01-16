FROM node:4.2.4

RUN mkdir -p /app
ADD ./src /app
WORKDIR /app
RUN npm install
EXPOSE  3001

CMD node app.js
