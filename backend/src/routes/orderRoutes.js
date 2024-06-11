import { Router } from 'express';

import { authenticate } from '#middlewares/index.js';
import { orderController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, orderController.get);

export { router as orderRoutes };
