const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter the job title'],
    },
    company: {
      type: String,
      required: [true, 'Please enter the company'],
    },
    location: {
      type: String,
      required: [true, 'Please enter the company'],
    },
    locationType: ['Remote', 'Onsite', 'Hybrid'],
    description: {
      type: String,
      required: [true, 'Please enter the job description'],
    },
    minSalary: {
      type: Number,
      default: 0,
      required: [true, 'Please enter the minimum salary'],
    },
    maxSalary: {
      type: Number,
      default: 0,
      required: [true, 'Please enter the minimum salary'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Jobs', JobSchema)
