const {postgres} = require('../../config');

const up = (knex, Promise) => {
  return knex.schema.withSchema(postgres.schema).createTable('user', table => {
    table.bigIncrements('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table
      .timestamp('created')
      .notNullable()
      .defaultTo(knex.fn.now());
  });
};

const down = (knex, Promise) => {};

module.exports = {up, down};
