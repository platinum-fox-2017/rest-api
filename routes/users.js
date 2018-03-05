const express = require('express');
const router = express.Router();
const { showUser, showSpesificUser, createUser, deleteUser, updateUser } = require('../controllers/user.controller')

/* GET users listing. */
router.get('/users', showUser);
router.get('/users/:id', showSpesificUser);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;
