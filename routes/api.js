var express = require('express');
var router = express.Router();
const {authAdminOnly,authAdminAndUser} = require('../helper/auth.helper')
const {userView,userCreate,userFind,userDelete,userEdit,userSignUp,userSignIn} = require('../controllers/api.controller')

/* GET users listing. */

router.post('/signup',userSignUp)
router.post('/signin',userSignIn)

router.get('/users', authAdminOnly, userView);



router.post('/users',authAdminOnly,userCreate)
router.get('/users/:id',authAdminAndUser,userFind)
router.delete('/users/:id',authAdminOnly,userDelete)
router.put('/users/:id',authAdminAndUser,userEdit)

module.exports = router;
