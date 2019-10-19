import {Router} from 'express';
import {signUp} from './signup.controllers';

const router = Router();

/**
 * @api {post} /signup Sign up user
 * @apiName Signup
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Name of the user
 * @apiParam {String} email Email of the user
 * @apiParam {String} password Password of the user
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "John",
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
router.post('/signup', signUp);

export default router;
