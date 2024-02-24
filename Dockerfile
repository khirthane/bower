FROM node:18-alpine

RUN mkdir -p /usr/src/app

WORKDIR '/app'

COPY package.json .

# install app dependencies
RUN yarn

COPY . .

# start app
CMD ["yarn", "start"]
