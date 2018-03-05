'use strict'
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
    isAdmin: (req, res, next) => {
        try {
            const token = req.headers.token
            const decoded = jwt.verify(token, process.env.SECRET);
            if(decoded.role == 'admin') {
                next();
            } else {
                res.json({
                    message: 'who are you'
                })
            }
        } catch(error) {
            // console.log(error)
            res.json({
                message: 'who are you'
            })
        }
    },
    
    isAuthUser: (req, res, next) => {
        try {
            const token = req.headers.token
            const decoded = jwt.verify(token, process.env.SECRET);
            if(decoded.id == req.params.id) {
                next();
            } else {
                res.json({
                    message: 'who are you'
                })
            }
        } catch(error) {
            // console.log(error)
            res.json({
                message: 'who are you'
            })
        }
    },

    isAdminOrAuthUser: (req, res, next) => {
        try {
            const token = req.headers.token
            const decoded = jwt.verify(token, process.env.SECRET);
            if(decoded.role == 'admin') {
                next();
            } 
            else if(decoded.id == req.params.id) {
                next();
            }else {
                res.json({
                    message: 'who are you'
                })
            }
        } catch(error) {
            // console.log(error)
            res.json({
                message: 'who are you'
            })
        }
    }
}