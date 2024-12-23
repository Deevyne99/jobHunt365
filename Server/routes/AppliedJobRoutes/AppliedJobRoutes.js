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
  updateAppliedJobs,
} = require('../../controllers/AppliedJobsControllers')
const router = express.Router()

router.route('/create').post(AuthenticateUser, createAppliedJob)
// router.route('/uploadLogo').post(AuthenticateUser, uploadLogo)

router.route('/getAppliedJobs').get(AuthenticateUser, getAllAppliedJobs)

router
  .route('/:id')
  .get(AuthenticateUser, getSingleAppliedJobs)
  .delete(AuthenticateUser, deleteAppliedJobs)
  .patch(AuthenticateUser, updateAppliedJobs)

module.exports = router
