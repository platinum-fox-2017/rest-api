const Models = require('../models')
const User = Models.User
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = {
    userView : (err, req,res,next)=>{
        if(err){
            res.status(401).json({
                message: err
            })
        }else{
            User.findAll().then(userData =>{
                if(userData.length > 0){
                    res.status(200).json({
                        message: "Welcome abroad sir",
                        data : userData
                    })
                }else{
                    res.status(200).json({
                        message: "None user data"
                    })
                }
            })
        }
        
    },
    userCreate : (req,res)=>{
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync("req.body.password", salt);
         
        User.create({
            username: req.body.username,
            password: hash,
            role: req.body.role
        }).then(created =>{
            res.status(201).json({
                message: "Data has been created",
                data : created
            })
        }).catch(err=>{
            res.status(500).json({
                message: `${err.errors.message}`
            })
        })
    },

    userFind :(err,req,res,next)=>{
        if(err){
            res.status(401).json({
                message: `Sign Up dan Sign in dulu om`
            })
        }else{
            const id = Number(req.params.id)
            User.findById(id).then(userSpecificData=>{
                if(userSpecificData){
                    res.status(200).json({
                        message: `Show data user id ${id}`,
                        data : userSpecificData
                    })
                }else{
                    res.status(404).json({
                        message: `User id ${id} not found`
                    })
                }
            })
        }
        
    },

    userDelete: (err,req,res,next)=>{
        if(err){
            res.status(401).json({
                message: err
            })
        }else{
            const id = Number(req.params.id)
            User.findById(id).then(destroyedData=>{
                User.destroy({where:{id:id}}).then(dstroyed =>{
                    res.status(200).json({
                        message: `Data id ${id}, has been deleted`
                    })
                })
            })
        }
    },

    userEdit : (err,req,res,next)=>{
        if(err){
            res.status(401).json({
                message: `Sign Up dan Sign in dulu om`
            })
        }else{
            const id = Number(req.params.id)
            const edittedUser = {
                username: req.body.name,
                password : req.body.password
            }
            User.update(edittedUser,{where:{id:id}}).then(updatedData =>{
                User.findById(id).then(justEdiitedData=>{
                    res.status(201).json({
                        message: `Data id ${id}, has been edited`,
                        data : justEdiitedData
                    })
                })
            })
        }
        
    },

    userSignUp : (req,res)=>{
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync("req.body.password", salt);
        User.create({
            username: req.body.username,
            password: hash,
            role : 'User'
        }).then(justCreated=>{
            res.status(201).json({
                message: "New User has been created",
                data : justCreated
            })
        })
    },

    userSignIn: (req,res)=>{
        User.findOne({where:{username:req.body.username}}).then(user=>{
            if(user){
                let compare = bcrypt.compareSync("req.body.password", user.password)
                if(compare){
                    const token = jwt.sign({id:user.id,role:user.role},process.env.SECRET)
                    const decode = jwt.verify(token,process.env.SECRET)
                    res.status(201).json({
                        decode: decode,
                        token: token,
                        userData : user
                    })
                }                
            }
        })
    }
}