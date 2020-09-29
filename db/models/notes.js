'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notes = sequelize.define('Notes', {
    noteid: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    body: DataTypes.CHAR
  }, {});
  Notes.associate = function(models) {
    // associations can be defined here
  };
  return Notes;
};