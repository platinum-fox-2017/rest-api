const express = require('express');
const router = express.Router();
const {signUp,signIn,showUser,createUser,findUser,updateUser,deleteUser} = require('../controllers/user')

/* GET users listing. */
router.post('/signup',signUp)
router.post('/signin',signIn)
router.get('/users',showUser)
router.get('/users/:id',findUser)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id',deleteUser)

module.exports = router;
