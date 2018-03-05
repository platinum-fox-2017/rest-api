const { User } = require('../models')

module.exports = {
    showUser(req, res) {
        User.findAll()
        .then(data => {

            res.status(200).json({
                message: 'Get data from database',
                data
            })

        })
        .catch(err => {
            console.log(err)
        })
    },
    showSpesificUser(req,res) {
        User.findById(req.params.id)
        .then(data => {
            res.status(200).json({
                message: `find by id ${req.params.id}`,
                data
            })
        })
        .catch(err => {
            console.log(err)
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
            console.log(err)
        })
    },
    updateUser(req,res) {
        User.findById(req.params.id)
        .then(data => {
            let editUserObj = {
                email: data.email,
                password: data.password,
                first_name: data.first_name,
                last_name: data.last_name,
                phone: 19999999,
                user_level: 1
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