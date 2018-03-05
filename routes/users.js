const express = require('express');
const router = express.Router();
const { signUp, signIn, showUser, showSpesificUser, createUser, deleteUser, updateUser } = require('../controllers/user.controller')
const middlewareAuth = require('../middleware/auth')
const middlewareAuthCommon = require('../middleware/authcommon')

/* GET users listing. */
router.get('/users', middlewareAuth.authAdmin, showUser);
router.get('/users/:id', middlewareAuthCommon.authCommon, showSpesificUser);
router.post('/users', middlewareAuth.authAdmin, createUser);
router.delete('/users/:id', middlewareAuth.authAdmin, deleteUser);
router.put('/users/:id', middlewareAuthCommon.authCommon, updateUser);
router.post('/signup', signUp);
router.post('/signin', signIn);

module.exports = router;
