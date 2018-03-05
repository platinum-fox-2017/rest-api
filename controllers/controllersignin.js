const models = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');


module.exports ={
  signin:(req,res)=>{
    models.User.findOne({where:{username:req.body.username}}).then((datas)=>{
      var check=bcrypt.compareSync(req.body.password, datas.password);
      if(check){
        const token = jwt.sign({id:datas.id,role:datas.role},'secretkey')
        res.status(200).json({
          message:"anda berhasil masuk",
          data:datas,
          token:token
        })
      }else{
        res.status(401).json({
          message:"data not found"
        })
      }
    })
  }
}
