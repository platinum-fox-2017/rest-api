'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: {
     type: DataTypes.STRING,
     validate: {
       cannotBeNull(value,next){
         
         if(value === null){
           next ('Cannot be null')
         }else{
           next()
         }
       }
     }
    },
    password:{
      type:DataTypes.STRING,
      validate: {
        cannotBeNull (value,next){
          if(value === null){
            next ('Cannot be null')
          }else{
            next()
          }
        }
      }
    } 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};