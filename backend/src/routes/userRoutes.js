import { Router } from 'express';

import { validateBody } from '#middlewares/index.js';
import { joiSchemas } from '#validators/userValidator.js';
import { userController } from '#controllers/index.js';

const router = Router();

router.post('/login', validateBody(joiSchemas.login), userController.login);

export { router as userRoutes };
