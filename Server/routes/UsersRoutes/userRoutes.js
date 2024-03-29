const express = require('express')
const {
  getAllUsers,
  getSingleUser,
  showUser,
  deleteUser,
  updateUser,
  updateUserPassword,
} = require('../../controllers/userController')

const router = express.Router()

router.route('/').get(getAllUsers)

router.route('/updateUserPassword').patch(updateUserPassword)

router.route('/showMe').get(showUser)

router.route('/:id').get(getSingleUser).delete(deleteUser).patch(updateUser)

module.exports = router
