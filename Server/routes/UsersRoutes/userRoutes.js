const express = require('express')
const {
  getAllUsers,
  getSingleUser,
  showUser,
  deleteUser,
  updateUser,
  updateUserPassword,
} = require('../../controllers/userController')

const {
  AuthenticateUser,
  AuthorizeUser,
} = require('../../middleware/AuthenticateUser')

const router = express.Router()

router.route('/').get(AuthenticateUser, AuthorizeUser('admin'), getAllUsers)

router.route('/updateUserPassword').patch(AuthenticateUser, updateUserPassword)

router.route('/showMe').get(AuthenticateUser, showUser)

router.route('/updateUser').patch(AuthenticateUser, updateUser)

router
  .route('/:id')
  .get(AuthenticateUser, AuthorizeUser('admin'), getSingleUser)
  .delete(AuthenticateUser, AuthorizeUser('admin'), deleteUser)

module.exports = router
