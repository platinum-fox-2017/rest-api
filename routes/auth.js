const express = require('express');
const router = express.Router();
const {signUp, signIn} = require('../controllers/users-cont');

/* GET users listing. */
router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;
