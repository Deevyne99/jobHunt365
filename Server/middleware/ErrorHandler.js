const { StatusCodes } = require('http-status-codes')

const ErrorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    // set default Errors
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong please try again',
  }
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(',')
    customError.statusCode = 400
  }

  if (err.code && err.code === 11000) {
    customError.msg = `Duplicate values entered for ${Object.keys(
      err.keyValue
    )} field please enter another value`
    customError.statusCode = 400
  }
  if (err.name === 'CastError') {
    customError.msg = `No item with the id : ${err.value}`
    customError.statusCode = 404
  }

  return res.status(customError.statusCode).json({ msg: customError.msg })
}

module.exports = ErrorHandlerMiddleware
