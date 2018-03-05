const Models = require('../models')
const User = Models.User
module.exports = {
    userView : (req,res)=>{
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
    },
    userCreate : (req,res)=>{
        User.create({
            name: "Kevin",
            password: "hacktiv8Super"
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

    userFind :(req,res)=>{
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
    },

    userDelete: (req,res)=>{
        const id = Number(req.params.id)
        User.findById(id).then(destroyedData=>{
            User.destroy({where:{id:id}}).then(dstroyed =>{
                res.status(200).json({
                    message: `Data id ${id}, has been deleted`
                })
            })
        })
    },

    userEdit : (req,res)=>{
        const id = Number(req.params.id)
        const edittedUser = {
            name: req.body.name,
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
}