
FROM node:alpine

WORKDIR /expensify
 
COPY . ./

RUN yarn

EXPOSE 8080

CMD ["yarn","dev"]