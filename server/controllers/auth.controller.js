import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const register = async (req, res) => {
  const errors = {};

  try {
    // VALIDATION!!!
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
    const token = jwt.sign({ user_id: savedUser.id }, process.env.jwtSecret, { expiresIn: 24 * 60 * 60 });
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
}


export const login = async (req, res) => {
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

    const token = jwt.sign({ user_id: user.id }, process.env.jwtSecret, { expiresIn: 24 * 60 * 60 });

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
}

