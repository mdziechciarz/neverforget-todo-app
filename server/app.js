import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from './models/user.model.js';

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

app.post('/auth/register', async (req, res) => {
  //   const errors = { username: '', email: '', password: '' };

  //   // Check for username or password duplicates

  //   User.findOne({ username: req.body.username })
  //     .exec((err, user) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(500).send();
  //       }
  //       if (user) {
  //         console.log('USER WITH SAME USERNAME FOUND');
  //         errors.username = 'Username is already in use!';
  //       }
  //     })

  //   if (errors.username || errors.email) {
  //     return res.status(400).send({ errors })
  //   }

  //   bcrypt.hash(req.body.password, 8, (err, hashedPassword) => {
  //     if (err) {
  //       console.log(err);
  //       return res.status(500).send();
  //     }

  //     const user = new User({
  //       username: req.body.username,
  //       email: req.body.email,
  //       password: hashedPassword
  //     });

  //     // If user saved succesfully, create token and send to user
  //     user.save((err, user) => {
  //       if (err) {
  //         console.log(err);
  //         return res.status(500).send();
  //       }

  //       const token = jwt.sign({ id: user.id }, process.env.jwtSecret, { expiresIn: 24 * 60 * 60 });

  //       res.status(201).send({
  //         id: user.id,
  //         username: user.username,
  //         email: user.email,
  //         accessToken: token
  //       });
  //     })
  //   })



  const errors = {};
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      errors.username = 'Username is already in use!'
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      errors.email = 'Email is already in use!'
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }

  if (errors.username || errors.email) {
    return res.status(400).send({ errors })
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 8);

  const user = new User({ username: req.body.username, email: req.body.email, password: hashedPassword });

  try {
    const savedUser = await user.save();
    const token = jwt.sign({ id: savedUser.id }, process.env.jwtSecret, { expiresIn: 24 * 60 * 60 });
    return res.status(201).send({
      user: {
        id: savedUser.id,
        username: savedUser.username,
        email: savedUser.email,
      },
      accessToken: token
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
});

app.post('/auth/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        errors: {
          email: 'User doent\'t exist'
        }
      });
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(403).send({
        errors: {
          password: 'Invalid credentials'
        }
      });
    }

    const token = jwt.sign({ id: user.id }, process.env.jwtSecret, { expiresIn: 24 * 60 * 60 });

    return res.status(200).send({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      accessToken: token
    });

  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
});



