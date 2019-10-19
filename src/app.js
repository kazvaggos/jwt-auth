import './util/knex';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import healthRouter from './health/health.routes';
import singinRouter from './signin/signin.routes';
import signupRouter from './signup/signup.routes';
import apiRouter from './api/api.routes';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

const routes = [healthRouter, singinRouter, signupRouter, apiRouter];

app.use('/', routes);

export default app;
