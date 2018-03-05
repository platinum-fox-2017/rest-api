const models = require('../models')


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
    let obj = {
      name: req.body.name,
      password: req.body.password
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
      password: req.body.password
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
}


module.exports = Users
