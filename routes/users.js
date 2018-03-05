const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.post('/signup', usersController.signUp);
router.post('/signin', usersController.signIn);
router.get('/users', usersController.getUsers);
router.post('/users', usersController.createUser);
router.get('/users/:id', usersController.getUserById);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.removeUser);

module.exports = router;
