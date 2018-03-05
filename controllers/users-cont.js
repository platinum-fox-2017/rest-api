const {User} = require('../models')

module.exports = {
    getUsers: (req, res) => {
        User.findAll().then(users => {
            res.status(200).json({
                message: 'List user',
                users
            })
        })
    },
    createUser: (req, res) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            res.status(200).json({
                message: 'Created new user',
                user
            })
        })
    },
    getSingleUser: (req, res) => {
        User.findById(req.params.id).then(user => {
            if(user){
                res.status(200).json({
                    message: 'User found',
                    user
                })
            } else {
                res.status(404).json({
                    message: 'User not found'
                })
            }
        })
    },
    deleteUser: (req, res) => {
        User.destroy({
            where: {id: req.params.id}
        }).then(user => {
            if(user){
                res.status(200).json({
                    message: 'User deleted',
                    user
                })
            } else {
                res.status(404).json({
                    message: 'User not found'
                })
            }
        })
    },
    updateUser: (req, res) => {
        User.update({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        },{
            where: {id: req.params.id}
        }).then(user => {
            if(user){
                res.status(200).json({
                    message: 'User updated',
                    user
                })
            } else {
                res.staus(404).json({
                    message: 'User not found'
                })
            }
        })
    }
}