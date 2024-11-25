const { recommendJobs } = require('../services/recommendationModel');
const Application = require('../models/application');

exports.getRecommendations = async (req, res) => {
    try {
        const { userId, jobData } = req.body;
        const applications = await Application.find({ user: userId });
        const recommendations = recommendJobs(applications, jobData);
        res.status(200).json({ message: 'Job recommendations generated', recommendations });
    } catch (err) {
        res.status(500).json({ error: 'Error generating recommendations', details: err.message });
    }
};