'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersWorkingDay = sequelize.define('UsersWorkingDay', {
    UserId: DataTypes.INTEGER,
    WorkingDayId: DataTypes.INTEGER
  }, {});
  UsersWorkingDay.associate = function(models) {
    UsersWorkingDay.belongsTo(models.User,{foreignKey:'UserId'});
    UsersWorkingDay.belongsTo(models.WorkingDay, {foreignKey:'WorkingDayId'})
    // associations can be defined here
  };
  return UsersWorkingDay;
};