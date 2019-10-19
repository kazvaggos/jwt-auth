import jwt from 'jsonwebtoken';
import {jwtConfig} from '../../config';

const newToken = user =>
  jwt.sign({id: user.id, email: user.email}, jwtConfig.secret, {
    expiresIn: jwtConfig.expiration
  });

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, jwtConfig.secret, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

const jwtAuth = async (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end();
  }

  const token = bearer.split('Bearer ')[1].trim();

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).end();
  }

  req.jwtPayload = payload;
  next();
};

export {jwtAuth, newToken, verifyToken};
