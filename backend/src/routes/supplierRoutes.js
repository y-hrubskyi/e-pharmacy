import { Router } from 'express';

import { authenticate } from '#middlewares/index.js';
import { supplierController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, supplierController.getAll);

export { router as supplierRoutes };
