'use strict';
module.exports = (sequelize, DataTypes) => {
  const WorkingDay = sequelize.define('WorkingDay', {
    weekDay: DataTypes.STRING,
    workingDate: DataTypes.DATE,
    isWorking: DataTypes.BOOLEAN
  }, {});
  WorkingDay.associate = function(models) {
    WorkingDay.belongsToMany(models.User, {through:"UsersWorkingDays", foreignKey:'WorkingDayId', as:'employees'})
    // associations can be defined here
  };
  return WorkingDay;
};