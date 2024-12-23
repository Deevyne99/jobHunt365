const Jobs = require('../models/Jobs')
const { StatusCodes } = require('http-status-codes')
const CustomApiErrors = require('../errors')
const AppliedJobs = require('../models/JobsApplied')
const { checkPermission } = require('../utils')
const path = require('path')

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
  const { search, status, jobType, locationType, sort } = req.query
  const queryObject = {
    createdBy: req.user.userId,
  }
  if (search) {
    queryObject.title = { $regex: search, $options: 'i' }
  }
  if (status && status !== 'all') {
    queryObject.status = status
  }
  if (jobType && jobType !== 'all') {
    queryObject.jobType = jobType
  }
  if (locationType && locationType !== 'all') {
    queryObject.locationType = locationType
  }
  let result = AppliedJobs.find(queryObject)
  if (sort === 'latest') {
    result = result.sort('-createdAt')
  }
  if (sort === 'oldest') {
    result = result.sort('createdAt')
  }
  if (sort === 'a-z') {
    result = result.sort('title')
  }
  if (sort === 'z-a') {
    result = result.sort('-title')
  }

  //pagination
  const page = Number(req.query.page) || 1
  const limit = Number(req.query.limit) || 10
  const skip = (page - 1) * limit
  result = result.skip(skip).limit(limit)
  const appliedJobs = await result
  const totalJobs = await AppliedJobs.countDocuments(queryObject)
  const numOfPages = Math.ceil(totalJobs / limit)

  res
    .status(StatusCodes.CREATED)
    .json({ success: true, totalJobs, numOfPages, appliedJobs })
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

//some users wont have the logo of the company they applied too
// const uploadLogo = async (req, res) => {
//   console.log(req.files)

//   if (!req.files) {
//     throw new CustomApiErrors.BadRequestError('No file was uploaded')
//   }
//   const logo = req.files.logo
//   if (!logo.mimetype.startsWith('image')) {
//     throw new CustomApiErrors.BadRequestError('Please upload an image')
//   }

//   //calculate max size
//   const maxSize = 1024 * 1024 * 2

//   //check if image is greater than max size
//   if (logo > maxSize) {
//     throw new CustomApiErrors.BadRequestError(
//       'Please Upload image less than 2mb'
//     )
//   }

//   const imagePath = path.join(__dirname, '../images/logos/' + `${logo.name}`)
//   await logo.mv(imagePath)
//   res.status(StatusCodes.OK).json({ image: `/logos/${logo.name}` })
// }

module.exports = {
  createAppliedJob,
  getAllAppliedJobs,
  getSingleAppliedJobs,
  deleteAppliedJobs,
  updateAppliedJobs,
}
