import { Router } from 'express';

import { authenticate, validateBody } from '#middlewares/index.js';
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

export { router as productRoutes };
