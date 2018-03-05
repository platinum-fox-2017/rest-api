const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.js')



router.get('/',UserController.viewAllUser)
router.post('/addAdmin',UserController.addUserAdmin)
router.post('/',UserController.addUser)
router.post('/',UserController.updateUser)
router.post('/',UserController.deleteUser)


module.exports = router;
