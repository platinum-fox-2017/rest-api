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
        password: '$2a$10$MDu2BPYKoUbbJS7rrh1J6eDiqXFaeos0EJbNAeqhSNh6EvXhg5NSe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'admin',
        name: 'hacktiv',
        password: '$2a$10$ATy9JB6biyANhC1qSYMyUuCQ747ijDjD0dA9HkmJkghgnmWO6Q1iq',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'user',
        name: 'user1',
        password: '$2a$10$8YQH9msYk12DJzl9qS6zru0Akxts./tB9FKOd0T8aCx2FKIyXoFxm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'user',
        name: 'user2',
        password: '$2a$10$8YQH9msYk12DJzl9qS6zru0Akxts./tB9FKOd0T8aCx2FKIyXoFxm',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'user',
        name: 'user3',
        password: '$2a$10$8YQH9msYk12DJzl9qS6zru0Akxts./tB9FKOd0T8aCx2FKIyXoFxm',
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
