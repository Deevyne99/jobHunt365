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
} = require('../../controllers/jobControllers')
const router = express.Router()

router
  .route('/create')
  .post(AuthenticateUser, AuthorizeUser(['agent', 'admin']), createJobs)

router.route('/allJobs').get(AuthenticateUser, getAllJobs)

router
  .route('/singleJob/:id')
  .get(AuthenticateUser, getSingleJob)
  .patch(AuthenticateUser, AuthorizeUser(['agent', 'admin']), updateJob)
  .delete(AuthenticateUser, AuthorizeUser(['agent', 'admin']), deleteJob)

module.exports = router
