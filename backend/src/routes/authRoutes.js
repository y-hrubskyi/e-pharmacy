import { Router } from 'express';

import { validateBody } from '#middlewares/index.js';
import { joiSchemas } from '#validators/userValidator.js';
import { authController } from '#controllers/index.js';

const router = Router();

router.post('/login', validateBody(joiSchemas.login), authController.login);

export { router as authRoutes };
