import bcrypt from 'bcrypt';
import User from '../models/user.model.js';
import { NotFoundError, UnauthorizedError, ValidationError } from '../helpers/errors/ApiError.js';
import { UsernameTakenError, EmailTakenError } from '../helpers/errors/user.js';

export async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user)
    throw new NotFoundError('User doesn\'t exist');

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    throw new UnauthorizedError('Incorrect credentials');

  return {
    id: user._id,
    username: user.username,
    email: user.email
  }
}

export async function register(username, email, password) {



  const existingEmail = await User.findOne({ email });
  if (existingEmail)
    throw new EmailTakenError(`The email ${email} is already in use`);
  const existingUsername = await User.findOne({ username });
  if (existingUsername)
    throw new UsernameTakenError(`The username ${username} is already in use`);

  const hashedPassword = await bcrypt.hash(password, 8);
  const user = new User({ username, email, password: hashedPassword });
  const savedUser = await user.save();

  return {
    id: savedUser._id,
    username: savedUser.username,
    email: savedUser.email
  }
}