FROM node:10

EXPOSE 3000

RUN mkdir app
WORKDIR app

COPY package.json package.json
RUN npm install

COPY scripts/ .
RUN chmod a+x docker-entrypoint.sh

COPY . .

ENTRYPOINT ["./docker-entrypoint.sh"]
