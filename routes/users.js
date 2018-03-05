const express = require('express');
const router = express.Router();
const {getUsers, createUser, getSingleUser, deleteUser, updateUser} = require('../controllers/users-cont')
const {admin, userAdmin} = require('../helpers/auth')

/* GET users listing. */
router.get('/', admin, getUsers);
router.post('/', admin, createUser);
router.get('/:id', userAdmin, getSingleUser);
router.delete('/:id', userAdmin, deleteUser);
router.put('/:id', admin, updateUser);

module.exports = router;
