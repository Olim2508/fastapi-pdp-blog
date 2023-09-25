FROM node:18.17.1-alpine3.18 as builder

ARG HOME=/app

WORKDIR $HOME
COPY package.json $HOME/package.json
COPY yarn.lock $HOME/yarn.lock

RUN apk --no-cache add --virtual builds-deps build-base \
	&& yarn cache clean \
	&& yarn install --network-timeout 1000000

COPY . $HOME

RUN chown -R node:node $HOME
USER node

RUN yarn build

RUN mkdir -m 777 ./build/nginx

EXPOSE 3000

CMD yarn start
