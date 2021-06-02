import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_SECRET } from '../config/index.js'
import { UnauthorizedError } from '../helpers/errors/ApiError.js';

export default (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return next(new UnauthorizedError('Missing Access Token'));
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return next(new UnauthorizedError('Access Token Expired'));
      }
      return next(new UnauthorizedError('Invalid Access Token'));
    }
    req.user_id = decoded.user_id;
    next();
  })
}