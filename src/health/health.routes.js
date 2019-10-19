import {Router} from 'express';

const router = Router();

/**
 * @api {get} /health Check health of api
 * @apiName health
 * @apiGroup Health
 * @apiVersion 1.0.0
 *
 * @apiSuccess {String} status The status of valid verification.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "ok"
 *     }
 */
router.get('/health', (req, res) => {
  res.send({status: 'ok'});
});

export default router;
