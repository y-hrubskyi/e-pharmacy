import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import { initRoutes } from '#routes/index.js';
import { errorHandler, urlNotFound } from '#middlewares/index.js';
import { connectDB, startServer } from '#config/index.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

initRoutes(app);

app.use(urlNotFound);
app.use(errorHandler);

(async () => {
  try {
    await connectDB();
    startServer(app);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})();
