const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.js')
const {auth} = require('../helpers/auth.js')


router.post('/signup',UserController.addUser)
router.post('/signin',UserController.signIn)
router.get('/users',auth,UserController.viewAllUser)
router.get('/users/:id',auth,UserController.viewAllUser)
router.post('/users',auth,UserController.addUserAdmin)
router.put('/users/:id',auth,UserController.updateUser)
router.delete('/users/:id',UserController.deleteUser)


module.exports = router;
