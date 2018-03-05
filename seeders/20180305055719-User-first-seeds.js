'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users',[
     {
        firstName : "Reynaldi",
        lastName  : "Ananda",
        email     : "reynaldipane@gmail.com",
        gender    : "male",
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        firstName : "Irsan",
        lastName  : "Hasim",
        email     : "irsan@gmail.com",
        gender    : "male",
        createdAt : new Date(),
        updatedAt : new Date()
     },
     {
        firstName : "Sheila",
        lastName  : "Keizia",
        email     : "sheila@gmail.com",
        gender    : "female",
        createdAt : new Date(),
        updatedAt : new Date()
     }
   ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
