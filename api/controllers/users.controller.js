class Users {
    static get_all_users(req,res,next){
        res.status(200).json({
            message:"Get all the users info(admin only)"
        })
    }
    static get_single_user(req,res,next){
        const id = Number(req.params.id);
        res.status(200).json({
            message:"Get a single user info(admin and authenticated user)",
            id: id
        })
    }
    static create_a_user(req,res,next){
        res.status(200).json({
            message:"Create a user(admin only)"
        })
    }
    static delete_a_user(req,res,next){
        const id = Number(req.params.id);
        res.status(200).json({
            message:"Delete a user(admin only)"
        })
    }
    static update_a_user(req,res,next){
        const id = Number(req.params.id);
        res.status(200).json({
            message:"Update a user with new info(admin and authenticated user only)",
            id:id
        })
    }
}

module.exports = Users;