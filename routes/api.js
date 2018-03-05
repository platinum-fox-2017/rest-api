var express = require('express');
var router = express.Router();
const {signUp, signIn, getUsers, getUsersById, createUser, deleteUser, updateUser} = require('../controllers/apiController.js').Api
const Auth = require('../controllers/auth.js').Auth

/* GET users listing. */
router.post('/signup', signUp);
router.post('/signin', signIn);

router.get('/users', Auth.authentication, Auth.adminOnly , getUsers); // admin only
router.get('/users/:id',Auth.authentication, Auth.authorization , getUsersById); // admin & auth user

router.post('/users', Auth.authentication, Auth.adminOnly , createUser); // admin only
router.delete('/users/:id', Auth.authentication, Auth.adminOnly , deleteUser); // admin only
router.put('/users/:id', Auth.authentication, Auth.authorization , updateUser); // admin and auth user

module.exports = router;
