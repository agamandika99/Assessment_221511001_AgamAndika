// controllers/dosenController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const Dosen = new mainModel('Dosen');

// Get all Dosen
exports.getAllDosen = async (req, res) => {
  try {
    const dosen = await Dosen.getAll();
    res.send({
      message: 'Dosen sent successfully',
      data: dosen,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one Dosen
exports.getOneDosen = async (req, res) => {
  const { NIP } = req.params;
  try {
    const dosen = await Dosen.get({ NIP });
    if (!dosen) {
      res.status(404).json({ error: 'Dosen not found' });
      return;
    }
    res.send({
      message: 'Dosen sent successfully',
      data: dosen,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create Dosen
exports.createDosen = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newDosen = await Dosen.post(data);
    res.send({
      message: 'Dosen created successfully',
      data: newDosen,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Dosen
exports.updateDosen = async (req, res) => {
  const { NIP } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedDosen = await Dosen.patch(data, { NIP });
    if (updatedDosen[0] === 0) {
      res.status(404).json({ error: 'Dosen not found' });
      return;
    }
    res.send({
      message: 'Dosen updated successfully',
      data: updatedDosen,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Dosen
exports.deleteDosen = async (req, res) => {
  const { NIP } = req.params;
  try {
    const deletedDosen = await Dosen.delete({ NIP });
    if (deletedDosen === 0) {
      res.status(404).json({ error: 'Dosen not found' });
      return;
    }
    res.send({
      message: 'Dosen deleted successfully',
      data: deletedDosen,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
