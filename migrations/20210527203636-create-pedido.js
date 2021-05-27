'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tomate: {
        type: Sequelize.STRING
      },
      cebola: {
        type: Sequelize.STRING
      },
      alface: {
        type: Sequelize.STRING
      },
      cheedar: {
        type: Sequelize.STRING
      },
      milho: {
        type: Sequelize.STRING
      },
      batata_palha: {
        type: Sequelize.STRING
      },
      pepino_japones: {
        type: Sequelize.STRING
      },
      carne: {
        type: Sequelize.STRING
      },
      frango: {
        type: Sequelize.STRING
      },
      calabresa: {
        type: Sequelize.STRING
      },
      mostarda: {
        type: Sequelize.STRING
      },
      ketchup: {
        type: Sequelize.STRING
      },
      maionese: {
        type: Sequelize.STRING
      },
      fritas: {
        type: Sequelize.STRING
      },
      coca_cola_2l: {
        type: Sequelize.STRING
      },
      coca_cola_350ml: {
        type: Sequelize.STRING
      },
      fanta_guarana_2l: {
        type: Sequelize.STRING
      },
      fanta_laranja_2l: {
        type: Sequelize.STRING
      },
      fanta_uva_2l: {
        type: Sequelize.STRING
      },
      sprite: {
        type: Sequelize.STRING
      },
      coca_cola_600ml: {
        type: Sequelize.STRING
      },
      mostarda: {
        type: Sequelize.STRING
      },
      ketchup: {
        type: Sequelize.STRING
      },
      maionese: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('pedidos');
  }
};