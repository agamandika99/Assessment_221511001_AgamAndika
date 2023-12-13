// routes/kontrakMhsRoutes.js

const express = require('express');
const router = express.Router();
const kontrakMhsController = require('../controllers/kontrakMhsController');

// Get all KontrakMhs
router.get('/', kontrakMhsController.getAllKontrakMhs);

// Get one KontrakMhs
router.get('/:NIM/:KodeJadwal', kontrakMhsController.getOneKontrakMhs);

// Create KontrakMhs
router.post('/', kontrakMhsController.createKontrakMhs);

// Delete KontrakMhs
router.delete('/:NIM/:KodeJadwal', kontrakMhsController.deleteKontrakMhs);

module.exports = router;
