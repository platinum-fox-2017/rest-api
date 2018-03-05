'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return [
      queryInterface.addColumn(
        'Users',
        'email',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'Users',
        'password',
        {
          type: Sequelize.STRING,
        }
      ),
      queryInterface.addColumn(
        'Users',
        'role',
        {
          type: Sequelize.STRING,
        }
      )
    ];
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return [
      queryInterface.removeColumn('Users', 'email'),
      queryInterface.removeColumn('Users', 'password'),
      queryInterface.removeColumn('Users', 'role')
    ];
  }
};
