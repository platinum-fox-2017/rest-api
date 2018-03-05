var express = require('express');
var routeruser = express.Router();
const user =require('../controllers/controlleruser.js')
const check = require('../midlewars/token.js');


/* GET users listing. */
routeruser.get('/',check.auth,user.listuser);
routeruser.get('/:id',check.listoredit,user.listuserid);
routeruser.post('/',check.auth, user.register);
routeruser.delete('/:id',check.auth, user.delete);
routeruser.put('/:id',check.listoredit,user.update);

module.exports = routeruser;
