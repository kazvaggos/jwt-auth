import {Router} from 'express';
import {signIn} from './signin.controllers';

const router = Router();

/**
 * @api {post} /signin Sign in user
 * @apiName Signin
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email Email of the user
 * @apiParam {String} password Password of the user
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "test@test.com"
 *       "password": "123456789"
 *     }
 *
 * @apiSuccess {String} token JWT token
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "jwttoken"
 *     }
 */
router.post('/signin', signIn);

export default router;
