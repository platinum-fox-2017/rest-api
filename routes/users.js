const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUser, editUser, deleteUser } = require('../controllers/user.controller');
const { auth, isAdmin, isAuthenticatedUser } = require('../middleware/auth');

/* GET users listing. */
router.get('/', isAdmin, getUsers);

router.get('/:id', isAuthenticatedUser, getUser);

router.post('/', isAdmin, createUser);

router.delete('/:id', isAdmin, deleteUser);

router.put('/:id', isAuthenticatedUser, editUser);

module.exports = router;
