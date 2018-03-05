const express = require('express');
const router = express.Router();
const userController  = require('../controllers/UserController')

router.get('/', userController.getUsers);
router.get('/:id', userController.getUsersById);
router.post('/', userController.createUser);
router.delete('/:id', userController.deleteUser);
router.put('/:id',userController.updateUser);

module.exports = router;