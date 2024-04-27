const CustomApiError = require('../errors')
const { verifyToken } = require('../utils')

const AuthenticateUser = (req, res, next) => {
  const token = req.signedCookies.token
  // console.log(token)
  if (!token) {
    throw new CustomApiError.UnAuthenticatedError('UnAthuthenticated User')
  }

  try {
    const { user, userId, role } = verifyToken({ token })
    req.user = { user, userId, role }

    next()
  } catch (error) {
    console.log(error)
    // throw new CustomApiError.UnAuthenticatedError('UnAthuthenticated User')
  }
}

const AuthorizeUser = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomApiError.UnAuthorizedError(
        'Unauthorized to access this route'
      )
    }
    next()
  }
}

module.exports = { AuthenticateUser, AuthorizeUser }
