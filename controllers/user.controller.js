const { User } = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    signUp(req,res) {
        const saltRounds = 10;
        var hash = bcrypt.hashSync(req.body.password, saltRounds);

        let addUserObj = {
            email: req.body.email,
            password: hash,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone,
            user_level: req.body.user_level
        }

        User.create(addUserObj)
        .then(data => {
            res.status(201).json({
                message: "Sign up succesfully!",
                data
            })
        })
        .catch(err => {
            console.log(err)
        })
    },
    signIn(req,res) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(data => {
            let checkPassword = bcrypt.compareSync(req.body.password, data.password);
            // console.log(token)
            if (checkPassword) {
                const token = jwt.sign({ id: data.id, user_level: data.user_level }, 'secretkey');
                
                res.status(200).json({
                    message: "found data",
                    data, 
                    token
                })          
            } else {
                res.status(404).json({
                    message: "login error",
                    data
                })    
            }
            
        })
        .catch(err => {
            console.log(err)
        })
    },
    showUser(req, res) {
        User.findAll()
        .then(data => {
            res.status(200).json({
                message: 'Get data from database',
                data
            })
        })
        .catch(err => {
            res.status(404).json({
                message: `Request Error`,
            })
        })
    },
    showSpesificUser(req,res) {
        User.findById(req.params.id)
        .then(data => {
            // console.log(data)
            if (data !== null) {
                res.status(200).json({
                    message: `find by id ${req.params.id}`,
                    data
                })
            } else {
                res.status(404).json({
                    message: `User by Id: ${req.params.id} Not Found`,
                })
            }
        })
        .catch(err => {
            res.status(404).json({
                message: `User by Id: ${req.params.id} Not Found`,
            })
        })
    },
    createUser(req,res) {
        let addUserObj = {
            email: "gustaf@mail.com",
            password: 12345,
            first_name: 'Pahlevi',
            last_name: 'Gustaf',
            phone: 012372164,
            user_level: 1
        }
        User.create(addUserObj)
        .then(data => {
            res.status(201).json({
                message: "create user successfully",
                data
            })
        })
        .catch(err => {
            console.log(err)
        })
    },
    deleteUser(req,res) {
        User.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(data => {
            res.status(200).json({
                message: "delete user",
                data
            })
        })
        .catch(err => {
            res.status(204).json({
                message: "No Data",
                data
            })
        })
    },
    updateUser(req,res) {
        User.findById(req.params.id)
        .then(data => {
            let editUserObj = {
                email: req.params.email,
                password: req.params.password,
                first_name: req.params.first_name,
                last_name: req.body.last_name,
                phone: req.body.phone,
                user_level: data.user_level
            }
            User.update(editUserObj,{
                where: {
                    id: Number(req.params.id)
                }
            })
            .then(create_data => {
                res.status(200).json({
                    message: 'updated user',
                    create_data
                })
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}