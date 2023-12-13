// routes/mahasiswaRoutes.js

const express = require('express');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');

// Get all Mahasiswa
router.get('/', mahasiswaController.getAllMahasiswa);

// Get one Mahasiswa
router.get('/:NIM', mahasiswaController.getOneMahasiswa);

// Create Mahasiswa
router.post('/', mahasiswaController.createMahasiswa);

// Update Mahasiswa
router.patch('/:NIM', mahasiswaController.updateMahasiswa);

// Delete Mahasiswa
router.delete('/:NIM', mahasiswaController.deleteMahasiswa);

module.exports = router;
