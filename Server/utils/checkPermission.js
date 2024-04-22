const CustomAPIErrors = require('../errors')

const checkPermission = (reqUser, reqUserId) => {
  // console.log(reqUser, reqUserId)
  if (reqUser.role === 'admin') return
  if (reqUser.userId === reqUserId.toString()) return
  throw new CustomAPIErrors.UnAuthorizedError(
    'Not Authorized to access this Route'
  )
}

module.exports = checkPermission
