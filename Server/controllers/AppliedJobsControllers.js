const Jobs = require('../models/Jobs')
const { StatusCodes } = require('http-status-codes')
const CustomApiErrors = require('../errors')
const AppliedJobs = require('../models/JobsApplied')
const { checkPermission } = require('../utils')

const createAppliedJob = async (req, res) => {
  const { jobId } = req.body
  if (!jobId) {
    req.body.createdBy = req.user.userId

    const appliedJob = await AppliedJobs.create(req.body)
    res.status(StatusCodes.CREATED).json({ success: true, appliedJob })
  }
  const job = await Jobs.findOne({ _id: jobId })
  if (!job) {
    throw new CustomApiErrors.NotFoundError(`No Job with the id ${id}`)
  }
  const alreadyApplied = await AppliedJobs.findOne({
    job: jobId,
    user: req.user.userId,
  })

  if (alreadyApplied) {
    throw new CustomApiErrors.BadRequestError(
      `Already submitted applied for this Job`
    )
  }
  req.body.user = req.user.userId
  req.body.job = jobId
  const JobFromthisSite = await AppliedJobs.create(req.body)
  res.status(StatusCodes.CREATED).json({ success: true, JobFromthisSite })
}

const getAllAppliedJobs = async (req, res) => {
  const appliedJobs = await AppliedJobs.find({ createdBy: req.user.userId })
  res
    .status(StatusCodes.CREATED)
    .json({ success: true, count: appliedJobs.length, appliedJobs })
}

const getSingleAppliedJobs = async (req, res) => {
  const { id: jobId } = req.params
  const job = await AppliedJobs.findOne({
    _id: jobId,
    createdBy: req.user.userId,
  })
  if (!job) {
    throw new CustomApiErrors.NotFoundError(`No job with the id ${jobId}`)
  }

  res.status(StatusCodes.OK).json({ success: true, job: job })
}

const deleteAppliedJobs = async (req, res) => {
  const { id: jobId } = req.params
  const job = await AppliedJobs.findOne({
    _id: jobId,
    createdBy: req.user.userId,
  })
  if (!job) {
    throw new CustomApiErrors.NotFoundError(`No job with the id ${jobId}`)
  }
  checkPermission(req.user, job.createdBy)

  await AppliedJobs.findOneAndDelete({
    _id: jobId,
    createdBy: req.user.userId,
  })
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: 'Deleted Successfully' })
}

const updateAppliedJobs = async (req, res) => {
  const {
    params: { id: appliedId },
    body: {
      company,
      title,
      location,
      locationType,
      minSalary,
      maxSalary,
      status,
      platform,
      dateApplied,
    },
  } = req
  const job = await AppliedJobs.findOne({
    _id: appliedId,
    createdBy: req.user.userId,
  })
  if (!job) {
    throw new CustomApiErrors.NotFoundError(`No job with the id ${appliedId}`)
  }
  checkPermission(req.user, job.createdBy)

  job.company = company
  job.title = title
  job.location = location
  job.locationType = locationType
  job.status = status
  job.maxSalary = maxSalary
  job.minSalary = minSalary
  job.platform = platform
  job.dateApplied = dateApplied

  await job.save()

  res.status(StatusCodes.OK).json({ success: true, job })
}

module.exports = {
  createAppliedJob,
  getAllAppliedJobs,
  getSingleAppliedJobs,
  deleteAppliedJobs,
  updateAppliedJobs,
}
