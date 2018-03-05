const router = require('express').Router();
const {getUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/UserController');
const auth = require('../middleware/auth');

router.get('/',auth.isAuthorizedAdmin, getUsers);
router.get('/:id',auth.isAuthorizedAdminorMember, getUser);
router.post('/',auth.isAuthorizedAdmin, createUser);
router.delete('/:id',auth.isAuthorizedAdmin, deleteUser);
router.put('/:id',auth.isAuthorizedAdminorMember, updateUser);

module.exports = router;
