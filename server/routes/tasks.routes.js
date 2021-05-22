import { Router } from 'express';
import jwtVerify from '../middleware/jwtVerify.js';
import * as tasksController from '../controllers/tasks.controller.js';

const router = Router();

router.get('/', jwtVerify, tasksController.get);
router.post('/', jwtVerify, tasksController.create);
router.put('/:task_id', jwtVerify, tasksController.update);
router.delete('/:task_id', jwtVerify, tasksController.remove);


export default router;