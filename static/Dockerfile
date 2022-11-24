FROM node:16 as build

ARG VITE_WELCOME_MESSAGE

COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.22.1

COPY --from=build dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
