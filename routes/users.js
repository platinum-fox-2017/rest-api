const express = require('express');
const router = express.Router();
const {signUp,signIn,showUser,createUser,findUser,updateUser,deleteUser} = require('../controllers/user')
const {auth} = require('../controllers/auth')
/* GET users listing. */

router.post('/signup',signUp)
router.post('/signin',signIn)
router.get('/users',auth,showUser)
router.get('/users/:id',auth,findUser)
router.post('/users',auth, createUser)
router.put('/users/:id',auth, updateUser)
router.delete('/users/:id',auth,deleteUser)

module.exports = router;
