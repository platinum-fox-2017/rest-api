const jwt = require('jsonwebtoken')
const model = require('../models')
require('dotenv').config()

module.exports = {
    isAdmin: function (req, res, next){
        let token = req.headers.token
        // res.json(decoded)
        try {
            let decoded = jwt.verify(token, process.env.SECRET)
            if (decoded.Role === 'admin'){
                next()
            } else {
                res.status(403).json({
                    message: 'forbidden access'
                })
            }
        } catch (e) {
            res.status(403).json(e)
        }
    },
    isAuth: function (req, res, next){
        let token = req.headers.token
        try {
            let decoded = jwt.verify(token, process.env.SECRET)
            if (decoded.Role === 'admin') next()
            else {
                // allows authenticated user to access their own data
                if(decoded.id === Number(req.params.id)) next()
                else {
                    res.status(403).json({
                        message: 'invalid access'
                    })
                }
            }
        } catch (e){
            res.status(403).json(e)
        }

    }
}

//herbyherby
//georgegeorge
//youknownothing