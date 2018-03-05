var jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    var token = req.headers.token
    var decoded = jwt.verify(token, process.env.SECRET);

    if(decoded){
        if(decoded.role == "admin" || decoded.id == req.params.id) {
            next()
        }   else {
            res.status(403).json({
                message: "You don't have access"
            })
        }
    }   else {
        res.status(403).json({
            message: "You are siopo ?"
        })
    }
}