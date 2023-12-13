// seeders/20231213000000-dosens.js

'use strict';
const placeholders = require('../common/seed-placeholders.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim;
    const NamaDiri = placeholders.namaDiri;
    await queryInterface.bulkInsert('Dosen', [
      {
        NIP: `NIP${NIM}01`,
        NamaDosen: `Lukman ${NamaDiri}`,
        HP: `08${NIM}375`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NIP: `NIP${NIM}02`,
        NamaDosen: `Ardhian ${NamaDiri}`,
        HP: `08${NIM}735`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dosen', null, {});
  },
};
