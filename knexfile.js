require('dotenv').config();
const {postgres} = require('./config');

module.exports = {
  connection: postgres,
  client: 'pg',
  searchPath: postgres.schema,
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};
