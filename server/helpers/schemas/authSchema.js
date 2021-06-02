import Joi from 'joi';

const USERNAME_REGEX = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/; // Only contains alphanumeric characters, underscore and dot. Underscore and dot can't be at the end or start. Underscore or dot can't be used multiple times in a row.
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/ // Minimum eight characters, at least one letter, one number and one special character:


export const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const registerSchema = Joi.object().keys({
  username: Joi.string().regex(USERNAME_REGEX).message('username must be valid').required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(PASSWORD_REGEX).message('password must be valid').required()
});
