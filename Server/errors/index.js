const BadRequestError = require('./BadRequest')
const UnAuthenticatedError = require('./UnAuthenticated')
const UnAuthorizedError = require('./UnAuthorized')
const NotFoundError = require('./notFound')

module.exports = {
  BadRequestError,
  UnAuthenticatedError,
  NotFoundError,
  UnAuthorizedError,
}
