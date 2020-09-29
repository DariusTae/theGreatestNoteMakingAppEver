'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notebooks = sequelize.define('Notebooks', {
    notesId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Notebooks.associate = function(models) {
    // associations can be defined here
  };
  return Notebooks;
};