// models/kontrakmhs.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class KontrakMhs extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  KontrakMhs.init(
    {
      NIM: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
      KodeJadwal: {
        allowNull: false,
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: 'KontrakMhs',
      freezeTableName: true,
    }
  );
  KontrakMhs.removeAttribute('id');

  return KontrakMhs;
};
