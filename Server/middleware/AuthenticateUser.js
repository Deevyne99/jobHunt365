const CustomApiError = require('../errors')
const { verifyToken } = require('../utils')

const AuthenticateUser = (req, res, next) => {
  const token = req.signedCookies.token
  console.log(token)
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

module.exports = AuthenticateUser
