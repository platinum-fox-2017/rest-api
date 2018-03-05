const express = require('express');
const router = express.Router();
const {addUser, getUsers, getUserById, updateUserById, deleteUserById} = require('../controllers/users.controller');
const checkAdmin = require('../helpers/checkAdmin');
const checkAuth = require('../helpers/checkAuth');

router.get('/', checkAdmin, getUsers);
router.post('/', checkAdmin, addUser);

router.get('/:id', checkAuth, getUserById);
router.put('/:id', checkAuth, updateUserById);
router.delete('/:id', checkAdmin, deleteUserById);



module.exports = router;
