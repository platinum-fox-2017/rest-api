const express = require('express');
const router = express.Router();
const { hello, signUp, createUser, signIn, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/user_controller')
const { auth, authUser } = require('../controllers/auth')

// router.get('/', testing)
router.get('/hello', hello)
router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/users', auth, getUsers)
router.get('/users/:id', authUser, getUserById)
router.post('/users', auth, createUser)
router.put('/users/:id', authUser, updateUser)
router.delete('/users/:id', auth, deleteUser)

module.exports = router;
