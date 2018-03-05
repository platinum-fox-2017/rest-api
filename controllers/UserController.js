const models = require('../models')

module.exports = {
    getUsers : (req,res) => {
        models.User.findAll()
        .then(users => {
            if(users) {
                res.status(201).json({
                    message : 'get all user data success',
                    users
                })
            } else {
                res.status(404).json({
                    message : 'users not found',
                    users
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
    },

    getUsersById : (req,res) => {
        models.User.findById(req.params.id)
        .then(user => {
            if(user) {
                res.status(201).json({
                    message : 'User found !',
                    user
                })
            } else {
                res.status(404).json({
                    message : 'User not found !',
                    user:[]
                })
            }
        })
        .catch(err=>{
            res.send(err)
        })
    },

    createUser : (req,res) => {
        models.User.create({
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            email     : req.body.email,
            gender    : req.body.gender
        })
        .then(newUser => {
            if(newUser) {
                res.status(201).json({
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
                    res.status(201).json({
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
        models.User.findById(req.params.id)
        .then(user => {
            if(user) {
                user.update({
                    firstName : req.body.firstName,
                    lastName  : req.body.lastName,
                    email     : req.body.email,
                    gender    : req.body.gender
                })
                .then((updatedUser) => {
                    res.status(201).json({
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