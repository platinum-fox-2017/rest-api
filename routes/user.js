const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.js')
const {authAdmin,authRegisteredUser} = require('../helpers/auth.js')


router.post('/signup',UserController.addUser)
router.post('/signin',UserController.signIn)
router.get('/users',authAdmin,UserController.viewAllUser)
router.get('/users/:id',authAdmin,authRegistereduser,UserController.viewOneUser)
router.post('/users',authAdmin,UserController.addUserAdmin)
router.put('/users/:id',authAdmin,authRegisteredUser,UserController.updateUser)
router.delete('/users/:id',authAdmin,UserController.deleteUser)


module.exports = router;
