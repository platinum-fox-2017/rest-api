const {User} = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const jwt = require('jsonwebtoken');

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
        const hash = bcrypt.hashSync(req.body.password, salt);
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: 'admin'
        }).then(user => {
            res.status(201).json({
                message: 'New user created',
                user
            })
        }).catch(error => {
            res.status(401).json({
                error
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
    },
    signUp: (req, res) => {
        const hash = bcrypt.hashSync(req.body.password, salt);
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            role: 'user'
        }).then(user => {
            res.status(201).json({
                message: 'New user created',
                user
            })
        }).catch(error => {
            res.status(401).json({
                error
            })
        })
    },
    signIn: (req, res) => {
        User.findOne({
            where : {username : req.body.username}
        }).then(user => {
            if(user){
                let compare = bcrypt.compareSync(req.body.password, user.password)
                if(compare){                    
                    const token = jwt.sign({
                        id: user.id,
                        role: user.role
                    }, process.env.SECRET);
                    res.status(200).json({
                        message: 'Login successful',
                        token
                    })
                } else {
                    res.send('password salah')
                }
            }
        })
    }
}