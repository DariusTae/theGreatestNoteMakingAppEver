'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('primeUsers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      noteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      firstName: {
        type: Sequelize.CHAR(25),
        allowNull: false,
      },
      lastName: {
        type: Sequelize.CHAR(25),
        allowNull: false,
      },
      userName: {
        type: Sequelize.CHAR(50),
        allowNull: false,
        unique:true
      },
      password: {
        type: Sequelize.CHAR(50),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('primeUsers');
  }
};
