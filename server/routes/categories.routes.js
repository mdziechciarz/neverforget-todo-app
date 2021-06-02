import { Router } from 'express';
import validate from '../middleware/validator.js';
import verifyAccessToken from '../middleware/verifyAccessToken.js';
import * as categoriesSchema from '../helpers/schemas/categoriesSchema.js';
import * as categoriesController from '../controllers/categories.controller.js';

const router = Router();

router.get('/',
  verifyAccessToken,
  categoriesController.get
);
router.get(
  '/:category_id',
  verifyAccessToken,
  validate(categoriesSchema.getOne.params, 'params'),
  categoriesController.getOne
);
router.post(
  '/',
  verifyAccessToken,
  validate(categoriesSchema.create.body),
  categoriesController.create
);
router.put(
  '/:category_id',
  verifyAccessToken,
  [validate(categoriesSchema.update.params, 'params'), validate(categoriesSchema.update.body)],
  categoriesController.update
);
router.delete(
  '/:category_id',
  verifyAccessToken,
  validate(categoriesSchema.remove.params, 'params'),
  categoriesController.remove);

export default router;