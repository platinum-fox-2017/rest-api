const models = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

module.exports ={
  signup:(req,res)=>{
    var hash = bcrypt.hashSync(req.body.password, salt);
    models.User.create({username:req.body.username,password:hash,role:'user'}).then((datas)=>{
      res.status(200).json({
        message:"data berhasil ditambahkan",
        data:datas
      })
    })
  }
}
