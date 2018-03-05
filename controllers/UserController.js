const models     = require('../models')
const bcrypt     = require('bcrypt')
const jwt        = require('jsonwebtoken')
const saltRounds = 10;
const Op         = require('sequelize').Op

module.exports = {
    getUsers : (req,res) => {
        if (!req.query.name) {
            models.User.findAll()
            .then(users => {
                if(users) {
                    res.status(200).json({
                        message : 'get all user data success',
                        users
                    })
                } else {
                    res.status(404).json({
                        message : 'users not found',
                        users : []
                    })
                }
            })
            .catch(err => {
                res.send(err)
            })
        } else {
            models.User.findAll({
                where : {
                    [Op.or] : [
                        {
                            firstName : {[Op.iLike] : '%'+req.query.name+'%'}
                        },
                        {
                            lastName : {[Op.iLike] : '%'+req.query.name+'%'}
                        }
                    ]
                }
            })
            .then(users => {
                if(users) {
                    res.status(200).json({
                        message : 'get all user data success',
                        users
                    })
                } else {
                    res.status(404).json({
                        message : 'users not found',
                        users : []
                    })
                }
            })
            .catch(err => {
                res.send(err)
            })
        }
    },

    getUsersById : (req,res) => {
        models.User.findById(req.params.id)
        .then(user => {
            if(user) {
                res.status(200).json({
                    message : 'User found !',
                    user
                })
            } else {
                res.status(404).json({
                    message : 'User not found !',
                    user:{}
                })
            }
        })
        .catch(err=>{
            res.send(err)
        })
    },

    createUser : (req,res) => {
        let userPassword = bcrypt.hashSync(req.body.password, saltRounds);
        models.User.create({
            username  : req.body.username,
            password  : userPassword,
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            email     : req.body.email,
            gender    : req.body.gender,
            role      : req.body.role
        })
        .then(newUser => {
            if(newUser) {
                res.status(200).json({
                    message : 'Create new user success !',
                    newUser
                })
            } else {
                res.status(404).json({
                    message : 'Failed to create new user !',
                    newUser
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
    },

    deleteUser : (req,res) => {
        models.User.findById(req.params.id)
        .then(deletedUser => {
            if (deletedUser) {
                deletedUser.destroy()
                .then(() => {
                    res.status(200).json({
                        message : 'delete user success !',
                        deletedUser
                    })
                })
                .catch(err => {
                    res.send(err)
                })
            } else {
                res.status(404).json({
                    message : 'delete user failed,user not found !',
                    deletedUser:[]
                })
            }
        })
        .catch(err=>{
            res.send(err)
        })
    },

    updateUser : (req,res) => {
        let userPassword = bcrypt.hashSync(req.body.password, saltRounds);

        models.User.findById(req.params.id)
        .then(user => {
            if(user) {
                user.update({
                    username  : req.body.username,
                    password  : userPassword,
                    firstName : req.body.firstName,
                    lastName  : req.body.lastName,
                    email     : req.body.email,
                    gender    : req.body.gender,
                    role      : req.body.role
                })
                .then((updatedUser) => {
                    res.status(200).json({
                        message : 'update user success !',
                        updatedUser
                    })
                })
                .catch(err => {
                    res.send(err)
                })
            } else {
                res.status(404).json({
                    message : 'update user failed,user not found !',
                    updatedUser : []
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}