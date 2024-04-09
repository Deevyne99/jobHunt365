const Jobs = require('../models/Jobs')
const CustomApiError = require('../errors')
const { StatusCodes } = require('http-status-codes')

const createJobs = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: 'create job route' })
}

const getAllJobs = async (req, res) => {
  res.send('Get all jobs')
}

const updateJob = async (req, res) => {
  res.send('update job')
}

const deleteJob = async (req, res) => {
  res.send('delete job')
}

const getSingleJob = async (req, res) => {
  res.send('Get Single job')
}

module.exports = createJobs = {
  createJobs,
  getAllJobs,
  deleteJob,
  updateJob,
  getSingleJob,
}
