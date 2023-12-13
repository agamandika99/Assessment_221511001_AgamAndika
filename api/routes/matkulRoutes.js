// routes/matkulRoutes.js

const express = require('express');
const router = express.Router();
const matkulController = require('../controllers/matkulController');

// Get all Matkul
router.get('/', matkulController.getAllMatkul);

// Get one Matkul
router.get('/:KodeMK', matkulController.getOneMatkul);

// Create Matkul
router.post('/', matkulController.createMatkul);

// Update Matkul
router.patch('/:KodeMK', matkulController.updateMatkul);

// Delete Matkul
router.delete('/:KodeMK', matkulController.deleteMatkul);

module.exports = router;
