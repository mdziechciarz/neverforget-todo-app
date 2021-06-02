import { Router } from 'express';
import authRouter from './auth.routes.js';
import tasksRouter from './tasks.routes.js';
import categoriesRouter from './categories.routes.js';
import verifyAccessToken from '../middleware/verifyAccessToken.js';

const app = Router();

app.use('/auth', authRouter);
app.use('/tasks', tasksRouter);
app.use('/categories', categoriesRouter);

app.get('/token', verifyAccessToken, (req, res) => res.status(200).send());

export default app;