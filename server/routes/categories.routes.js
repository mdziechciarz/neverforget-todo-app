import { Router } from 'express';
import jwtVerify from '../middleware/jwtVerify.js';
import * as categoriesController from '../controllers/categories.controller.js';

const router = Router();

router.get('/', jwtVerify, categoriesController.get);
router.post('/', jwtVerify, categoriesController.create);
router.put('/:category_id', jwtVerify, categoriesController.update);
router.delete('/:category_id', jwtVerify, categoriesController.remove);

export default router;