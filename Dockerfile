# Stage 1

# pull node base image
FROM node:16-alpine as build-step
# set working directory
WORKDIR /app
# copy file and exclude .dockerIgnore list file
COPY . /app
# npm install
RUN npm install
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# build prod code
RUN npm run build

# Stage 2
# pull nginx base image
FROM nginx:1.21.6-alpine

# build file to nginx
COPY --from=build-step /app/dist /usr/share/nginx/html

# port
EXPOSE 80
