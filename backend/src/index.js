import express from 'express';
import logger from 'morgan';
import cors from 'cors';

import { connectDB, startServer } from './config/index.js';
import { urlNotFound, errorHandler } from './middlewares/index.js';
import { initRoutes } from './routes/index.js';

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

initRoutes(app);

app.use(urlNotFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    startServer(app);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

start();
