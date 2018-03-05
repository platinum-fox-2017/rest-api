const {
    User
} = require('../models')

const signUp = (req, res) => {
    const input = {
        email: req.body.email,
        password: req.body.password
    }
    User.create(input).then(() => {
        res.send('User signup')
    })
}
const signIn = (req, res) => {

}
const getAllUsers = (req, res) => {
    User.findAll().then((datas) => {
        res.send(datas)
    })
}
const getAUser = (req, res) => {
    const id = req.params.id
    User.findById(id).then((data) => {
        res.send(data)
    })
}
const createUser = (req, res) => {
    const input = {
        email: req.body.email,
        password: req.body.password
    }
    User.create(input).then(() => {
        res.send('User signup')
    })
}
const deleteUser = (req, res) => {
    const id = req.params.id
    User.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.send('User Deleted')
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
        res.send('data updated')
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