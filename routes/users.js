const express = require('express');
const router = express.Router();
const Users_Controller = require('../controllers/users.controller');
const Check = require('../middleware/check_authentication');


router.get('/',Check.check_authentication,Users_Controller.get_all_users);
router.post('/',Check.check_authentication,Users_Controller.create_a_user);
router.get('/:id', Check.check_authentication,Users_Controller.get_single_user);
router.delete('/:id',Check.check_authentication,Users_Controller.delete_a_user);
router.put('/:id',Check.check_authentication,Users_Controller.update_a_user);

module.exports = router;