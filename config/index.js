require('dotenv').config();

const postgres = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER || 'devuser',
  password: process.env.DATABASE_PASS || 'devpass',
  database: process.env.DATABASE_NAME || 'pgdb',
  schema: process.env.DATABASE_SCHEMA || 'jwt_auth'
};

const jwtConfig = {
  secret: process.env.JWT_SECRET || 'secret',
  expiration: process.env.JWT_EXPIRATION || '100d'
};

module.exports = {postgres, jwtConfig};
