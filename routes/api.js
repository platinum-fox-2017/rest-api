const express = require('express');
const router = express.Router();
const { show,showOne,addData,deleteData,editData,sign_up,sign_in } = require('../controllers/UsersController.js')
const {auth} = require('../controllers/auth');


/* GET users listing. */
router.get('/users',auth, show);
router.get('/users/:id',auth, showOne);
router.post('/users',auth, addData);
router.delete('/users/:id',auth, deleteData);
router.put('/users/:id', editData);

router.post('/signup', sign_up);
router.post('/signin', sign_in);




module.exports = router;
