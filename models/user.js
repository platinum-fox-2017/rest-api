'use strict';
const hashPassword = require('../helpers/hashPassword');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
      hooks : {
          beforeCreate : (user, options) => {
             user.Password = hashPassword(user.Password);
             if(user.isAdmin != true){
                 user.isAdmin = false;
             }
         }
      }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
