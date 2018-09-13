FROM mhart/alpine-node:10
ARG BUNDLER
WORKDIR /usr/src
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
RUN mv ./dist /public