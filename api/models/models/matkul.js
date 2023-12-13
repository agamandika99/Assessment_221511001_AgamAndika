// models/matkul.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Matkul extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Matkul.init(
    {
      KodeMK: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      NamaMK: DataTypes.STRING,
      HP: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Matkul',
      freezeTableName: true,
    }
  );
  Matkul.removeAttribute('id');

  return Matkul;
};