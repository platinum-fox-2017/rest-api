var jwt = require('jsonwebtoken');

module.exports = {
    authCommon: (req, res, next) => {
        let token = req.headers.token
        if (token) {
            var decoded = jwt.verify(token, 'secretkey');
            if (decoded.user_level === 1) {
                next()
            } else if (decoded.user_level === 2 && Number(req.params.id) === decoded.id) {
                next()
            } else {
                res.status(404).json({
                    message: "You have not permission to access this!"
                })
            }
        } else {
            res.status(403).json({
                message: "You have not token to access this!"
            })
        }
        

    }
}