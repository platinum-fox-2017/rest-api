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
    return queryInterface.bulkInsert('Users', [
      {
        status: 'admin',
        name: 'teddy',
        password: 'pokemon',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'admin',
        name: 'hacktiv',
        password: 'bethebest',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'user',
        name: 'user1',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'user',
        name: 'user2',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'user',
        name: 'user3',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {})
  }
};
