'use strict';
module.exports = (sequelize, DataTypes) => {
  const primeUser = sequelize.define('primeUser', {
    id: DataTypes.INTEGER,
    noteId: DataTypes.INTEGER,
    firstName: DataTypes.CHAR,
    lastName: DataTypes.CHAR,
    userName: DataTypes.CHAR,
    password: DataTypes.CHAR
  }, {});
  primeUser.associate = function(models) {
    // associations can be defined here
  };
  return primeUser;
};