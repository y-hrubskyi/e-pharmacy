import { Router } from 'express';

import { authenticate, isValidId, validateBody } from '#middlewares/index.js';
import { joiSchemas } from '#validators/supplierValidator.js';
import { supplierController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, supplierController.getAll);

router.post(
  '/',
  authenticate,
  validateBody(joiSchemas.create),
  supplierController.create
);

router.put(
  '/:supplierId',
  authenticate,
  isValidId('supplierId'),
  validateBody(joiSchemas.update),
  supplierController.update
);

export { router as supplierRoutes };
