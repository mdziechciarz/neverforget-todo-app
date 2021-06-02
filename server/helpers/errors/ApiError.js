export class ApiError extends Error {
  constructor(status, message) {
    super(message)

    this.status = status;

    // No need to assign this.name = 'SomeDetailedError' in every suberror
    this.name = this.constructor.name;
    Error.captureStackTrace(this, ApiError);
  }

  prepareResponse() {
    return {
      // type: this.name,
      status: this.status,
      message: this.message
    }
  }
}


// Detailed Errors

export class ValidationError extends ApiError {
  constructor(message = 'Validation Error', details = {}) {
    super(400, message);
    this.details = details;
  }

  prepareResponse() {
    return {
      // type: error.name,
      status: this.status,
      message: this.message,
      details: this.details
    }
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Not Found') {
    super(404, message);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message = 'Unauthorized') {
    super(401, message);
  }
}

export class AlreadyExistsError extends ApiError {
  constructor(message = 'Already exists') {
    super(409, message);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message = 'Permission denied') {
    super(403, message);
  }
}