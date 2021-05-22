import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// import jwtVerify from './middleware/jwtVerify.js';
import authRouter from './routes/auth.routes.js';
import tasksRouter from './routes/tasks.routes.js';
import categoriesRouter from './routes/categories.routes.js';


dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// !!! TODO: set cors options
app.use(cors());


const dbURI = process.env.dbURI;
const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => {
    console.log('Succesfully connected to MongoDB.');
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });


app.get('/', (req, res) => {
  res.json({ message: 'HELLO!' })
})
// app.get('/jwt', jwtVerify);
app.use('/auth', authRouter);
app.use('/categories', categoriesRouter);
app.use('/tasks', tasksRouter);



