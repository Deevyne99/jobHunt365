const Jobs = require('../models/Jobs')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')

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
  res.send('update job')
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
