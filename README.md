<p align="center">
  <h1 align="center">JTW Auth</h1>
  <p align="center">JWT Auth boilerplate for Node projects using Express and PostgreSQL</p>
</p>

## Getting started

Install node packages. Make sure you have installed at least Node.js v10.
```sh
$ npm i
```
Create a `.env` file with the contents from `.env.sample`

## Build & Run
Build and Start the Node server
```sh
$ npm start

# development using nodemon with live reload
$ npm run dev:watch

# debug
$ npm run debug
```
The server started at `http://localhost:3000`


## Tests
### Unit
* Run ``npm run test`` in order to run all the unit tests. This will build the results into `./reports/results/unit` folder.

* Run ``npm run test:coverage`` in order to run all the unit tests and create a coverage folder. This will build the coverage into `./reports/coverage` folder.

### Functional

* Run ``npm run test:functional`` in order to run all the functional tests. This will build the results into `./reports/results/functional` folder.

## Database
* Run ``docker-compose up db`` to start the database container

* Connect to the database named `pgdb` and create a schema named `jwt_auth`

* Run ``npm run db:migrate`` to populate the schema with the required tables

## Docker
* Run ``npm run docker:build`` in order to build docker image with tag `latest`.

* Run ``docker-compose up`` from project's root path to start the containers

## Documentation
* Run ``npm run docs`` in order to create API reference manual. This will build the documentation into `./reports/apidoc` folder.
