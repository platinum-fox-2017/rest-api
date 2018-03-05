var express = require('express');
var router = express.Router();
const authentication = require('../middlewares/authentication').authentication;
const authorization = require('../middlewares/authorization');
const usersController = require('../controllers/users.controller.js');

router.use(authentication);
router.get('/', authorization.admin, usersController.findUsers);
router.get('/:id', authorization.auth, usersController.findUserById);
router.post('/', authorization.admin, usersController.createUser);
router.delete('/:id', authorization.admin, usersController.deleteUser);
router.put('/:id', authorization.auth, usersController.updateUser);

module.exports = router;
