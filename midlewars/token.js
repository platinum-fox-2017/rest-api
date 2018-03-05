var jwt = require('jsonwebtoken');

module.exports = {
  auth:(req,res,next)=>{
    let token = req.headers.token
    if(token){
      try {
        var decoded = jwt.verify(token,'secretkey');
        if(decoded){
          if (decoded.role === 'admin') {
            next()
          }else{
            res.status(401).json({
              message:'not authorized'
            })
          }
        }
      } catch (e) {
        res.status(401).json({
          message:'maaf token salah'
        })
      }
    }else{
      res.status(404).json({
        message:'mohon masukan token anda'
      })
    }
  },
  listoredit:(req,res,next)=>{
    let token = req.headers.token
    if(token){
      try {
        var decoded = jwt.verify(token,'secretkey');
        if(decoded){
          if (decoded.role === 'admin' || decoded.role === 'user') {
            next()
          }else{
            res.status(401).json({
              message:'not authorized'
            })
          }
        }
      } catch (e) {
        res.status(401).json({
          message:'maaf token salah'
        })
      }
    }else{
      res.status(404).json({
        message:'mohon masukan token anda'
      })
    }
  }
}
