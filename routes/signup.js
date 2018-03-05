const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models').Users;
const saltRounds = 10;



router.post('/',(req,res,next)=>{
    let hash = bcrypt.hashSync(req.body.password, saltRounds);
    let new_user ={}
    new_user.username = req.body.username;
    new_user.password = hash
    Users.create(new_user)
    .then((new_signup)=>{
        res.status(201).json({
            new_signup:new_signup,
            message:"New sign up created"
        })
    })
    .catch((err)=>{
        res.status(500).json({
            err:err
        })
    })
});

module.exports = router;

