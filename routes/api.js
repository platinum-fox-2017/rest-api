var express = require('express');
var router = express.Router();
const users = require('../controllers/user.controller')

//sign up
router.post('/signup')
//sign in
router.post('/signin')
//get all user info
router.get('/users')
//get single user info
router.get('/users/:id')
//create a user
router.post('/users')
//delete a user
router.delete('/users/:id')
//update a user with new info
router.put('/users/:id')

module.exports = router;