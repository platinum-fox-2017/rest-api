'use strict';
const crypto = require('crypto')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = crypto.createHmac('sha256', process.env.SECRET)
                   .update(user.password)
                   .digest('hex');
        if (!user.role) user.role = 'public';
      },

      beforeUpdate: (user, options) => {
        user.password = crypto.createHmac('sha256', process.env.SECRET)
                   .update(user.password)
                   .digest('hex');
        if (!user.role) user.role = 'public';
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  User.login = function(username, password) {
    return new Promise((resolve, reject) => {
      User.findOne({
        where: {
          username,
          password: crypto.createHmac('sha256', process.env.SECRET).update(password).digest('hex')
        }
      })
      .then(user => resolve(user))
      .catch(err => reject(err));
    })
  }
  return User;
};