const express = require('express');
const router = express.Router();
const { getUser, getById, createUser, deleteUser, updateUser, sign_up, sign_in} = require('../controllers/user.controller');
const { auth } = require('../controllers/auth')

/* GET users listing. */
router.get('/users', auth, getUser);
router.get('/users/:id', auth, getById);

router.post('/signup', sign_up)
router.post('/users', auth, createUser)
router.post('/signin', sign_in)

router.delete('/users/:id', auth, deleteUser)
router.put('/users/:id', auth, updateUser)

module.exports = router;
