var express = require('express');
var router = express.Router();
const { admin, auth } = require('../middlewares/auth');
const usersController = require('../controllers/users.controller.js');

router.get('/', admin, usersController.findUsers);
router.get('/:id', auth, usersController.findUserById);
router.post('/', admin, usersController.createUser);
router.delete('/:id', admin, usersController.deleteUser);
router.put('/:id', auth, usersController.updateUser);

module.exports = router;
