const express = require('express');
const router = express.Router();
const sign = require('../controllers/sign.controller.js')

router.post('/signup', sign.up);
router.post('/signin', sign.in);
router.use('/users', require('./users'));

module.exports = router;
