const express = require('express');
const router = express.Router();
const storageController = require('../controllers/storageController');
const { authenticate } = require('../middlewares/authMiddleware');
const resumeController = require('../controllers/resumeController');
// Example route
router.get('/track', authenticate, resumeController.getResumes);
router.post('/upload', authenticate, storageController.uploadResume);
router.get('/:filename', authenticate, storageController.getResumeFile);

module.exports = router; 