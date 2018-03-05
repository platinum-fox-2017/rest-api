const express = require('express');
const router = express.Router();
const { readUser, readUserById, createUser, updateUser, deleteUser } = require('../controllers/users')

router.get('/', readUser)
router.get('/:id', readUserById)
router.post('/', createUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router;
