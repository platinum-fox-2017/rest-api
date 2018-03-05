const express         = require('express');
const router          = express.Router();
const apiController   = require('../controllers/ApiController')
const auth            = require('../middlewares/auth')
const users           = require('./users');

router.post('/signup', apiController.signUp);
router.post('/signin', apiController.signIn);
router.use('/users',users);

module.exports = router;