'use strict';
const placeholders = require('../common/seed-placeholders.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim;
    const FirstName = placeholders.firstName;
    await queryInterface.bulkInsert('Matkul', [
      {
        KodeMK: `MK${NIM}01`,
        NamaMK: `Sistem ${FirstName}`,
        HP: `08${NIM}375`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        KodeMK: `MK${NIM}02`,
        NamaMK: `Komputer ${FirstName}`,
        HP: `08${NIM}735`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Matkul', null, {});
  },
};
