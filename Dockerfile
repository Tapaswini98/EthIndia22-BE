FROM node:16.10.0-alpine3.14

ENV LOG_LEVEL ${LOG_LEVEL}

WORKDIR /app

COPY . .

RUN ["npm", "install"]

RUN ["npm", "run", "build"]

CMD ["npm", "start"]
