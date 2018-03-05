'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  });
  Users.beforeCreate((instance,options)=>{
    let hash = bcrypt.hashSync(instance.password,saltRounds);
    instance.password = hash;
  });
  Users.beforeUpdate((instance,options)=>{
    let hash = bcrypt.hashSync(instance.password,saltRounds);
    instance.password = hash;
  });
  return Users;
};