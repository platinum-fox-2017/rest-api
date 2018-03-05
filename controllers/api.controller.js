'use strict'
const model = require('../models')
const helper = require('../helpers/crypto')
const jwt = require('jsonwebtoken')
module.exports = {
    createUser: (req,res) => {
        model.User.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            DateOfBirth: req.body.DateOfBirth,
            Email: req.body.Email,
            Username: req.body.Username,
            Password: req.body.Password,
            Role: 'guest'
        })
        .then(()=> {
            res.status(200).json({
                message: "new user created",
                user: {
                    name: `${req.body.FirstName} ${req.body.LastName}`
                }
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    },
    findUserById: (req, res) => {
        model.User.findOne({
            where: {id: req.params.id}
        })
        .then(data => {
            if (data){
                res.status(200).send(data)
            } else {
                res.status(400).send({
                    message: "user not found"
                })
            }
        })
    },
    findAllUsers: (req, res) => {
        model.User.findAll({
            raw:true
        })
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(400).send(err)
        })
    },
    signIn: (req, res) => {
        model.User.findAll({
            where: {Username: req.body.Username}
        })
        .then(data => {
            if (data.length > 0){
                if (helper.hasher(req.body.Password) === data[0].dataValues.Password){

                    let token = jwt.sign({ id: data[0].dataValues.id, Role: data[0].dataValues.Role }, 'secretss', { expiresIn: '1h' });
                    res.status(200).json({
                        message: 'login success',
                        token: token
                    })
                }
            } else {
                res.status(404).json({
                    message: 'user not found else'
                })
            }
        })
    },
    createSuperUser: (req, res) => {
        model.User.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            DateOfBirth: req.body.DateOfBirth,
            Email: req.body.Email,
            Username: req.body.Username,
            Password: req.body.Password,
            Role: req.body.Role || 'guest' 
        })
        .then(()=> {
            res.status(200).json({
                message: "new super user created",
                user: {
                    name: `${req.body.FirstName} ${req.body.LastName}`
                }
            })
        })
        .catch(err => {
            res.status(400).json(err)
        })
    },
    deleteUser: (req,res) => {
        model.User.destroy({where: {id: req.params.id}})
        .then((data)=> {
            if (data){
                res.status(200).json({
                    message: "user deleted",
                    data: data
                })
            } else {
                res.status(404).json({
                    message: "user id not found"
                })
            }
        })
    },
    updateUser: (req, res) => {
        model.User.findOne({
            where: {id: req.params.id}
        })
        .then( data => {
            if (data.Role !== 'admin'){
                // console.log('=========', req.body)
                data.update({
                    FirstName: req.body.FirstName,
                    LastName: req.body.LastName,
                    DateOfBirth: req.body.DateOfBirth,
                    Email: req.body.Email,
                    Username: req.body.Username,
                    Password: req.body.Password,
                    Role: 'guest'
                })
                .then(result => {
                    console.log(result)
                    res.status(200).json({
                        message: "record updated",
                        data: data
                    })
                })
            } else {
                // console.log('-------', req.body)
                data.update({
                    FirstName: req.body.FirstName,
                    LastName: req.body.LastName,
                    DateOfBirth: req.body.DateOfBirth,
                    Email: req.body.Email,
                    Username: req.body.Username,
                    Password: req.body.Password,
                    Role: req.body.Role
                })
                .then(result => {
                    console.log(result)
                    res.status(200).json({
                        message: "record updated",
                        data: data
                    })
                })
            }
        })
    }
}