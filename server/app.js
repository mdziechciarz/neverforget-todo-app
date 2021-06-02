import express from 'express';
import loaders from './loaders/index.js';
import { PORT } from './config/index.js';

const startServer = async () => {
  const app = express();

  await loaders(app);

  app
    .listen(PORT, () => {
      console.log('Server is ready!.');
    })
    .on('error', err => {
      console.log(err);
      process.exit(1);
    });
}

startServer();