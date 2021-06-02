import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_LIFE, ACCESS_TOKEN_SECRET } from '../config/index.js';

export function createToken(payload) {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_LIFE
  });
}