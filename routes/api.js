const express = require('express');
const router = express.Router();
const usersRouter = require('./users');
const {addUser, signIn} = require('../controllers/users.controller');

/* GET users listing. */
router.post('/signup', addUser);
router.post('/signin', signIn);
router.use('/users', usersRouter)


module.exports = router;
