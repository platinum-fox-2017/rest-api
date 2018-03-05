const models = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

module.exports = {
    signin: (req, res) => {
        models.User.findOne({
           where: {email: req.body.email}
       }).then(data => {
           if(data){
            let check = bcrypt.compareSync(req.body.password, data.password);
            if(check){
                var token = jwt.sign({ id: data.id, role: data.role }, process.env.SECRETKEY);
                res.status(200).json({
                    message: 'Signin success',
                    user: {
                        id: data.id,
                        name: data.name,
                        role: data.rold,
                        token: token
                    }
                })
            }
           }else{
               res.status(404).json({
                   message: 'user not found'
               })
           }
           
       })
    }
}