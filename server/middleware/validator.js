import { ValidationError } from "../helpers/errors/ApiError.js";

const validationOptions = {
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
  errors: { wrap: { label: '' } }
}

export default (schema, source = 'body') => async (req, res, next) => {
  try {
    const value = await schema.validateAsync(req[source], validationOptions);
    next();

  } catch (err) {
    const details = {}
    err.details.forEach(({ message, context: { label } }) => details[label] = message);

    next(new ValidationError('Request validation failed', details));
  }
}