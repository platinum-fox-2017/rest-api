const express = require('express');
const router = express.Router();
const { show,showOne,addData,deleteData,editData } = require('../controllers/UsersController.js')

/* GET users listing. */
router.get('/users', show);
router.get('/users/:id', showOne);
router.post('/users', addData);
router.delete('/users/:id', deleteData);
router.put('/users/:id', editData);

module.exports = router;
