const express = require('express');
const routersignup = express.Router();
const sign =require('../controllers/controllersignup.js')


routersignup.post('/',sign.signup)

module.exports = routersignup
