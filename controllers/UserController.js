const models = require('../models')
const User = models.User
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');
require('dotenv').load();

module.exports={
  getUser:(req,res)=>{
    User.findAll().then(userList=>{
      if(userList){
        res.status(200).json({
          message:"User lists are found",
          userList
        })
      }else{
        res.status(404).json({
          message: "user not found"
        })
      }
      
    })
  },
  getUserById:(req,res)=>{
    let id =req.params.id
    User.findById(id).then(dataUser=>{
      if(dataUser){
        res.status(200).json({
          message:"user is found",
          user:dataUser
        })
      }else{
        res.status(404).json({
          message:"user not found"
        })
      }
    })
  },
  createUser:(req,res)=>{
    let newUser ={
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      role:req.body.role
    }
    User.create(newUser).then(data=>{
      if(data){
        res.status(201).json({
          message:"new admin created",
          user:data
        })
      }else{
        res.status(406).json({
          message:"not acceptabe"
        })
      }
      
    })

  },
  deleteUser:(req,res)=>{
    User.findById(req.params.id).then(user=>{
      User.destroy({where:{id:req.params.id}}).then(data=>{
        if(user){
          res.status(200).json({
            message:"user is deleted",
            deletedUser:user
          })
        }else{
          res.status(404).json({
            message:"user not found"
          })
        }
        
      })
    })
    
  },
  updateUser:(req,res)=>{
    User.update(req.body,{where:{id:req.params.id}}).then(data=>{
      if(data){
        res.status(200).json({
          message:"update:user is updated"
        })
      }else{
        res.status(404).json({
          message:"update user:user not found"
        })
      }
    })
  },
  signUp:(req,res)=>{
    let hash = bcrypt.hashSync(req.body.password, salt);
    let newUser ={
      name:req.body.name,
      email:req.body.email,
      password:hash,
      role:req.body.role
    }
    User.create(newUser).then(user=>{
      if(user){
        res.status(201).json({
          message:"user is created",
          user
        })
      }else{
        res.status(406).json({
          message:"something wrong"
        })
      }
    })
  },
  signIn:(req,res)=>{
    let email = req.body.email
    User.findOne({
      where:{email:email}
    }).then(dataUser=>{
      if(dataUser){
        // console.log("token====>",token)
        console.log("role===>",dataUser.role)
        let pass = bcrypt.compareSync(req.body.password, dataUser.password); // true
        if(pass){
          // next()
          let token = jwt.sign({id:dataUser.id,role:dataUser.role},process.env.Secret)
          // let decoded = jwt.verify(token, 'secretKey');
          // console.log("ini decoded===>",decoded)
          res.status(200).json({
            message:"login success",
            token
          })
        }else{
          res.status(400).json({
            message:"wrong email/password "
          })
        }
      }
    })
  }
}