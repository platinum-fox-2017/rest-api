const models = require('../models')
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');

class Users {

  static show(req,res) {
    models.User.findAll().then(data_user => {
      res.status(200).json({
        message: 'users data',
        data: data_user
      })
    })
  }

  static showOne(req, res) {
    models.User.findById(req.params.id).then(data_user => {
      if (data_user) {
        res.status(200).json({
          message: 'users data by Id',
          data: data_user
        })
      }
      else {
        res.status(404).json({
          message:'users data not found'
        })
      }
    })
  }

  static addData(req, res) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    let obj = {
      username: req.body.username,
      password: hash,
      role: req.body.role
    }
    models.User.create(obj).then(data_user => {
      res.status(200).json({
        message: 'create data success',
        data: data_user
      })
    })
  }

  static deleteData(req, res) {
    models.User.findById(req.params.id).then(data_user => {
      models.User.destroy({
        where: {
          id: req.params.id
        }
      }).then(data_user_1 => {
        res.status(200).json({
          message: 'delete success',
          data: data_user
        })
      })
    })
  }

  static editData(req, res) {
    let obj = {
      name: req.body.name,
      password: req.body.password,
      role: req.body.role
    }
    models.User.update(obj, {
      where: {
        id: req.params.id
      }
    }).then(data_user => {
      res.status(200).json({
        message: 'success edit data',
        data: data_user
      })
    })
  }

  static sign_up(req, res) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    let obj = {
      username: req.body.username,
      password: hash,
      role: 'User'
    }
    models.User.create(obj).then(data_user => {
      res.status(200).json({
        message: 'create data success',
        data: data_user
      })
    })
  }

  static sign_in(req, res) {
    console.log(req.body);
    models.User.findOne({
      where: {
        username: req.body.username
      }
    }).then(data => {
      if (data) {
        let check = bcrypt.compareSync(req.body.password, data.password)
        if (check) {
          const token = jwt.sign({id: data.id, role: data.role}, process.env.SECRET)
          res.status(201).json({
            message: 'login success',
            data: token
          })
        }
        else {
          res.status(404).json({
            message: 'password incorrect'
          })
        }
      } else {
        res.status(404).json({
          message: 'username is incorrect'
        })
      }
    })
  }


}


module.exports = Users
