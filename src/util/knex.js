import Knex from 'knex';
import {Model} from 'objection';
import {postgres} from '../../config';

const knex = Knex({
  connection: postgres,
  client: 'pg',
  pool: process.env.NODE_ENV === 'production' ? {min: 2, max: 10} : {min: 0, max: 1},
  searchPath: postgres.schema
});

Model.knex(knex);

export default knex;
