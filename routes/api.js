const express = require('express')
const api = express.Router()
const apiController = require('../controllers/api.controller')
const middleware = require('../middleware/auth')

// sign up with new user info
api.post('/signup', apiController.createUser)

// sign in while get an access token based on credentials
api.post('/signin', apiController.signIn)

// get all the users info (admin only)
api.get('/users', middleware.isAdmin, apiController.findAllUsers)

// get a single user info (admin and authenticated user)
api.get('/users/:id', middleware.isAuth, apiController.findUserById)

// create a user (admin only)
api.post('/users', middleware.isAdmin, apiController.createSuperUser)

// delete a user (admin only)
api.delete('/users/:id', middleware.isAdmin, apiController.deleteUser)

// update a user with new info (admin and authenticated user)
api.put('/users/:id', middleware.isAuth, apiController.updateUser)

module.exports = api