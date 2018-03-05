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
    return queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@admin.com',
      password: 'admin',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Reza',
      email: 'reza@gmail.com',
      password: 1234,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'user1',
      email: 'user1@user.com',
      password: 1234,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'user2',
      email: 'user2@user.com',
      password: 1234,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
