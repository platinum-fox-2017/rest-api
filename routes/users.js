const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

/* GET users listing. */
router.post('/signup', usersController.signUp);
router.post('/signin', usersController.signIn);
router.get('/users', authorization, usersController.getUsers);
router.post('/users', authorization, usersController.createUser);
router.get('/users/:id', authentication, usersController.getUserById);
router.put('/users/:id', authentication, usersController.updateUser);
router.delete('/users/:id', authorization, usersController.removeUser);

module.exports = router;
