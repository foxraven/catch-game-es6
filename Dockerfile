FROM node:alpine AS builder
WORKDIR /usr/app
COPY ./package.json .
RUN npm install
COPY webpack.production.config.js .
COPY src ./src
RUN npm run deploy

FROM nginx:alpine
EXPOSE 80
WORKDIR /usr/share/nginx/html
COPY --from=builder /usr/app/dist ./dist
COPY assets ./assets
COPY index.html .