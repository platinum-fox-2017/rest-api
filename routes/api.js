var express = require('express');
var router = express.Router();
const {signUp, signIn, getUsers, getUsersById, createUser, deleteUser, updateUser} = require('../controllers/apiController.js').Api

/* GET users listing. */
router.post('/signup', signUp);
router.post('/signin', signIn);

router.get('/users', getUsers); // admin only
router.get('/users/:id', getUsersById); // admin & auth user

router.post('/users', createUser); // admin only
router.delete('/users/:id', deleteUser); // admin only
router.put('/users/:id', updateUser); // admin and auth user

module.exports = router;
