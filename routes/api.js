var express = require('express');
var router = express.Router();
const {userView,userCreate,userFind,userDelete,userEdit} = require('../controllers/api.controller')

/* GET users listing. */

router.get('/users', userView);
router.post('/users',userCreate)
router.get('/users/:id',userFind)
router.delete('/users/:id',userDelete)
router.put('/users/:id',userEdit)

module.exports = router;
