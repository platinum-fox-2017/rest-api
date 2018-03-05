'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    status: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    // hooks:{
    //   beforeCreate: (instance, options)=>{
    //     instance.status = 'user'
    //   },
    //   beforeUpdate: (instance, options)=>{
    //     instance.status = 'user'
    //   }
    // }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
