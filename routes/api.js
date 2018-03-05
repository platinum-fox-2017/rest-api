var express = require('express');
var router = express.Router();
var facebook = require('../middleware/facebook')
var authentication = require('../middleware/authentication')
var authorization = require('../middleware/authorization')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

module.exports = router;
