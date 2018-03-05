const sequelize = require('sequelize')
const User = require('../models').User
const bcrypt = require('bcrypt')



class UserController {
  constructor() {

  }

  static viewAllUser(req,res){
    User.findAll()
    .then(users=>{
      res.status(200).json({
        message:'anda sudah bisa masuk untuk melihat seluruh data',
        data:users
      })
      // res.send(users)
    }).catch(err=>{
      res.status(404).json({
      message:'maaf pembacaan data yang anda lakukan error'})
    })
  }

  static addUser(req,res){
    let salt = bcrypt.genSaltSync(10)
    let obj = {
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password,salt),
      role:'user'
    }
      console.log(obj);
    User.create(obj)
    .then(()=>{
      res.status(200).json({
        message:'successfully at creating User data',
        data:obj
      })
    }).catch(err=>{
      res.status(404).json({
        message:'failed at creating User data',
        data:obj
      })
    })
  }

  static addUserAdmin(req,res){
    let salt = bcrypt.genSaltSync(10)
    let obj = {
      username:req.body.username,
      password:bcrypt.hashSync(req.body.password,salt),
      role:'admin'
    }
    User.create(obj)
    .then(()=>{
      res.status(200).json({
        message:'successfully at creating Admin data',
        data:obj
      })
    }).catch(err=>{
      res.status(404).json({
        message:'failed at creating Admin data',
        data:obj
      })
    })
  }

  static updateUser(req,res){
    let objUpdate = {
      username:req.body.username,
      password:req.body.password
    }
    User.update(objUpdate,{
      where:{
        id:req.params.id
      }
    }).then(()=>{
      res.status(200).json({
        message:'successfully at updating data',
        data:objUpdate
      })
    }).catch((err)=>{
      res.status(404).json({
        message:'error at updating data',
        data:objUpdate
      })
    })
  }

  static deleteUser(req,res){
    User.destroy({
      where:{
        id:req.params.id
      }
    }).then(()=>{
      res.status(200).json({
        message:'data sudah berhasil di delete'
      })
    })
  }

  // static signId(req,res,next){
  // let username = req.body.username
  // let password = req.body.password
  // User.findOne({
  //   where: {
  //     username: username
  //   }
  // }).then(user => {
  //     let condition = bcrypt.compareSync(req.body.password, user.password)
  //   })
  // }

}



module.exports = UserController;
