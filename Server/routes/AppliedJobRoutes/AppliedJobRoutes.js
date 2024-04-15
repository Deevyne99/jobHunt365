const express = require('express')
const {
  AuthenticateUser,
  AuthorizeUser,
} = require('../../middleware/AuthenticateUser')
const {
  createAppliedJob,
  getAllAppliedJobs,
  getSingleAppliedJobs,
  deleteAppliedJobs,
} = require('../../controllers/AppliedJobsControllers')
const router = express.Router()

router.route('/create').post(AuthenticateUser, createAppliedJob)

router.route('/getAppliedJobs').get(AuthenticateUser, getAllAppliedJobs)

router
  .route('/:id')
  .get(AuthenticateUser, getSingleAppliedJobs)
  .delete(AuthenticateUser, deleteAppliedJobs)

module.exports = router
