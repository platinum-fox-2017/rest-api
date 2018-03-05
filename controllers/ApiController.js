const models     = require('../models')
const bcrypt     = require('bcrypt')
const jwt        = require('jsonwebtoken')
const saltRounds = 10;

module.exports = {
    signUp : (req,res) => {
        let userPassword = bcrypt.hashSync(req.body.password, saltRounds);

        models.User.create({
            username  : req.body.username,
            password  : userPassword,
            firstName : req.body.firstName,
            lastName  : req.body.lastName,
            email     : req.body.email,
            gender    : req.body.gender,
            role      : 'user'
        })
        .then(newUser => {
            if(newUser) {
                res.status(200).json({
                    message : 'Create account success !',
                    newUser
                })
            } else {
                res.status(404).json({
                    message : 'Failed to create new account !',
                    newUser
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
    },

    signIn : (req,res) => {
        models.User.findOne({
            where : {username : req.body.username}
        })
        .then((userData) => {
            let authCheck = bcrypt.compareSync(req.body.password,userData.password);

            if (authCheck) {
                let token   = jwt.sign({id : userData.id, role: userData.role},process.env.SECRET)
                res.status(200).json({
                    message : 'login success',
                    data    : {
                        id        : userData.id,
                        username  : userData.username,
                        firstName : userData.firstName,
                        lastName  : userData.lastName,
                        role      : userData.role,
                        token     : token
                    }
                })
            } else {
                res.status(401).json({
                    message : 'login failed',
                    data    : {}
                })
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}
