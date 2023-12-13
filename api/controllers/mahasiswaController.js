// controllers/mahasiswaController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const Mahasiswa = new mainModel('Mahasiswa');

// Get all Mahasiswa
exports.getAllMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.getAll();
    res.send({
      message: 'Mahasiswa sent successfully',
      data: mahasiswa,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one Mahasiswa
exports.getOneMahasiswa = async (req, res) => {
  const { NIM } = req.params;
  try {
    const mahasiswa = await Mahasiswa.get({ NIM: NIM });

    if (mahasiswa) {
      res.send({
        message: 'Mahasiswa sent successfully',
        data: mahasiswa,
      });
      console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
    } else {
      res.status(404).json({ error: 'Mahasiswa not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Create Mahasiswa
exports.createMahasiswa = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newMahasiswa = await Mahasiswa.post(data);
    res.send({
      message: 'Mahasiswa created successfully',
      data: newMahasiswa,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Mahasiswa
exports.updateMahasiswa = async (req, res) => {
  const { NIM } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedMahasiswa = await Mahasiswa.patch(data, { NIM });
    if (updatedMahasiswa[0] === 0) {
      res.status(404).json({ error: 'Mahasiswa not found' });
      return;
    }
    res.send({
      message: 'Mahasiswa updated successfully',
      data: updatedMahasiswa,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Mahasiswa
exports.deleteMahasiswa = async (req, res) => {
  const { NIM } = req.params;
  try {
    const deletedMahasiswa = await Mahasiswa.delete({ NIM });
    if (deletedMahasiswa === 0) {
      res.status(404).json({ error: 'Mahasiswa not found' });
      return;
    }
    res.send({
      message: 'Mahasiswa deleted successfully',
      data: deletedMahasiswa,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
