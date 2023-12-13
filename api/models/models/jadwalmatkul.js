// models/jadwalmatkul.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class JadwalMatkul extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  JadwalMatkul.init(
    {
      KodeJadwal: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      KodeMK: DataTypes.STRING,
      NIP: DataTypes.STRING,
      Semester: DataTypes.STRING,
      JadwalHari: DataTypes.STRING,
      JadwalJam: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'JadwalMatkul',
      freezeTableName: true,
    }
  );
  JadwalMatkul.removeAttribute('id');

  return JadwalMatkul;
};
