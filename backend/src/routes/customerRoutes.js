import { Router } from 'express';

import { authenticate } from '#middlewares/index.js';
import { customerController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, customerController.get);

export { router as customerRoutes };
