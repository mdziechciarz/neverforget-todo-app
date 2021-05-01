import { Router } from 'express';
import { register_post } from '../controllers/authController.js';

const router = Router();

router.post('/register', register_post);