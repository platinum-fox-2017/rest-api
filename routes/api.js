'use strict'
const router = require('express').Router();
const {postApiSignup, postApiSignin, getApiUsers, getUser} = require('../controllers/api.controller')
const middleware = require('../middleware/auth.js')


router.post('/signup', postApiSignup);
router.post('/signin', postApiSignin);
router.get('/users', middleware.authentucation, getApiUsers);
router.get('/users/:id', getUser);

module.exports = router;