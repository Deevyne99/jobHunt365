const mongoose = require('mongoose')
const bcyrpt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'Please Enter your First name'],
  },
  lastName: {
    type: String,
    required: [true, 'Please Enter your Last name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ],
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: [true, 'Please provide your Phone number'],
  },
  location: {
    type: String,
    required: [true, 'Please provide your location'],
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 6,
  },
  role: {
    type: String,
    enum: ['admin', 'user', 'agent'],
    default: 'user',
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verified: Date,
})

UserSchema.pre('save', async function () {
  const salt = await bcyrpt.genSalt(10)
  this.password = await bcyrpt.hash(this.password, salt)
})

module.exports = mongoose.model('User', UserSchema)
