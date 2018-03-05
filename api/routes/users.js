const express = require('express');
const router = express.Router();
const Users = require('../controllers/users.controller');

router.get('/',Users.get_all_users);
router.post('/',Users.create_a_user);
router.get('/:id', Users.get_single_user);
router.delete('/:id',Users.create_a_user);
router.put('/:id',Users.update_a_user);

module.exports = router;