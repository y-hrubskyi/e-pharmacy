import mongoose from 'mongoose';

import { MONGODB_URI } from './env.js';

export const connectDB = async () => {
  await mongoose.connect(MONGODB_URI);
  console.log('Successfully connected to the database');
};
