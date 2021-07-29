FROM node:16-alpine3.14
ENV NODE_ENV=production
WORKDIR /api
COPY package.json ./
RUN npm install --production
COPY . .
EXPOSE 8080
CMD [ "npm","run", "dev" ]