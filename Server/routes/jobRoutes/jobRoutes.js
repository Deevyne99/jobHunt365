const express = require('express')
const {
  AuthenticateUser,
  AuthorizeUser,
} = require('../../middleware/AuthenticateUser')
const {
  createJobs,
  getAllJobs,
  deleteJob,
  updateJob,
  getSingleJob,
  uploadJobLogo,
} = require('../../controllers/jobControllers')
const router = express.Router()

router
  .route('/create')
  .post(AuthenticateUser, AuthorizeUser('admin', 'agent'), createJobs)

router.route('/allJobs').get(AuthenticateUser, getAllJobs)

router
  .route('/uploadJobLogo')
  .post(AuthenticateUser, AuthorizeUser('admin', 'agent'), uploadJobLogo)

router
  .route('/singleJob/:id')
  .get(AuthenticateUser, getSingleJob)
  .patch(AuthenticateUser, AuthorizeUser('admin', 'agent'), updateJob)
  .delete(AuthenticateUser, AuthorizeUser('admin'), deleteJob)

module.exports = router
