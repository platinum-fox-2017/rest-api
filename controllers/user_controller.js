const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  testing: (req, res) => {
    res.status(201).json({
      message: 'Connected!'
    })
  },

  hello: (req, res) => {
    res.status(201).json({
      message: `hello ${req.query.name}`
    })
  },

  signUp: (req, res) => {
    let user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: 'user'
    }
    models.User.create(user)
      .then(user => {
        res.status(201).json({
          message: 'creating new user success',
          user
        })
      }).catch(err => {
        res.status(400).json({
          message: err
        })
      })
  },

  createUser: (req, res) => {
    let user = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }
    models.User.create(user)
      .then(user => {
        res.status(201).json({
          message: 'creating new user success',
          user
        })
      }).catch(err => {
        res.status(400).json({
          message: err
        })
      })
  },

  signIn: (req, res) => {
    models.User.findOne({
      where: {username: req.body.username}
    }).then(data => {
      let match = bcrypt.compareSync(req.body.password, data.password)
      let token
      if(match) {
        token = jwt.sign({id: data.id, role: data.role}, process.env.SECRET)
        // console.log(token)
        res.status(201).json({
          message: 'login success!'
        })
      } else {
        res.status(404).json({
          message: 'wrong login information'
        })
      }
    }).catch(err => {
      res.status(404).json({
        message: 'username not found'
      })
    })
  },

  getUsers: (req, res) => {
    models.User.findAll()
      .then(users => {
        res.status(201).json({
          message: 'Users List',
          users
        })
      }).catch(err => {
        res.status(404).json({
          message: err
        })
      })
  },

  getUserById: (req, res) => {
    models.User.findById(req.params.id)
      .then(user => {
        res.status(201).json({
          message: 'User found',
          user
        })
      }).catch(err => {
        res.status(404).json({
          message: err
        })
      })
  },

  updateUser: (req, res) => {
    let userUpdate = req.body
    models.User.findById(req.params.id)
      .then(user => {
        user.update(userUpdate)
          .then(userupdate => {
            res.status(201).json({
              message: 'user updated!',
              userupdate
            })
          }).catch(err => {
            res.status(404).json({
              message: err
            })
          })
      }).catch(err => {
        res.status(404).json({
          message: err
        })
      })
  },

  deleteUser: (req, res) => {
    models.User.findById(req.params.id)
      .then(user => {
        user.destroy()
          .then(() => {
            res.status(201).json({
              message: `user deleted!`,
              user
            })
          }).catch(err => {
            res.status(401).json({
              message: err
            })
          })
      }).catch(err => {
        res.status(401).json({
          message: err
        })
      })
  }
}