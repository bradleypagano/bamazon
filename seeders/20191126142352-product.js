'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Guns',
        department: 'Sports',
        price: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bullets",
        department: "Sports",
        price: 45,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Parcheesi",
        department: "Boardgames",
        price: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "My Hero Academia",
        department: "Manga",
        price: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Darts",
        department: "Random",
        price: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Zelda",
        department: "Videogames",
        price: 60,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stranger Things",
        department: "TV",
        price: 40,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Coffee",
        department: "Drinks",
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Guacamole Bowl",
        department: "Housewares",
        price: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hamburgers",
        department: "Food",
        price: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => { 
    return queryInterface.dropTable('Products');
  }
};
