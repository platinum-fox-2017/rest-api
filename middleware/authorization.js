const jsonwebtoken = require('jsonwebtoken');
module.exports = (req,res,next)=>{
  var decode = jsonwebtoken.verify(req.headers.token, process.env.secretjwt)
  if(decode.name!=='JsonWebTokenError'){
    req.decoded=decode
    next()
  }else{
    next({
      message: 'maaf data tidak ada'
    })
  }
}