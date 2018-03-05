const express = require('express');
const router = express.Router();
const {
	signup, signin, findUsers, findUserById, createUser, deleteUser, updateUser
} = require('../controllers/users.controller.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond from api');
});

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/users', findUsers);
router.get('/users/:id', findUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;
