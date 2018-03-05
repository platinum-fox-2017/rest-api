const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Users = require('../models').Users;
const saltRounds = 10;
const jwt = require('jsonwebtoken');



router.post('/',(req,res,next)=>{
    Users.findAll({
        where:{
            username: req.body.username
        }
    })
    .then((user)=>{
        console.log(user);
        if(user.length <1){
            res.status(401).json({
                message:"Authentication failed"
            })
        } else {
            let check = bcrypt.compareSync(req.body.password, user[0].password);
            if(check === true){
                let token = jwt.sign({
                    id:user[0].id,
                    username:user[0].username,
                    role:user[0].role,
                },process.env.secret,{
                    expiresIn:"1h"
                })
                res.status(200).json({
                    message:"Authentication successful",
                    token:token
                })
            } else {
                res.status(401).json({
                    message:"Authentication failed"
                }) 
            }
        }
    })
    .catch((err)=>{
        res.status(500).json({
            err:err
        })
    });
});

module.exports = router;