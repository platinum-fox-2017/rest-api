const jwt = require('jsonwebtoken');
const {User} = require('../models')
require('dotenv').load();
module.exports={
  authAdmin:(req,res,next)=>{
    let token = req.headers.token
    try {
      if(token){
        let decoded = jwt.verify(token, process.env.Secret);
        console.log("ini decoded===>",decoded)
        if(decoded.role === 'admin'){
          next()
        }else{
          res.status(403).json({
            message:"kamu tidak punya akses"
          })
        }
      }else{
        res.status(403).json({
          message:"kamu perlu token,bisa didapatkan di Indomaret/alfa"
        })
      }
    }catch(err) {
      // err
      res.send(err)
    }
  },
  authAdminUser :(req,res,next)=>{
    let token = req.headers.token
    try{
      if(token){
        let decoded = jwt.verify(token,process.env.Secret)
        console.log("ini auth admin decoded",typeof decoded.id)
        console.log("ini id",typeof req.params.id)
        if(decoded.role === 'user' && Number(req.params.id) === decoded.id){
          next()
        }
        else if(decoded.role === 'admin'){
          next()
        }
        else{
          res.status(403).json({
            message:"Kamu tidak punya akses"
          })
        }
      }else{
        res.status(403).json({
          message:"kamu perlu login"
        })
      }
    }catch(err){
      
    }
  }
}