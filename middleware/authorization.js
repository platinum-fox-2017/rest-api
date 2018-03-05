var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    var token = req.headers.token
    var decoded = jwt.verify(token, process.env.SECRET);

    if(decoded) {
        if(decoded.role == "admin") {
            next()
        }   else {
            res.status(403).json({
                message: 'You dont have authorization'
            })
        }   
    }   else {
        res.status(403).json({
            message: 'You are not verified'
        })
    }
}