import { Router } from 'express';

import { authenticate } from '#middlewares/index.js';
import { productController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, productController.getAll);

export { router as productRoutes };
