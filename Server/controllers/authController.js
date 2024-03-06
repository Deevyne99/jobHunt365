const User = require('../models/User')

const registerUser = async (req, res) => {
  res.send('hello world register user')
}

const loginUser = async (req, res) => {
  res.send('login user')
}

module.exports = { registerUser, loginUser }
