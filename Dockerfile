FROM node
MAINTAINER sean mcgee <smcgee@pharossecurity.com>

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app

# Build it
RUN npm run clean && npm run build && npm run build:server

ENV NODE_ENV production

EXPOSE 8000
CMD ["npm", "run", "start:prod"]
