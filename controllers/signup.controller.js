const models = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    signup: (req, res) => {
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
        models.User.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            role: req.body.role || 'user'
        }).then(user => {
            res.status(201).json({
                message: 'Signup user success',
                user
            })
        }).catch(err => {
            res.status(500).json({
                message: err
            })
        })
    }
}