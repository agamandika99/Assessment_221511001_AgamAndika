// models/mahasiswa.js

'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Mahasiswa.init(
    {
      NIM: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      NamaMhs: DataTypes.STRING,
      Prodi: DataTypes.STRING,
      Jurusan: DataTypes.STRING,
      Alamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Mahasiswa',
      freezeTableName: true,
    }
  );
  Mahasiswa.removeAttribute('id');

  return Mahasiswa;
};
