// routes/jadwalMatkulRoutes.js

const express = require('express');
const router = express.Router();
const jadwalMatkulController = require('../controllers/jadwalMatkulController');

// Get all JadwalMatkul
router.get('/', jadwalMatkulController.getAllJadwalMatkul);

// Get one JadwalMatkul
router.get('/:KodeJadwal', jadwalMatkulController.getOneJadwalMatkul);

// Create JadwalMatkul
router.post('/', jadwalMatkulController.createJadwalMatkul);

// Update JadwalMatkul
router.patch('/:KodeJadwal', jadwalMatkulController.updateJadwalMatkul);

// Delete JadwalMatkul
router.delete('/:KodeJadwal', jadwalMatkulController.deleteJadwalMatkul);

module.exports = router;
