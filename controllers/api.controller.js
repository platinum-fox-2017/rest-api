'use strict'
const model = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = {
    postApiSignup: (req, res) => {
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password,
            role: "user"
        };
        model.User.create(newUser)
        .then(() => {
            res.status(200).json({
                user,
                message: "User successfully created"
            })
        })
        .catch((err) => {
            res.status(404).send(err);
        })
    },

    postApiSignin: (req, res) => {
        let inputedEmail = req.body.email;
        let inputedPassword = req.body.password;
        console.log(inputedEmail, inputedPassword)
        model.User.findOne({
            where: {email:inputedEmail}
        })
        .then((user) => {
            if(user) {
                let status = bcrypt.compareSync(inputedPassword, user.password);
                if(status) {
                    const token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET)
                    console.log(token)
                    // headers.token = token;
                    res.status(200).json({
                        user,
                        message: "Signed In"
                    })
                }
                else {
                    res.status(401).json({
                        message: "wrong password"
                    })
                }
            } else {
                res.status(401).json({
                    message: "email not found"
                })
            }
        })
        .catch((err) => {
            res.send(err)
        })
    },

    getApiUsers: (req, res) => {
        model.User.findAll()
        .then((users) => {
            res.status(201).send(users);
        })
        .catch((err) => {
            res.status(401).json({
                message: err
            });
        })
    },

    getUser: (req, res) => {
        let id = req.params.id
        model.User.findById(id)
        .then((user) => {
            if(user) {
                res.status(200).send(user)
            } else {
                res.status(404).json({
                    message: "user not found"
                })
            }
        })
        .catch((err) => {
            res.send(err)
        })
    },

    postUserAdmin: (req, res) => {
        let newUser = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password,
            role: req.body.role
        };
        model.User.create(newUser)
        .then((user) => {
            res.status(200).json({
                user,
                message: "User successfully created"
            })
        })
        .catch((err) => {
            res.status(404).send(err);
        }) 
    },

    deleteApiUsers: (req, res) => {
        let id = req.params.id;
        model.User.findById(id)
        .then((user) => {
            user.destroy()
            .then(() => {
                if(user) {
                    res.status(200).json({
                        message: "user deleted"
                    })
                } else {
                    res.status(404).json({
                        message: "user not found"
                    })
                }
            })
        })
    },

    updateUser: (req, res) => {
        let id = req.params.id;
        model.User.findById(id)
        .then((user) => {
            if(user) {
                let updatedValue = {
                    firstName: req.body.firstName || user.firstName,
                    lastName: req.body.lastName || user.lastName,
                    email: req.body.email || user.email,
                    password: req.body.password || user.password,
                    gender: req.body.gender || user.gender,
                    role: req.body.role || user.role
                };
                model.User.update(updatedValue, {where:{id: id}})
            } else {
                res.status(404).json({
                    message: "user not found"
                })
            }
        })
        .catch((err) => {
            res.status(401).json({
                message: err,
            })
        })
    }
}