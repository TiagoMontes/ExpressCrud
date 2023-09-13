FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install -g nodemon

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev" ]