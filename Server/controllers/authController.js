const User = require('../models/User')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse } = require('../utils')

const registerUser = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, location, password } =
    req.body
  //check if email exist
  const emailExist = await User.findOne({ email })
  if (emailExist) {
    throw new CustomApiError.BadRequestError('Email Already Exist')
  }
  const firstUser = (await User.countDocuments({})) === 0
  const role = firstUser ? 'admin' : 'user'
  const user = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
    password,
    role,
  })
  const tokenUser = { user: user.email, userId: user._id, role: user.role }

  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.CREATED).json({ success: true, data: tokenUser })
}

const loginUser = async (req, res) => {
  res.send('login user')
}

module.exports = { registerUser, loginUser }
