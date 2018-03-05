const express = require('express');
const router = express.Router();
const { signin } = require('../controllers/signin.controller');

/* GET users listing. */
router.post('/', signin);

module.exports = router;
