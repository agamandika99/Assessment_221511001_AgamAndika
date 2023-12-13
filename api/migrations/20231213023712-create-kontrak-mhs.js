// migrations/20231213000000-create-kontrak-mhs.js

'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('KontrakMhs', {
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('KontrakMhs');
  }
};
