import {Router} from 'express';
import {jwtAuth} from '../util/jwtAuth';
import userRouter from './user/user.routes';

const router = Router();

const routes = [userRouter];

router.use('/api', jwtAuth, routes);

export default router;
