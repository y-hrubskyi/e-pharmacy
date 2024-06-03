import { Router } from 'express';

import { authenticate, validateBody } from '#middlewares/index.js';
import { joiSchemas } from '#validators/userValidator.js';
import { authController } from '#controllers/index.js';

const router = Router();

router.post('/login', validateBody(joiSchemas.login), authController.login);

router.get('/logout', authenticate, authController.logout);

router.get('/user-info', authenticate, authController.getCurrent);

export { router as authRoutes };
