const express = require('express');
const router = express.Router();
const { signupUser, signinUser, readUser, readUserById, createUser, updateUser, deleteUser } = require('../controllers/users')
const auth = require('../middleware/auth')

router.post('/signup', signupUser)
router.post('/signin', signinUser)
router.get('/', auth.roleAdmin, readUser)
router.get('/:id', auth.roleAdmin, readUserById)
router.post('/', auth.roleAdmin, createUser)
router.put('/:id', auth.roleAdmin, updateUser)
router.delete('/:id', auth.roleAdmin, deleteUser)

module.exports = router;
