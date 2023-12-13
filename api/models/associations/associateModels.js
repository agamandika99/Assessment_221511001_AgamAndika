// associateModels.js

'use strict';

module.exports = (models) => {
  const { Mahasiswa, Dosen, Matkul, JadwalMatkul, KontrakMhs } = models;

  // Define your bidirectional associations here

  // Mahasiswa associations
  Mahasiswa.hasMany(KontrakMhs, { foreignKey: 'NIM', targetKey: 'NIM', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // Dosen associations
  Dosen.hasMany(JadwalMatkul, { foreignKey: 'NIP', targetKey: 'NIP', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // Matkul associations
  Matkul.hasMany(JadwalMatkul, { foreignKey: 'KodeMK', targetKey: 'KodeMK', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // JadwalMatkul associations
  JadwalMatkul.belongsTo(Matkul, { foreignKey: 'KodeMK', targetKey: 'KodeMK', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  JadwalMatkul.belongsTo(Dosen, { foreignKey: 'NIP', targetKey: 'NIP', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  JadwalMatkul.hasMany(KontrakMhs, { foreignKey: 'KodeJadwal', targetKey: 'KodeJadwal', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // KontrakMhs associations
  KontrakMhs.belongsTo(Mahasiswa, { foreignKey: 'NIM', targetKey: 'NIM', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
  KontrakMhs.belongsTo(JadwalMatkul, { foreignKey: 'KodeJadwal', targetKey: 'KodeJadwal', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

  // Add more bidirectional associations if needed
};
