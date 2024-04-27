const Jobs = require('../models/Jobs')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { checkPermission } = require('../utils')

const createJobs = async (req, res) => {
  req.body.user = req.user.userId
  const job = await Jobs.create(req.body)
  res.status(StatusCodes.CREATED).json({ success: true, job })
}

const getAllJobs = async (req, res) => {
  const jobs = await Jobs.find({})
  res.status(StatusCodes.OK).json({ success: true, count: jobs.length, jobs })
}

const updateJob = async (req, res) => {
  const { id: jobId } = req.params
  const {
    title,
    company,
    description,
    location,
    locationType,
    minSalary,
    maxSalary,
    jobType,
  } = req.body
  const job = await Jobs.findOne({ _id: jobId })
  if (!job) {
    throw new CustomApiError.NotFoundError(`No job with the id: ${jobId}`)
  }
  checkPermission(req.user, job.user)
  job.title = title
  job.company = company
  job.description = description
  job.location = location
  job.locationType = locationType
  job.minSalary = minSalary
  job.maxSalary = maxSalary
  job.jobType = jobType

  await job.save()

  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: 'Updated successfully', job })
}

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params
  const job = await Jobs.findOneAndDelete({ _id: jobId })
  if (!job) {
    throw new CustomApiError.NotFoundError(`no job with the id ${id}`)
  }

  res.status(StatusCodes.OK).json({ msg: 'Deleted successfully' })
}

const getSingleJob = async (req, res) => {
  const { id: jobId } = req.params
  const job = await Jobs.findOne({ _id: jobId })
  if (!job) {
    throw new CustomApiError.NotFoundError(`no job with the id: ${jobId}`)
  }
  res.status(StatusCodes.OK).json({ success: true, job })
}

module.exports = {
  createJobs,
  getAllJobs,
  deleteJob,
  updateJob,
  getSingleJob,
}
