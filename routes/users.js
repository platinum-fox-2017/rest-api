const express = require('express');
const router = express.Router();
const {getUsers,signup,signin,getById,createUser,deleteUser,updateUsers} = require('../controllers/user.controller')
const {getAuth} = require('../controllers/user.auth')

/* GET users listing. */
router.post('/signup',signup);
router.post('/signin',signin);
router.get('/users',getAuth,getUsers);
router.get('/users/:id',getAuth,getById);
router.post('/users',getAuth,createUser);
router.delete('/users/:id',getAuth,deleteUser);
router.put('/users/:id',getAuth,updateUsers);

module.exports = router;
