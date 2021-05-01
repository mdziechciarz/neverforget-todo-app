import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Routes
import authRoutes from './routes/authRoutes.js';



const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());


dotenv.config();


const dbURI = process.env.dbURI;
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });

app.use(authRoutes);

