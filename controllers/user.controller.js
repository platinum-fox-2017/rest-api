const {User} = require ('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

module.exports={
    signup:(req,res)=>{
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(req.body.password, salt);
        User.create({
            name: req.body.name,
            gender:req.body.gender,
            password:hashPass,
            role:1,
        }).then(data=>[
            res.status(200).json({
                message:'new user created',
                data:data
            })
        ])
    },
    signin:(req,res)=>{
        User.findOne({
            where :{
                name : req.body.name
            }
        }).then(data=>{
            //console.log(data)
            if(data){
                let pass = bcrypt.compareSync(req.body.password, data.password); 
                if(pass){
                    const token = jwt.sign({
                        id:data.id,
                        role:data.role
                    }, process.env.SECRET);   
                    console.log(token)             
                    res.status(200).json({
                        message: 'logged in',
                        data:token
                    })
                }else{
                    res.status(404).json({
                        message: 'password wrong'
                    })
                }
            }else{
                res.status(404).json({
                    message: 'username wrong'
                })
            }
        }).catch(err=>{
            res.send(err)
        })
    },
    getUsers:(req, res)=>{
        User.findAll().then(data=>{
            res.status(200).json({
                message:'all data',
                data:data
            })
        })
    },
    getById:(req,res)=>{
        User.findById(req.params.id).then(data=>{
            res.status(200).json({
                message:'data found',
                data:data
            })
        })
    },
    createUser:(req, res)=>{
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(req.body.password, salt);
        User.create({
            name : req.body.name,
            gender : req.body.gender,
            password : hashPass,
            role:req.body.role,
        }).then(data=>{
            res.status(200).json({
                message :'new user created',
                data : data
            })
        })
    },
    deleteUser:(req,res)=>{
        User.destroy({
            where:{
                id:req.params.id
            }
        }).then(data=>{
            res.status(200).json({
                message:'user deleted'
            })
        })
    },
    updateUsers:(req,res)=>{
        let obj ={
            name:req.body.name,
            gender:req.body.gender,
            role:req.body.role
        }
        User.update(obj,{
            where :{
                id:req.params.id
            }
        }).then(data=>{
            console.log(data)
            if(data){
                res.status(200).json({
                    message:'user updated',
                })
            }else{
                res.status(404).json({
                    message:'no data',
                })
            }
            
        })
    }
}