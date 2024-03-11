const CustomApiError = require('../errors')
const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(StatusCodes.OK).json({ success: true, count: users.length, users })
}

const getSingleUser = async (req, res) => {
  const { id: userId } = req.params
  const user = await User.findOne({ _id: userId })
  if (!user) {
    throw new CustomApiError.NotFoundError(
      `user with the id ${userId} does not exist`
    )
  }

  res.status(StatusCodes.OK).json({ success: true, user })
}

const updateUser = async (req, res) => {
  res.send('Update User')
}

const deleteUser = async (req, res) => {
  res.send('delete user')
}

const showUser = async (req, res) => {
  res.send('show user')
}

const updateUserPassword = async (req, res) => {
  res.send('update user password')
}

module.exports = {
  getAllUsers,
  getSingleUser,
  showUser,
  deleteUser,
  updateUser,
  updateUserPassword,
}
