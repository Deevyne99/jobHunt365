const User = require('../models/User')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const registerUser = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, location, password } =
    req.body
  //check if email exist
  const emailExist = await User.findOne({ email })
  // if (emailExist) {
  //   throw new CustomApiError.BadRequestError('Email Already Exist')
  // }
  const user = await User.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    location,
    password,
  })
  res.status(StatusCodes.CREATED).json({ success: true, data: user })
}

const loginUser = async (req, res) => {
  res.send('login user')
}

module.exports = { registerUser, loginUser }
