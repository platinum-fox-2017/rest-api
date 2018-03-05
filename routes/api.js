'use strict'
const router = require('express').Router();
const {postApiSignup, postApiSignin, getApiUsers, getUser, postUserAdmin, updateUser, deleteApiUsers} = require('../controllers/api.controller')
const middleware = require('../middleware/auth.js')


router.post('/signup', postApiSignup);
router.post('/signin', postApiSignin);
router.get('/users', middleware.isAdmin, getApiUsers);
router.get('/users/:id',middleware.isAuthUser , getUser);
router.post('/users', middleware.isAdmin, postUserAdmin);
router.delete('/users/:id', middleware.isAdminOrAuthUser, deleteApiUsers);

module.exports = router;