const CustomApiError = require('../errors')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const path = require('path')
const {
  createTokenUser,
  attachCookiesToResponse,
  checkPermission,
} = require('../utils')

const getAllUsers = async (req, res) => {
  const { search, sort, role } = req.query

  const queryObject = {}
  if (search) {
    queryObject.email = { $regex: search, $options: 'i' }
  }
  if (role && role !== 'all') {
    queryObject.role = role
  }

  let result = User.find(queryObject)

  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('firstName')
  }
  if (sort === 'z-a') {
    result = result.sort('-firstName')
  }

  //pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit
  result = result.skip(skip).limit(limit)

  const users = await result
  const totalUsers = await User.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalUsers / limit)

  res
    .status(StatusCodes.OK)
    .json({ success: true, totalUsers, numOfPages, users })
}

const uploadAvatar = async (req, res) => {
  console.log(req.files)
  if (!req.files) {
    throw new CustomApiError.BadRequestError('No file was uploaded')
  }
  const avatar = req.files.image
  if (!avatar.mimetype.startsWith('image')) {
    throw new CustomApiError.BadRequestError('Please upload an image')
  }
  const maxSize = 1024 * 1024 * 2
  if (avatar > maxSize) {
    throw new CustomApiError.BadRequestError(
      'Please Upload image less than 2mb'
    )
  }
  const imagePath = path.join(
    __dirname,
    '../images/avatars/' + `${avatar.name}`
  )

  await avatar.mv(imagePath)
  res.status(StatusCodes.OK).json({ image: `/avatars/${avatar.name}` })
}

const getSingleUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new CustomApiError.NotFoundError(
      `user with the id ${userId} does not exist`
    )
  }

  checkPermission(req.user, user._id)

  res.status(StatusCodes.OK).json({ success: true, user })
}

const updateUser = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, location } = req.body

  if (!firstName || !lastName || !email || !phoneNumber || !location) {
    throw new CustomApiError.BadRequestError('Please enter all fields')
  }
  const user = await User.findOne({ _id: req.user.userId })
  if (!user) {
    throw new CustomApiError.NotFoundError(
      `user with the id ${req.user.userId} does not exist`
    )
  }
  user.firstName = firstName
  user.lastName = lastName
  user.location = location
  user.phoneNumber = phoneNumber
  user.email = email
  await user.save()
  const tokenUser = createTokenUser(user)
  attachCookiesToResponse({ res, user: tokenUser })
  res.status(StatusCodes.OK).json({ success: true, tokenUser })
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  const user = await User.findOneAndDelete({ _id: id })
  if (!user) {
    throw new CustomApiError.NotFoundError(`no user with the id ${id}`)
  }

  res.status(StatusCodes.OK).json({ msg: 'Deleted successfully' })
}

const showUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ success: true, user: req.user })
}

const updateUserPassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body
  console.log(oldPassword, newPassword)
  if (!oldPassword || !newPassword) {
    throw new CustomApiError.BadRequestError('Please enter both values')
  }
  const user = await User.findOne({ _id: req.user.userId })
  const isPasswordMatch = await user.comparePassword(oldPassword)
  if (!isPasswordMatch) {
    throw new CustomApiError.UnAuthenticatedError('Invalid password')
  }

  user.password = newPassword
  await user.save()

  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: 'Password update was succesful' })
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showUser,
  deleteUser,
  updateUser,
  updateUserPassword,
  uploadAvatar,
}
