const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/signup.controller');

/* GET users listing. */
router.post('/', signup);

module.exports = router;
