import {Router} from 'express';
import {getUser} from './user.controllers';

const router = Router();

/**
 * @api {get} /api/user Get user data
 * @apiName getUser
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiHeader {String} authorization JWT token
 *
 * @apiSuccess {String} token User data
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1
 *       "name": "John",
 *       "email": "test@test.com"
 *     }
 */
router.get('/user', getUser);

export default router;
