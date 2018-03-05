const express = require('express');
const routersignin = express.Router();
const sign =require('../controllers/controllersignin.js')


routersignin.post('/',sign.signin)

module.exports = routersignin
