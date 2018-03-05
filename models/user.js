'use strict';
// const db = require('../models/index.js')
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    status: DataTypes.STRING,
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isUnique(value, callback){
          User.findOne({
            where:{
              name: value
            }
          }).then(foundUser => {
            if (foundUser) {
              callback(`name ${value} is already used. Please select a new name`)
            } else {
              callback();
            }
          })
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isLong(value){
          if (value.length < 6) {
            throw new Error('Password must be 6 characters or longer')
          }
        }
      }
    }
  }, {
    hooks:{
      beforeCreate: (instance, options)=>{
        console.log(instance);
        const saltRounds = 10;
        let hash = bcrypt.hashSync(instance.password, saltRounds);
        instance.password = hash
      },
      beforeUpdate: (instance, options)=>{
        const saltRounds = 10;
        let hash = bcrypt.hashSync(instance.password, saltRounds);
        instance.password = hash;
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
