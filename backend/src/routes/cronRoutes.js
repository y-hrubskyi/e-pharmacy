import { Router } from 'express';

const router = Router();

router.get('/ping', (req, res) => {
  res.send({ message: `Pong ${Date.now()}` });
});

export { router as cronRoutes };
