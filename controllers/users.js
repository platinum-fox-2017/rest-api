const user = require('../models/users')

module.exports = {
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
      password  : req.body.password
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
  updateUser: (req, res) => {
    user.findOneAndUpdate({
      '_id': req.params.id
    }, {
      $set: {
        name      : req.body.name,
        password  : req.body.password
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
    user.findOneAndDelete({ '_id': req.params.id })
    .then(user => {
      if (user) {
        res.status(200).json({
          message: 'success delete record',
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
  }
}
