const mongoose = require('mongoose')

const AppliedJob = new mongoose.Schema(
  {
    createdBy: {
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
      enum: ['Internship', 'Part-time', 'Full-time', 'Contract'],
      default: 'Full-time',
    },

    platform: {
      type: String,
      required: false,
    },
    logo: {
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
  },
  { timestamps: true }
)

module.exports = mongoose.model('AppliedJobs', AppliedJob)
