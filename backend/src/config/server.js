import { PORT } from './env.js';

export const startServer = app => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
