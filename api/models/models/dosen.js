// models/dosen.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dosen extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Dosen.init(
    {
      NIP: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      NamaDosen: DataTypes.STRING,
      HP: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Dosen',
      freezeTableName: true,
    }
  );
  Dosen.removeAttribute('id');

  return Dosen;
};
