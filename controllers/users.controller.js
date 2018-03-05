const Users = require('../models').Users;

class Users_Controller {
    static get_all_users(req,res,next){
        Users.findAll()
        .then((users)=>{
            res.status(200).json({
                users: users,
                message:"Get all the users info(admin only)"
            })
        })
        .catch((err)=>{
            res.status(500).json({
                err:err,
            })
        });
    }
    static get_single_user(req,res,next){
        const id = Number(req.params.id);
        Users.findById(id)
        .then((user)=>{
            if(user === null){
                res.status(200).json({
                    message:"User not found"
                })
            } else {
                res.status(200).json({
                    user:user,
                    message:"Get a single user info(admin and authenticated user)",
                })
            }
        })
        .catch((err)=>{
            res.status(500).json({
                err:err
            })
        })
    }
    static create_a_user(req,res,next){
        let new_user = {};
        new_user.name = req.body.name,
        new_user.address = req.body.address,
        Users.create(new_user)
        .then(()=>{
            res.status(201).json({
                new_user: new_user,
                message:"Create a user(admin only)"
            })
        })
        .catch((err)=>{
            res.status(500).json({
                err:err
            })
        })
    }
    static delete_a_user(req,res,next){
        const id = Number(req.params.id);
        Users.destroy({
            where:{
                id:id,
            }
        })
        .then((destroyed_user)=>{
            if(destroyed_user === 0){
                res.status(200).json({
                    destroyed_user: destroyed_user,
                    message:"User not found"
                })
            }
            if(destroyed_user === 1){
                res.status(200).json({
                    destroyed_user: destroyed_user,
                    message:"Delete a user(admin only)"
                })
            }
        })
    }
    static update_a_user(req,res,next){
        let id = Number(req.params.id);
        let updated_user ={};
        updated_user.name = req.body.name;
        updated_user.address = req.body.address;
        Users.update(updated_user,{
            where:{
                id: id
            }
        })
        .then((updated)=>{
            if(updated[0] === 0){
                res.status(200).json({
                    updated: updated,
                    message:"User not found"
                })
            }
            if(updated[0] === 1){
                res.status(200).json({
                    updated: updated,
                    message:"Update a user with new info(admin and authenticated user)"
                })
            }
        })
    }
}

module.exports = Users_Controller;