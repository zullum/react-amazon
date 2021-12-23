FROM node:12

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm && \
    npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "dev"]