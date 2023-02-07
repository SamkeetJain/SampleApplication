FROM node:16-alpine as builder

COPY package.json yarn.lock ./

RUN yarn install && mkdir /frontend && mv ./node_modules ./frontend
WORKDIR /frontend
COPY . .
RUN yarn build

FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY docker-entrypoint.sh /docker-entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]