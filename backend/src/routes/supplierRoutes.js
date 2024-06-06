import { Router } from 'express';

import { authenticate, validateBody } from '#middlewares/index.js';
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

export { router as supplierRoutes };
