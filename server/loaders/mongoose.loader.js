import mongoose from 'mongoose';
import { DB_URI } from '../config/index.js';

export default async () => {
  const connection = await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  return connection;
}