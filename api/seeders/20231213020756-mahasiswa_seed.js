// seeders/20231129150000-mahasiswa.js

'use strict';
const placeholders = require('../common/seed-placeholders.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const NIM = placeholders.nim;
    const namaDiri = placeholders.namaDiri;
    await queryInterface.bulkInsert('Mahasiswa', [
      {
        NIM: NIM,
        NamaMhs: `Ani ${namaDiri}`,
        Prodi: 'D3 Teknik Informatika',
        Jurusan: 'JTK Bandung',
        Alamat: 'Alamat Mahasiswa 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        NIM: (parseInt(NIM)+1).toString(),
        NamaMhs: `Budi ${namaDiri}`,
        Prodi: 'D3 Teknik Informatika',
        Jurusan: 'JTK Solo',
        Alamat: 'Alamat Mahasiswa 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more data if needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Mahasiswa', null, {});
  },
};
