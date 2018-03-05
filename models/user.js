'use strict';
const helper = require('../helpers/crypto')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    DateOfBirth: DataTypes.DATE,
    Email: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (instance) => {
        instance.Password = helper.hasher(instance.Password)
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  User.prototype.fullName = function (){
    return `${this.FirstName} ${this.LastName}`
  }
  return User;
};