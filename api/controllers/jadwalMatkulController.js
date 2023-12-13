// controllers/jadwalMatkulController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const JadwalMatkul = new mainModel('JadwalMatkul');

// Get all JadwalMatkul
exports.getAllJadwalMatkul = async (req, res) => {
  try {
    const jadwalMatkul = await JadwalMatkul.getAll();
    res.send({
      message: 'JadwalMatkul sent successfully',
      data: jadwalMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one JadwalMatkul
exports.getOneJadwalMatkul = async (req, res) => {
  const { KodeJadwal } = req.params;
  try {
    const jadwalMatkul = await JadwalMatkul.get({ KodeJadwal });
    if (!jadwalMatkul) {
      res.status(404).json({ error: 'JadwalMatkul not found' });
      return;
    }
    res.send({
      message: 'JadwalMatkul sent successfully',
      data: jadwalMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create JadwalMatkul
exports.createJadwalMatkul = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newJadwalMatkul = await JadwalMatkul.post(data);
    res.send({
      message: 'JadwalMatkul created successfully',
      data: newJadwalMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update JadwalMatkul
exports.updateJadwalMatkul = async (req, res) => {
  const { KodeJadwal } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedJadwalMatkul = await JadwalMatkul.patch(data, { KodeJadwal });
    if (updatedJadwalMatkul[0] === 0) {
      res.status(404).json({ error: 'JadwalMatkul not found' });
      return;
    }
    res.send({
      message: 'JadwalMatkul updated successfully',
      data: updatedJadwalMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete JadwalMatkul
exports.deleteJadwalMatkul = async (req, res) => {
  const { KodeJadwal } = req.params;
  try {
    const deletedJadwalMatkul = await JadwalMatkul.delete({ KodeJadwal });
    if (deletedJadwalMatkul === 0) {
      res.status(404).json({ error: 'JadwalMatkul not found' });
      return;
    }
    res.send({
      message: 'JadwalMatkul deleted successfully',
      data: deletedJadwalMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
