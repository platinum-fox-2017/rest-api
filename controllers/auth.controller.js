var jwt = require('jsonwebtoken');
const {
    User
} = require('../models')

const authAdmin = (req, res, next) => {
    const token = req.headers.token
    if (token) {
        jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                if (decoded.role === 'admin') {
                    next()
                } else {
                    res.status(401).json({
                        message: 'not authorized'
                    })
                }
            }
        })
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}

const authAdminAndUser = (req, res, next) => {
    const token = req.headers.token
    if (token) {
        jwt.verify(token, process.env.SECRETKEY, function (err, decoded) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Failed to authenticate token.'
                });
            } else {
                if (decoded.role === 'admin') {
                    next()
                } else {
                    User.findById(req.params.id).then((data) => {
                        if (data.id === decoded.id) {
                            next()
                        } else {
                            res.status(401).json({
                                message: 'you dont have authorize to this user'
                            })
                        }
                    })
                }
            }
        })
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
}

module.exports = {
    authAdmin,
    authAdminAndUser
}