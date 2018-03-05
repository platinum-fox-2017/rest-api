const express         = require('express');
const router          = express.Router();
const userController  = require('../controllers/UserController')
const auth            = require('../middlewares/auth')

router.get('/', auth.check('admin') ,userController.getUsers);
router.get('/:id', auth.check(), userController.getUsersById);
router.post('/', auth.check('admin'), userController.createUser);
router.delete('/:id',auth.check('admin') ,userController.deleteUser);
router.put('/:id', auth.check(), userController.updateUser);

module.exports = router;