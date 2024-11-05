const Jobs = require('../models/Jobs')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')
const { checkPermission } = require('../utils')
const path = require('path')

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

const uploadJobLogo = async (req, res) => {
  // console.log(req.files)
  //check if a file was chosen
  if (!req.files) {
    throw new CustomApiError.BadRequestError('No file was uploaded')
  }

  const logo = req.files.logo
  console.log(logo)
  if (!logo.mimetype.startsWith('image')) {
    throw new CustomApiError.BadRequestError('Please Upload an image')
  }

  //calculate max size
  const maxSize = 1024 * 1024 * 2

  //check if image is greater than max size
  if (logo > maxSize) {
    throw new CustomApiError.BadRequestError(
      'Please Upload image less than 2mb'
    )
  }
  const imagePath = path.join(__dirname, '../images/jobLogos/' + `${logo.name}`)
  await logo.mv(imagePath)
  res.status(StatusCodes.OK).json({ image: `/jobLogos/${logo.name}` })
}

module.exports = {
  createJobs,
  getAllJobs,
  deleteJob,
  updateJob,
  getSingleJob,
  uploadJobLogo,
}
