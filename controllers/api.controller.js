const {
    User
} = require('../models')

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const signUp = (req, res) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const input = {
        email: req.body.email,
        password: hash,
        role: 'user'
    }

    User.create(input).then(() => {
        res.status(200).json({
            message: 'User Signup',
            data: input
        })
    })
}


const signIn = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then((data) => {
        let compare = bcrypt.compareSync(req.body.password, data.password)
        if (compare === true) {
            const token = jwt.sign({
                id: data.id,
                role: data.role
            }, 'shhhhh');
            res.status(200).json({
                token
            })
        } else {
            res.send('salah')
        }
    })
}

const getAllUsers = (req, res) => {
    User.findAll().then((datas) => {
        res.status(200).json({
            message: 'Show all user',
            datas
        })
    })
}


const getAUser = (req, res) => {
    const id = req.params.id
    User.findById(id).then((data) => {
        if (data !== null) {
            res.status(200).json({
                message: 'User found',
                data: data
            })
        } else {
            res.status(404).json({
                message: 'User not found',
            })
        }
    })
}
const createUser = (req, res) => {
    const input = {
        email: req.body.email,
        password: req.body.password
    }
    User.create(input).then(() => {
        res.status(200).json({
            message: 'User Created',
            input
        })
    })
}
const deleteUser = (req, res) => {
    const id = req.params.id
    User.findById(id).then((data) => {
        if (data !== null) {
            User.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.status(200).json({
                    message: 'User deleted',
                })
            })
        } else {
            res.status(404).json({
                message: 'User Not Found cant delete'
            })
        }
    })
}

const updateUser = (req, res) => {
    const id = req.params.id
    const input = {
        email: req.body.email,
        password: req.body.password
    }

    User.findById(id).then((data) => {
        if (data !== null) {
            User.update(input, {
                where: {
                    id: id
                }
            }).then(() => {
                res.status(200).json({
                    message: 'user updated',
                })
            })
        } else {
            res.status(400).json({
                message: 'user not found'
            })
        }
    })
}

module.exports = {
    signUp,
    signIn,
    getAllUsers,
    getAUser,
    createUser,
    deleteUser,
    updateUser
}