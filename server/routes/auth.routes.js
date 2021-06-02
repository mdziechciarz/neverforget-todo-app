import validate from '../middleware/validator.js';
import { loginSchema, registerSchema } from '../helpers/schemas/authSchema.js';
import { Router } from 'express';
import * as authController from '../controllers/auth.controller.js';

const router = Router();

router.post(
  '/login',
  validate(loginSchema),
  authController.login
);

router.post(
  '/register',
  validate(registerSchema),
  authController.register
);

export default router;
