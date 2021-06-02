import { Router } from 'express';
import verifyAccessToken from '../middleware/verifyAccessToken.js';
import validate from '../middleware/validator.js';
import * as tasksSchema from '../helpers/schemas/tasksSchema.js';
import * as tasksController from '../controllers/tasks.controller.js';

const router = Router();

router.get(
  '/',
  verifyAccessToken,
  tasksController.get
);

router.get(
  '/:task_id',
  verifyAccessToken,
  validate(tasksSchema.getOne.params, 'params'),
  tasksController.getOne
);

router.post(
  '/',
  verifyAccessToken,
  validate(tasksSchema.create.body),
  tasksController.create
);

router.put(
  '/:task_id',
  verifyAccessToken,
  [validate(tasksSchema.update.body), validate(tasksSchema.update.params, 'params')],
  tasksController.update
);

router.delete(
  '/:task_id',
  verifyAccessToken,
  validate(tasksSchema.remove.params, 'params'),
  tasksController.remove
);


export default router;