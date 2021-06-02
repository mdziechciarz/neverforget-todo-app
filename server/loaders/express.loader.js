import express from 'express';
import cors from 'cors';
import routes from '../routes/index.js';
import { ApiError, NotFoundError } from '../helpers/errors/ApiError.js';

export default (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use('/', routes);

  app.use((req, res, next) => {
    next(new NotFoundError(`Path "${req.url}" not found`));
  })

  app.use((err, req, res, next) => {
    if (res.headerSent)
      return next(err);

    if (err instanceof ApiError) {
      res.status(err.status).json(err.prepareResponse())
    } else {
      res.status(500).json({
        status: 500,
        message: 'Internal Error'
      })
    }
  })
}