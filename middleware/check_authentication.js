const jwt = require('jsonwebtoken');

class Check{
    static check_authentication(req,res,next){
        try {
            const token = req.headers.authorization;
            const decoded = jwt.verify(token,'private_key');
            // console.log(decoded)
            if(decoded.role === 'admin'){
                next();
            } else if (decoded.id === Number(req.params.id)){
                next();
            } else {
                res.status(401).json({
                    message:"123"
                })
            }
        } catch (err) {
            res.status(401).json({
                message:"456"
            })
        }
    }
}

module.exports = Check;