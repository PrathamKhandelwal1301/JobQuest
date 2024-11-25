const express = require('express');
const router = express.Router();
const atsController = require('../controllers/atsController');
const resumeController = require('../controllers/resumeController');
const { authenticate } = require('../middlewares/authMiddleware');

// Example route

router.get('/track', authenticate, resumeController.getResumes);
router.post('/analyze', authenticate, atsController.analyzeResume);

module.exports = router;