FROM node:10.16.0-slim

COPY . /node_wap

WORKDIR /node_wap

EXPOSE 7001

CMD [ "npm", "run", "dev" ]