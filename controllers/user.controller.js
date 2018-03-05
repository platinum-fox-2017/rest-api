const models = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    createUser: (req, res) => {
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
        models.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            role: req.body.role
        }).then(user => {
            res.status(200).json({
                message: 'New user created',
                user
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    getUsers: (req, res) => {
        models.User.findAll()
        .then(users => {
            if(users){
                res.status(200).json({
                    message: 'Success',
                    users
                })
            }else{
                res.status(404).json({
                    message: 'No user found',
                    users
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    getUser: (req, res) => {
        models.User.findOne({
            where: {id: req.params.id}
        })
        .then(user => {
            if(user){
                res.status(200).json({
                    message: 'Success',
                    user
                })
            }else{
                res.status(404).json({
                    message: 'User not found',
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    editUser: (req, res) => {
        models.User.update({
            name: req.body.name,
            email: req.body.email
        },{
            where: {id: req.params.id}
        })
        .then(updated => {
            if(updated){
                models.User.findOne({
                    where: {id: req.params.id}
                }).then(user => {
                    res.status(200).json({
                        message: 'User updated',
                        user
                    })
                }).catch(err => {
                    res.status(500).json({
                        message: err
                    })
                })
            }else{
                res.status(404).json({
                    message: 'User not found',
                })
            }
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    },
    deleteUser: (req, res) => {
        models.User.findOne({
            where: {id: req.params.id}
        })
        .then(user => {
            if(user){
                user.destroy()
                .then(deleted => {
                    res.status(200).json({
                        message: 'User deleted',
                        userDeleted: user
                    })
                })
            }else{
                res.status(404).json({
                    message: 'User not found'
                })
            }
            
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}