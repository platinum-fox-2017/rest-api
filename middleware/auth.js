const jwt = require('jsonwebtoken');

module.exports = {
    auth: (req, res, next) => {
        let token = req.headers.token;
        if(!token){
            res.status(400).json({
                message: 'Token is empty'
            })
        }
        try {
            var decoded = jwt.verify(token, process.env.SECRETKEY);
            if(decoded){
                req.decoded = decoded;
                next();
            }
          } catch(err) {
            res.status(400).json({
                message: 'Invalid token'
            })
          }
    },
    isAdmin: (req, res, next) => {
        if(req.decoded.role.toLowerCase() == 'admin'){
            next()
        }else{
            res.status(400).json({
                message: 'You has no permission'
            })
        }
    },
    isAuthenticatedUser: (req, res, next) => {
        if(req.decoded.id == req.params.id){
            next()
        }else if(req.decoded.role.toLowerCase() == 'admin'){
            next()
        }else{
            res.status(400).json({
                message: 'You has no permission'
            })
        }
    }

}