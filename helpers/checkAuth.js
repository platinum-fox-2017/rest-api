const jwt = require('jsonwebtoken');
const models = require('../models');


function checkAuth (req,res,next) {
    token = req.headers.token;
    try {
        jwt.verify(token, process.env.SECRET, (err,decoded) => {
            models.User.findById(decoded.id)
                .then(user => {
                    if(user.isAdmin){
                        next();
                    }
                    else{
                        if(req.params.id == user.id){
                            next();
                        }
                        else{
                            res.status(403).json({
                                message: "User forbidden"
                            })
                        }
                    }
                }).catch(() => {
                    res.status(404).json({
                        message: 'User not found'
                    })
                })
        });
    } catch (err) {
        res.status(401).json({
            message: 'User Unauthorized'
        })
    }

}


module.exports =checkAuth;
