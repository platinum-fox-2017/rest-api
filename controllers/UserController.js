const models = require('../models')
const User = models.User

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
      password:req.body.password
    }
    User.create(newUser).then(data=>{
      if(data){
        res.status(201).json({
          message:"user created",
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
      if(data===1){
        res.status(200).json({
          message:"user is updated"
        })
      }else{
        res.status(404).json({
          message:"user not found"
        })
      }
    })
  }
}