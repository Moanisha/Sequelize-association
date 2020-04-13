'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'Companies',   [
          {
              name: "Google",
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
            name: "Amazon",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Reliance",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "LifeStyle",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Pantaloons",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            name: "Max",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      )},

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Companies', null, {});
  }
};
