'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('JadwalMatkul', {
      KodeJadwal: {
        type: Sequelize.STRING
      },
      KodeMK: {
        type: Sequelize.STRING
      },
      NIP: {
        type: Sequelize.STRING
      },
      Semester: {
        type: Sequelize.STRING
      },
      JadwalHari: {
        type: Sequelize.STRING
      },
      JadwalJam: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('JadwalMatkul');
  }
};