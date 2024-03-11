const User = require('../models/User')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { attachCookiesToResponse, createJWT } = require('../utils')

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

  res.status(StatusCodes.CREATED).json({ success: true, tokenUser })
}
//+++++++++++++++++++++++++ LOGIN ++++++++++++++++++++++++++++++++++++++++
const loginUser = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new CustomApiError.BadRequestError('Please enter email and password')
  }

  /////////////////CHECK IF USER EXIST ////////////////////////////////////
  const user = await User.findOne({ email })
  if (!user) {
    throw new CustomApiError.UnAuthenticatedError('Invalid Credentials')
  }

  //////////////// CHECK PASSWORD /////////////////////////////////////////
  const isPasswordMatch = await user.comparePassword(password)
  if (!isPasswordMatch) {
    throw new CustomApiError.BadRequestError('Incorrect passord')
  }
  const tokenUser = { user: user.email, userId: user._id, role: user.role }

  attachCookiesToResponse({ res, user: tokenUser })

  res.status(StatusCodes.OK).json({ success: true, tokenUser })
}

//+++++++++++++++++++++++++ LOGOUT ++++++++++++++++++++++++++++++++++++++++

const logout = async (req, res) => {
  res.cookie('token', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({ success: true, msg: 'Logout Successful' })
}

module.exports = { registerUser, loginUser, logout }
