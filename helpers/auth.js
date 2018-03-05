const jwt = require('jsonwebtoken');

module.exports = {
    admin: (req, res, next) => {
        const token = req.headers.token
        if(token){
            try {
                const decoded = jwt.verify(token, process.env.SECRET)
                if(decoded){
                    if(decoded.role === 'admin'){
                        next()
                    } else {
                        res.status(401).json({
                            message: 'Selain admin, dilarang masuk!'
                        })
                    }
                } else {
                    res.status(401).json({
                        message: 'Selain admin, dilarang masuk!'
                    })
                }
            } catch(err) {
                res.status(401).json({
                    message: 'Selain admin, dilarang masuk!'
                })
            } 
        } else {
            res.status(401).json({
                message: 'Silakan login terlebih dahulu'
            })
        }
    },
    userAdmin: (req, res, next) => {
        const token = req.headers.token
        if(token){
            try {
                const decoded = jwt.verify(token, process.env.SECRET)
                if(decoded){
                    if(decoded.role === 'user' && decoded.id == req.params.id){
                        next()
                    } else if(decoded.role === 'admin'){
                        next()
                    } else {
                        res.status(401).json({
                            message: 'Dilarang masuk!'
                        })
                    }
                } else {
                    res.status(401).json({
                        message: 'Dilarang masuk!'
                    })
                }
            } catch(err) {
                res.status(401).json({
                    message: 'Dilarang masuk!'
                })
            } 
        } else {
            res.status(401).json({
                message: 'Silakan login terlebih dahulu'
            })
        }
    }
}