const db = require('../models/index.js')
const express = require('express')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class Api {

  static signUp(req, res){
    db.User.create({
      status: 'user',
      name: req.body.name,
      password: req.body.name,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newUser => {
      if (newUser) {
        res.status(201).json({
          message: 'New user created',
          newUser: newUser
        })
      } else {
        res.status(400).json({
          message: "User is not created"
        })
      }
    }).catch(err=>{
      res.status(500).json({
        err: err.message
      })
    })

  }

  static signIn(req, res){
    db.User.findOne({
      where: {
        name : req.body.name
      }
    }).then(foundUser => {
      if (!foundUser) {
        res.status(404).json({
          message: 'User is not found'
        })
      } else {
        const saltRounds = 10;
        if (!bcrypt.compareSync(req.body.password,foundUser.password)) {
          res.status(401).json({
            message: 'Password is wrong'
          })
        } else {
          let params = {
            id: foundUser.id,
            role: foundUser.status
          }
          let token = jwt.sign(params, process.env.SECRET)
          console.log(token);
          res.status(200).json({
            message: 'Login successful',
            token: token,
            user: foundUser.name
          })
        }
      }
    }).catch(err => {
      res.status(500).json({
        err: err.message
      })
    })


  }

  static getUsers(req, res){
    db.User.findAll({
    }).then(foundUsers=>{
      if (foundUsers) {
        res.status(200).json({
          message: 'All users get',
          foundUsers: foundUsers
        });
      } else {
        res.status(404).json({
          message: "Users is not found"
        })
      }
    }).catch(err=>{
      res.status(500).json({
        err: err.message
      })
    })
  }

  static getUsersById(req, res){
    db.User.findById(req.params.id).then(foundUser => {
      if (foundUser) {
        res.status(200).send({
          message: 'User found',
          foundUser: foundUser
        });
      } else {
        res.status(404).json({
          message: "User is not found"
        })
      }
    }).catch(err=>{
      res.status(500).json({
        err: err.message
      })
    })
  }

  static createUser(req, res){
    db.User.create({
      status: req.body.status,
      name: req.body.name,
      password: req.body.password,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newUser => {
      if (newUser) {
        res.status(201).json({
          message: 'New user is created',
          newUser:newUser
        })
      } else {
        res.status(400).json({
          message: "User is not Created"
        })
      }
    }).catch(err=>{
      res.status(500).json({
        err: err.message
      })
    })
  }

  static deleteUser(req, res){
    db.User.findById(req.params.id).then(foundUser=>{
      if (foundUser) {
        return foundUser.destroy().then((userData)=>{
          res.status(200).json({
            message: 'Deleted User',
            foundUser: foundUser
          })
        })
      } else {
        res.status(404).json({
          message: "User for deletion is not found"
        })
      }
    }).catch(err=>{
      res.status(500).json({
        err: err.message
      })
    })
  }

  static updateUser(req, res){
    db.User.findById(req.params.id).then(foundUser=>{
      if (foundUser) {
        foundUser.update({
          name: req.body.name,
          password: req.body.password,
          updatedAt: new Date()
        }).then(updatedUser=>{
          res.status(200).json({
            message: "updated user data",
            updatedUser: updatedUser
          })
        })
      } else {
        res.status(404).json({
          message: "User for update is not found"
        })
      }
    }).catch(err=>{
      res.status(500).json({
        err: err.message
      })
    })
  }


}

module.exports = {
  Api: Api
};
