const express = require('express');
const router = express.Router();
const {getUsers, createUser, getSingleUser, deleteUser, updateUser} = require('../controllers/users-cont')

/* GET users listing. */
router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getSingleUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
