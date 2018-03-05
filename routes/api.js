var express = require('express');
var router = express.Router();
const {getUser,getUserById,createUser,deleteUser,updateUser,signUp,signIn} = require('../controllers/UserController')
const {authAdmin,authAdminUser} = require('../controllers/auth')
/* GET users listing. */
router.get('/users',authAdmin, getUser) //admin only
router.get('/users/:id',authAdminUser,getUserById) //admin n user
router.post('/users',authAdmin,createUser) //admin
router.delete('/users/:id',authAdmin,deleteUser) //admin
router.put('/users/:id',authAdminUser,updateUser) //admin n user
router.post('/signup',signUp) 
router.post('/signin',signIn)

module.exports = router;
