const user    = require('../models/users')
const bcrypt  = require('bcryptjs')
const jwt     = require('jsonwebtoken')

module.exports = {
  signupUser: (req, res) => {
    user.create({
      name      : req.body.name,
      email     : req.body.email,
      password  : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      role      : 'user'
    })
    .then(user => {
      res.status(200).json({
        message: 'success insert record',
        user
      })
    })
    .catch(err => {
      console.error(err)
    })
  },
  signinUser: (req, res) => {
    user.find({ email: req.body.email })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user[0].password)) {
          let payload = {
            id    : user[0]._id,
            name  : user[0].name,
            email : user[0].email,
            role  : user[0].role,
          }
          jwt.sign(payload, process.env.TOKEN_SECRET, (err, token) => {
            if (!err) {
              res.status(200).json({
                message: 'success insert record',
                token
              })
            } else {
              console.error(err)
            }
          })
        } else {
          res.status(403).json({
            message: 'invalid email or password'
          })
        }
      } else {
        res.status(403).json({
          message: 'user not found'
        })
      }
    })
    .catch(err => {
      console.error(err)
    })
  },
  readUser: (req, res) => {
    user.find()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.error(err)
    })
  },
  readUserById: (req, res) => {
    user.findById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      console.error(err)
    })
  },
  createUser: (req, res) => {
    user.create({
      name      : req.body.name,
      email     : req.body.email,
      password  : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
      role      : req.body.role
    })
    .then(user => {
      res.status(200).json({
        message: 'success insert record',
        user
      })
    })
    .catch(err => {
      // console.error(err)
      res.status(403).json({
        message: err.message
      })
    })
  },
  updateUser: (req, res) => {
    user.findOneAndUpdate({
      '_id': req.params.id
    }, {
      $set: {
        name      : req.body.name,
        password  : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
        role      : req.body.role
      }
    })
    .then(user => {
      if (user) {
        res.status(200).json({
          message: 'success update record',
          user
        })
      } else {
        res.status(404).json({
          message: 'user not found',
          user
        })
      }
    })
    .catch(err => {
      console.error(err)
    })
  },
  deleteUser: (req, res) => {
    user.findByIdAndRemove(req.params.id)
    .then(user => {
      res.status(200).json({
        message: 'success delete record',
        user
      })
    })
    .catch(err => {
      res.status(403).json({
        message: 'id not found'
      })
    })
  }
}
