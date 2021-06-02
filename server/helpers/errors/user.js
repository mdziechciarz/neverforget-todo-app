import { ApiError } from "./ApiError.js";

export class UsernameTakenError extends ApiError {
  constructor(message = 'Username is already in use') {
    super(409, message)
  }
}

export class EmailTakenError extends ApiError {
  constructor(message = 'Email is already in use') {
    super(409, message)
  }
}