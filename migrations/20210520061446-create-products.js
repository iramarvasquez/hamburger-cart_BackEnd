'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      urlimg: {
        type: Sequelize.STRING
      },
      nonmeat: {
        type: Sequelize.BOOLEAN
      },
      protein: {
        type: Sequelize.BOOLEAN
      },
      sauce: {
        type: Sequelize.BOOLEAN
      },
      potatoes: {
        type: Sequelize.BOOLEAN
      },
      drink: {
        type: Sequelize.BOOLEAN
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};