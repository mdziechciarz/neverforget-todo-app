import dotenv from 'dotenv';
const result = dotenv.config();

if (result.error)
  throw new Error("Couldn't find .env file!");


export const PORT = process.env.PORT;

export const DB_URI = process.env.DB_URI;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
export const ACCESS_TOKEN_LIFE = process.env.ACCESS_TOKEN_LIFE;
export const NODE_ENVIRONMENT = process.env.NODE_ENV || "development";