const jwt        = require('jsonwebtoken')

module.exports = {
    check : (role) => {
        return (req,res,next) => {
            let providedToken   = req.headers.token;
            if (providedToken) {
                try {
                    let decoded     = jwt.verify(providedToken, process.env.SECRET)
                    
                    if (!role) {
                        next()
                    } else {
                        if(decoded.role === role) {
                            next()
                        } else {
                            let message = `Not authorized, Please login as ${role}`
                            res.status(401).json({
                                message : message
                            })
                        }
                    }
                } catch(err) {
                    res.status(401).json({
                        message : 'Wrong token provided, authentication failed !'
                    })
                }
            } else {
                res.status(401).json({
                    message : 'Please provide a token !'
                })
            }
        }
    }
}