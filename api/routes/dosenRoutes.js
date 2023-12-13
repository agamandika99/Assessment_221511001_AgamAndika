// routes/dosenRoutes.js

const express = require('express');
const router = express.Router();
const dosenController = require('../controllers/dosenController');

// Get all Dosen
router.get('/', dosenController.getAllDosen);

// Get one Dosen
router.get('/:NIP', dosenController.getOneDosen);

// Create Dosen
router.post('/', dosenController.createDosen);

// Update Dosen
router.patch('/:NIP', dosenController.updateDosen);

// Delete Dosen
router.delete('/:NIP', dosenController.deleteDosen);

module.exports = router;
