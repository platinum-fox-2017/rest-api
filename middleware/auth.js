var jwt = require('jsonwebtoken');

module.exports = {
    authAdmin: (req, res, next) => {
        let token = req.headers.token
        var decoded = jwt.verify(token, 'secretkey');
        console.log(decoded.id)
        if(decoded.user_level === 1) {
            next()
        } else {
            res.status(404).json({
                message: "You have not permission to access this!"
            })
        }
    }
}