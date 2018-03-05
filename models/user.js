'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `field can't be blank`
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `field can't be blank`
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `field can't be blank`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `field can't be blank`
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `field can't be blank`
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `field can't be blank`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance) => {
        let saltRounds = 10
        let hash = bcrypt.hashSync(instance.dataValues.password, saltRounds);
        instance.dataValues.password = hash
      },
      beforeUpdate: (instance) => {
        let saltRounds = 10
        let hash = bcrypt.hashSync(instance.dataValues.password, saltRounds);
        instance.dataValues.password = hash
        if(instance._previousDataValues.role == 'user') {
          instance.dataValues.role = 'user'
        }
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};