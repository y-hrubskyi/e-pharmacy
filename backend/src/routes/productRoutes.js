import { Router } from 'express';

import { authenticate, isValidId, validateBody } from '#middlewares/index.js';
import { joiSchemas } from '#validators/productValidator.js';
import { productController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, productController.get);

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

router.delete(
  '/:productId',
  authenticate,
  isValidId('productId'),
  productController.remove
);

export { router as productRoutes };
