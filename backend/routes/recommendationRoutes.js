const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');
const { authenticate } = require('../middlewares/authMiddleware');
const resumeController = require('../controllers/resumeController');
// Example route
router.get('/track', authenticate, resumeController.getResumes);
router.post('/get', authenticate, recommendationController.getRecommendations);

module.exports = router;