const Model = require('../models');
const User = Model.User
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

module.exports = {

  sign_up: (req,res) => {
    const hash = bcrypt.hashSync(req.body.password, salt);
    let newUser = {
      username      : req.body.username,
      password      : hash,
      role          : req.body.role || 'user'
    }
    User.create(newUser)
    .then(newList => {
      res.status(200).json({
        message : "sucessfully add new user",
        data    : newList
      })
    })
  },

  sign_in: (req,res) => {
    console.log(req.body);
    User.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if (user) {
        let checkPass = bcrypt.compareSync(req.body.password, user.password)
        if (checkPass) {
          const token = jwt.sign({ id: user.id, role: user.role }, process.env.SECRET)
          res.status(201).json({
            message : "login success",
            data    : token
          })
        } else {
          res.status(404).json({
            message : "password incorrect"
          })
        }
      } else {
        res.status(404).json({
          message : "username incorrect"
        })
      }
    })
  },

  getUser: (req,res) => {
    User.findAll()
    .then( users => {
      res.status(200).json({
        message : "here's your list of user",
        data    : users
      })
    })
  },

  getById: (req,res) => {
    let idInput = req.params.id
    User.findById(idInput)
    .then(user => {
      if( user ) {
        res.status(200).json({
          message : "user found",
          data    : user
        })
      } else {
        res.status(404).json({
          message : "user not found"
        })
      }
    })
  },

  createUser: (req,res) => {
    const hash = bcrypt.hashSync(req.body.password, salt);
    let newUser = {
      username      : req.body.username,
      password      : hash,
      role          : req.body.role
    }
    User.create(newUser)
    .then(newList => {
      res.status(200).json({
        message : "sucessfully add new user",
        data    : newList
      })
    })
  },

  deleteUser: (req,res) => {
    let idInput = req.params.id
    User.destroy({
      where: {
        id: idInput
      }
    }).then(newList => {
      if(newList) {
        res.status(200).json({
          message : "sucessfully delete user",
          data    : newList
        })
      } else {
        res.status(404).json({
          message : "user not found"
        })
      }
    })
  },

  updateUser: (req,res) => {
    let idInput = req.params.id
    let objUpdate = req.body
    User.update(objUpdate, {
      where: {
        id: idInput
      }
    })
    .then(updatedList => {
      if(updatedList) {
        res.status(200).json({
          message : "sucessfully update user",
          data    : updatedList
        })
      } else {
        res.status(404).json({
          message : "user not found"
        })
      }
    })
  }

}
