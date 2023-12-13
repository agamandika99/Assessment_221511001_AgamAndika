// seeders/20231213000000-kontrak-mhs.js

'use strict';
const placeholders = require('../common/seed-placeholders.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim;
    const KodeJadwal = `JW${NIM}01`;
    await queryInterface.bulkInsert('KontrakMhs', [
      {
        NIM: NIM,
        KodeJadwal: KodeJadwal,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NIM: NIM + 1,
        KodeJadwal: KodeJadwal,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('KontrakMhs', null, {});
  },
};
