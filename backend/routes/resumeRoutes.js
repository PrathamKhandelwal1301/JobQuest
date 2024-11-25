const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');
const { authenticate } = require('../middlewares/authMiddleware');

// Example route
router.post('/upload', authenticate, resumeController.uploadResume);
router.get('/track', authenticate, resumeController.getResumes);

module.exports = router;