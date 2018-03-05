var express = require('express');
var router = express.Router();
const {getUser,getUserById,createUser,deleteUser,updateUser} = require('../controllers/UserController')

/* GET users listing. */
router.get('/users',getUser)
router.get('/users/:id',getUserById)
router.post('/users',createUser)
router.delete('/users/:id',deleteUser)
router.put('/users/:id',updateUser)

module.exports = router;
