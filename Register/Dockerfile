#Docker file
FROM node:18

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY swagger.js .
EXPOSE 80
CMD ["npm", "start"]
