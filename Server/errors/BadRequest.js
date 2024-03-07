const { StatusCodes } = require('http-status-codes')
const CustomApiError = require('./CustomError')

class BadRequestError extends CustomApiError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError
