const jwt = require('jsonwebtoken')

module.exports = {
    authAdminOnly : (req,res,next)=>{
        if(req.headers.token){
            const token = req.headers.token
            const decode = jwt.verify(token,process.env.SECRET)
            if(decode.role.toLowerCase() === 'admin'){
                next()
            }else{
                next('Who are you')
            }    
        }else{
            next(`Login dl om`)
        }
        
    },

    authAdminAndUser:(req,res,next)=>{
        if(req.headers.token){
            const token = req.headers.token
            const decode = jwt.verify(token,'secret-key')
    
            if(decode.role.toLowerCase() === 'admin' || decode.role.toLowerCase() === 'user'){
                next()
            }else{
                next(`Sign up dulu om`)
            }
        }else{
            next(`Login dl om`)
        }
    }
}