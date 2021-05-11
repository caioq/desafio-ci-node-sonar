FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm install -S express && npm install jest @types/jest sonar-scanner -D

EXPOSE 3000

CMD ["node","src/index.js"]