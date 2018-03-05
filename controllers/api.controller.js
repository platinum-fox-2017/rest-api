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
            res.status(201).redirect('/api/users');
        })
        .catch((err) => {
            res.status(404).send(err);
        })
    },

    postApiSignin: (req, res) => {
        let inputedEmail = req.body.email;
        let inputedPassword = req.body.password;
        model.User.findOne({
            where: {email:inputedEmail}
        })
        .then((user) => {
            if(user) {
                let status = bcrypt.compareSync(inputedPassword, user.password);
                if(status) {
                    const token = jwt.sign({id: user.id, role: user.role}, process.env.SECRET)
                    console.log(token)
                    res.status(200).redirect(`/api/users/${user.id}`)
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
                res.status(404).redirect('/api/users')
            }
        })
        .catch((err) => {
            res.send(err)
        })
    },

    deleteApiUsers: (req, res) => {
        let id = req.params.id;
        res.send(id)
    }
}