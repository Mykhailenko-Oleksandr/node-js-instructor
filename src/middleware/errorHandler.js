// src/middleware/errorHandler.js

import { HttpError } from 'http-errors';

// Middleware для обробки помилок
export const errorHandler = (err, req, res, next) => {
  const isProd = process.env.NODE_ENV === 'production';

  // Якщо помилка створена через http-errors
  if (err instanceof HttpError) {
    return res.status(err.status).json({
      message: isProd
        ? 'Something went wrong. Please try again later.'
        : err.message || err.name,
    });
  }

  res.status(500).json({
    message: isProd
      ? 'Something went wrong. Please try again later.'
      : err.message,
  });
};
