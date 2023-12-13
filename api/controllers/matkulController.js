// controllers/matkulController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const Matkul = new mainModel('Matkul');

// Get all Matkul
exports.getAllMatkul = async (req, res) => {
  try {
    const matkul = await Matkul.getAll();
    res.send({
      message: 'Matkul sent successfully',
      data: matkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one Matkul
exports.getOneMatkul = async (req, res) => {
  const { KodeMK } = req.params;
  try {
    const matkul = await Matkul.get({ KodeMK });
    if (!matkul) {
      res.status(404).json({ error: 'Matkul not found' });
      return;
    }
    res.send({
      message: 'Matkul sent successfully',
      data: matkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create Matkul
exports.createMatkul = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newMatkul = await Matkul.post(data);
    res.send({
      message: 'Matkul created successfully',
      data: newMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update Matkul
exports.updateMatkul = async (req, res) => {
  const { KodeMK } = req.params;
  const data = req.body; // Assuming request body contains necessary data
  try {
    const updatedMatkul = await Matkul.patch(data, { KodeMK });
    if (updatedMatkul[0] === 0) {
      res.status(404).json({ error: 'Matkul not found' });
      return;
    }
    res.send({
      message: 'Matkul updated successfully',
      data: updatedMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[33m' + 'PATCH ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete Matkul
exports.deleteMatkul = async (req, res) => {
  const { KodeMK } = req.params;
  try {
    const deletedMatkul = await Matkul.delete({ KodeMK });
    if (deletedMatkul === 0) {
      res.status(404).json({ error: 'Matkul not found' });
      return;
    }
    res.send({
      message: 'Matkul deleted successfully',
      data: deletedMatkul,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
