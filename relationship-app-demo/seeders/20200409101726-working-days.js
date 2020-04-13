'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      let current = new Date();     // get current date    
      let weekstart = current.getDate() - current.getDay() +1;     
      let monday = new Date(current.setDate(weekstart));
      let tuesday = new Date(current.setDate(weekstart + 1));
      let wednesday = new Date(current.setDate(weekstart + 2));
      let thursday = new Date(current.setDate(weekstart + 3));
      let friday = new Date(current.setDate(weekstart + 4));

      return queryInterface.bulkInsert('WorkingDays',[
      {
        weekDay: 'Monday',
        workingDate: monday,
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        weekDay: 'Tuesday',
        workingDate: tuesday,
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date()      
      },
      {
        weekDay: 'Wednesday',
        workingDate: wednesday,
        isWorking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        weekDay: 'Thursday',
        workingDate: thursday,
        isWorking: true,
        createdAt: new Date(),
        updatedAt: new Date()      },
      {
        weekDay: 'Friday',
        workingDate: friday,
        isWorking: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('WorkingDays', null, {});
  }
};
