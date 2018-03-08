const {user} = require('../models')
var bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken')

module.exports = {
    showUser:(req,res)=>{
        user.findAll().then(data=>{
            res.status(200).json({
                data:data
            })
        })
    },
    createUser:(req,res)=>{
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
       let obj = {
           username : req.body.username,
           password : hash,
           createdAt: new Date(),
           updatedAt: new Date(),
           role: 'admin'
       }
        user.create(obj).then(data=>{
            res.status(200).json({
                message : 'create user success',
                data:data
            })
        })
    },
    findUser:(req,res)=>{
        let id = req.params.id
        user.findById(id).then(data=>{
            res.status(200).json({
                data:data
            })
        })
    },
    updateUser:(req,res)=>{ 
        let obj = {
            username : req.body.username,
            password : req.body.password,
            role: req.body.role
        }
        let id = req.params.id
        user.update(obj,{where:{id:id}}).then(data=>{
            user.findById(id).then(user=>{
                res.status(200).json({
                    message : 'update success',
                    data:user
                })
            })
        })
    },
    deleteUser : (req,res)=>{
        let id = req.params.id
            user.destroy({where:{id:id}}).then(data=>{
                res.status(200).json({
                    message: 'data already deleted'
                })
            })
    },
    signUp: (req,res)=>{
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(req.body.password, salt);
        let obj = {
            username : req.body.username,
            password : hash,
            role : 'user'
        }
        user.create(obj).then(data=>{
            res.status(200).json({
                message : 'sign up success',
                data:data
            })
        })
    },
    signIn:(req,res)=>{
        user.findOne({where:{username:req.body.username}}).then(data=>{
            if(data) {
                let check = bcrypt.compareSync(req.body.password, data.password)
                if(check){
                    let token = jwt.sign({id:data.id,username:data.username,role:data.role}, process.env.SECRET)
                    res.status(200).json({
                        message : 'login success',
                        token: token
                    })   
                }else{
                    res.status(404).json({
                        message : 'password incorrect' 
                    })
                }
            }else{
               res.status(404).json({
                   message : 'username incorrect'
               }) 
            }
        })
    }

}