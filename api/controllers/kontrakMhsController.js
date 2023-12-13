// controllers/kontrakMhsController.js

const path = require('path');
const basename = path.basename(__filename);
const { mainModel } = require('../common/models');
const KontrakMhs = new mainModel('KontrakMhs');

// Get all KontrakMhs
exports.getAllKontrakMhs = async (req, res) => {
  try {
    const kontrakMhs = await KontrakMhs.getAll();
    res.send({
      message: 'KontrakMhs sent successfully',
      data: kontrakMhs,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (all) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get one KontrakMhs
exports.getOneKontrakMhs = async (req, res) => {
  const { NIM, KodeJadwal } = req.params;
  try {
    const kontrakMhs = await KontrakMhs.get({ NIM, KodeJadwal });
    if (!kontrakMhs) {
      res.status(404).json({ error: 'KontrakMhs not found' });
      return;
    }
    res.send({
      message: 'KontrakMhs sent successfully',
      data: kontrakMhs,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[34m' + 'GET (one) ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create KontrakMhs
exports.createKontrakMhs = async (req, res) => {
  const data = req.body; // Assuming request body contains necessary data
  try {
    const newKontrakMhs = await KontrakMhs.post(data);
    res.send({
      message: 'KontrakMhs created successfully',
      data: newKontrakMhs,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[32m' + 'POST ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete KontrakMhs
exports.deleteKontrakMhs = async (req, res) => {
  const { NIM, KodeJadwal } = req.params;
  try {
    const deletedKontrakMhs = await KontrakMhs.delete({ NIM, KodeJadwal });
    if (deletedKontrakMhs === 0) {
      res.status(404).json({ error: 'KontrakMhs not found' });
      return;
    }
    res.send({
      message: 'KontrakMhs deleted successfully',
      data: deletedKontrakMhs,
    });
    console.log('\x1b[1m' + '[' + basename + ']' + '\x1b[0m' + ' Query ' + '\x1b[31m' + 'DELETE ' + '\x1b[0m' + 'done');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
