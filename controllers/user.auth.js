const jwt = require('jsonwebtoken');
module.exports={
    getAuth:(req,res,next)=>{
        let token = req.headers.token
        if(token){
            try{
        console.log(token)               
        // console.log('-----------dhasf')               
                let decoded = jwt.verify(token, process.env.SECRET);
                if(decoded){
                    if(decoded.role === 0 || (decoded.id===Number(req.params.id) && decoded.role === 1)){
                        next()
                    }else{
                        res.status(404).json({
                            message:'not authorized'
                        })
                    }
                }else{
                    res.status(404).json({
                        message:'not authorized'
                    })
                }
            }catch(e){
                res.status(404).json({
                    message:'not authorized'
                })
            }
        }else{
            res.status(404).json({
                message:'not authorized'
            })
        }
    }
}