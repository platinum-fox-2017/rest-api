const express = require('express');
const router = express.Router();
const Users_Controller = require('../controllers/users.controller');

router.get('/',Users_Controller.get_all_users);
router.post('/',Users_Controller.create_a_user);
router.get('/:id', Users_Controller.get_single_user);
router.delete('/:id',Users_Controller.delete_a_user);
router.put('/:id',Users_Controller.update_a_user);

module.exports = router;