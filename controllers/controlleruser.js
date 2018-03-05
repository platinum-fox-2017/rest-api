const models = require('../models');
var bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports ={
  listuser:(req,res)=>{
    models.User.findAll().then(datas =>{
      res.status(200).json({
        message:"data succes",
        data:datas
      })
    })
  },
  listuserid:(req,res)=>{
    models.User.findById(req.params.id).then(datas =>{
      if(datas){
        res.status(200).json({
          message:"data ditemukan",
          data:datas
        })
      }else{
        res.status(404).json({
          message:"data kosong",
          data:datas
        })
      }

    })
  },
  register:(req,res)=>{
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    models.User.create({username:req.body.username,password:hash,role:req.body.role}).then((datas)=>{
      res.status(200).json({
        message:"tambah data succes",
        data:datas
      })
    })
  },

  delete:(req,res)=>{
    models.User.findById(req.params.id).then(datas =>{
      if(datas){
        models.User.destroy({where:{id:req.params.id}}).then(()=>{
          res.status(200).json({
            message:"data berhasil di delete",
            data:datas
          })
        })

      }else{
        res.status(404).json({
          message:"data kosong",
          data:datas
        })
      }

    })
  },
  update:(req,res)=>{
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    models.User.update({
      username:req.body.username,
      password:hash,
      role:req.body.role},{where:{id:req.params.id}}).then((datas) =>{
        if(datas){
          res.status(200).json({
            message:"data berhasil di update",
            data:datas
          })
        }else{
          res.status(404).json({
            message:"data kosong",
            data:datas
          })
        }
    })
  }

}
