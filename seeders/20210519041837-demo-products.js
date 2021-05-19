'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    //Creating a task list inside the seeders

    await queryInterface.bulkInsert('Products', [{
      name: 'Tomate',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/5sM9i3p.png',
      nonmeat: true,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cebola',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/AruNG5F.png',
      nonmeat: true,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Alface',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/qFuOQhd.png',
      nonmeat: true,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Cheedar',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/FsQGiQO.png',
      nonmeat: true,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Milho',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/tdCMK8Y.png',
      nonmeat: true,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Batata Palha',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/ntECE1F.png',
      nonmeat: true,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Pepino Japonês',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/yW4h2CQ.png',
      nonmeat: true,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Carne',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/jyO3emh.png',
      nonmeat: false,
      protein: true,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Frango',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/i9TxlA1.png',
      nonmeat: false,
      protein: true,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Calabresa',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/KTAiaV4.png',
      nonmeat: false,
      protein: true,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Presunto',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/tt4Q3Yb.png',
      nonmeat: false,
      protein: true,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Bacon',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/zMJY3OI.png',
      nonmeat: false,
      protein: true,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ovo',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/T2qb30S.png',
      nonmeat: false,
      protein: true,
      sauce: false,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Batatas Fritas',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/Npgmhly.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: true,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Coca-Cola 2L',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/DpSxAC8.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Coca-Cola 350ml',
      description: 'Lata',
      quantity: '1',
      urlimg: 'https://i.imgur.com/9L7Fc54.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fanta Guaraná 2L',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/0TGF9NS.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fanta Laranja 2L',
      description: '',
      quantity: '1',
      urlimg: 'https://i.https://i.imgur.com/yLvopIZ.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Fanta Uva 2L',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/Wbwz8Py.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Sprite',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/fYDXp5Z.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Coca-Cola 600ml',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/rofq0M1.png',
      nonmeat: false,
      protein: false,
      sauce: false,
      potatoes: false,
      drink: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mostarda',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/PEt27gz.png',
      nonmeat: false,
      protein: false,
      sauce: true,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ketchup',
      description: '',
      quantity: '1',
      urlimg: 'https://i.imgur.com/QW32toe.png',
      nonmeat: false,
      protein: false,
      sauce: true,
      potatoes: false,
      drink: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};


