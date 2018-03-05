const {
    User
} = require('../models')

const signUp = (req, res) => {
    const input = {
        email: req.body.email,
        password: req.body.password
    }
    User.create(input).then(() => {
        res.status(200).json({
            message: 'User Signup',
            data: input
        })
    })
}
const signIn = (req, res) => {

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
        res.status(200).json({
            message: 'User found',
            data: data
        })
    }).catch(() => {
        res.status(404).json({
            message: 'User not found'
        })
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
    User.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            message: 'User deleted',
        })
    })
}

const updateUser = (req, res) => {
    const id = req.params.id
    const input = {
        email: req.body.email,
        password: req.body.password
    }
    User.update(input, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            message: 'user updated',
        })
    }).catch((err) => {
        res.status(404).json({
            message: 'User not found'
        })
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