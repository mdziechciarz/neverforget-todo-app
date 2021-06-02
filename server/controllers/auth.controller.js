import * as userService from '../services/userService.js';
import { createToken } from '../helpers/accessToken.js';


export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const user = await userService.register(username, email, password);
    const token = createToken({ user_id: user.id });

    return res.status(201).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      accessToken: token
    })


  } catch (err) {
    console.log(err);
    next(err);
  }
}


export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userService.login(email, password);
    const token = createToken({ user_id: user.id });

    return res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      accessToken: token
    })

  } catch (err) {
    next(err);
  }
}

