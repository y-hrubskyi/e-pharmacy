import { Router } from 'express';

import { authenticate } from '#middlewares/index.js';
import { dashboardController } from '#controllers/index.js';

const router = Router();

router.get('/', authenticate, dashboardController.get);

export { router as dashboardRoutes };
