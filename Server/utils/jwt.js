const jwt = require('jsonwebtoken')

const createJWT = ({ payload }) => {
  const token = jwt.sign(payload, 'secret', {
    expiresIn: process.env.JWT_LIFETIME,
  })
  return token
}

const verifyToken = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

const attachCookiesToResponse = ({ res, user }) => {
  const token = createJWT({ payload: user })
  const oneDay = 1000 * 60 * 60 * 24

  res.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secured: process.env.NODE_ENV === 'production',
    signed: true,
  })
}

module.exports = { createJWT, verifyToken, attachCookiesToResponse }
