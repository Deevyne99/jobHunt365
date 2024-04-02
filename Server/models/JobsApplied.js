const mongoose = require('mongoose')

const JobApplied = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: [true, 'Please provide user'],
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
  },
  company: String,
  title: String,
  location: String,
  locationType: {
    type: String,
    enum: ['Remote', 'Onsite', 'Hybrid'],
    default: 'Onsite',
  },
  jobType: {
    type: String,
    enum: ['Internship', 'Part Time', 'Full Time', 'Contract'],
    default: 'Full Time',
  },
  dateApplied: {
    type: Date,
    default: Date.now,
  },
  platform: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ['Pending', 'Interview', 'Declined', 'Accepted'],
    default: 'Pending',
  },
  minSalary: {
    type: Number,
    default: 0,
  },
  maxSalary: {
    type: Number,
    default: 0,
  },
})

module.exports = mongoose.model('AppliedJobs', AppliedJob)
