import { Router } from 'express';

import { authenticate, isValidId, validateBody } from '#middlewares/index.js';
import { joiSchemas } from '#validators/productValidator.js';
import { productController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, productController.getAll);

router.post(
  '/',
  authenticate,
  validateBody(joiSchemas.create),
  productController.create
);

router.put(
  '/:productId',
  authenticate,
  isValidId('productId'),
  validateBody(joiSchemas.update),
  productController.update
);

export { router as productRoutes };
