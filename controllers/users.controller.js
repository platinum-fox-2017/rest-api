const models = require('../models');
const hashPassword = require('../helpers/hashPassword');
const jwt = require('jsonwebtoken');

module.exports = {
    addUser : (req, res) => {
        models.User.create({
            name:req.body.name,
            Email: req.body.Email,
            Password: req.body.Password,
            isAdmin: req.body.isAdmin,
            createdAt: new Date(),
            updatedAt: new Date()
        }).then(data => {
            res.status(201).json({
                messages:`Succeed to create new user`,
                user: data
            })
        }).catch((err)=>{
            console.log(err);
            res.status(404).json({
                messages:'Database not found'
            })
        })
    },

    getUsers : (req,res) => {
        models.User.findAll()
            .then(users => {
                    res.status(200).json({
                        messages:"Succeed to query Users",
                        users: users
                    })
            }).catch(() => {
                res.status(404).json({
                    messages:"No Data found",
                })
            })
    },

    getUserById : (req, res) => {
        models.User.findById(req.params.id)
            .then(user => {
                res.status(200).json({
                    messages:`Succeed to find user with id ${req.params.id}`,
                    user: user
                })
            }).catch(() => {
                res.status(404).json({
                    messages: `User id ${req.params.id} Not Found`
                })
            })
    },

    updateUserById : (req,res) => {
        models.User.update({
            name:req.body.name,
            Email:req.body.Email,
            Password:req.body.Password,
            isAdmin: req.body.isAdmin
        }, {
            where:{
                id : req.params.id
            }
        }).then(() => {
            models.User.findById(req.params.id)
                .then(user => {
                    res.status(200).json({
                        messages:`Succed to update user`,
                        user: user
                })
            })
        }).catch(()=> {
                res.status(404).json({
                    messages:'User Not Found'
                })
        })
    },

    deleteUserById: (req,res) => {
        models.User.findById(req.params.id)
            .then(user => {
                models.User.destroy({
                    where : {
                        id : req.params.id
                    }
                }).then(() => {
                    res.status(200).json({
                        messages : "Succeed to delete user",
                        user : user
                    })
                }).catch(() => {
                    res.status(404).json({
                        messages: "User Not Found"
                    })
                })
            }).catch(() => {
                res.status(404).json({
                    messages: "User Not Found"
                })
            })
    },

    signIn: (req, res) => {
        models.User.findOne({
            where : {
                name: req.body.name
            }
        }).then(user => {
            if(user){
                if(user.Password == hashPassword(req.body.Password)){
                    let token = jwt.sign({id: user.id}, 'fadhilmch');
                    res.status(200).json({
                        message: "User succeed login",
                        token: token
                    })
                }
                else{
                    res.status(400).json({
                        message: "Failed authentication"
                    })
                }
            }
            else{
                res.status(404).json({
                    message: "User Not Found"
                })
            }
        })
    }


}
