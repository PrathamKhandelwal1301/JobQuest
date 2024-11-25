const Application = require('../models/application.js');

exports.uploadResume = async (req, res) => {
    try {
        const { jobTitle, company, userId } = req.body;
        const newApplication = new Application({ jobTitle, company, user: userId });
        await newApplication.save();
        res.status(201).json({ message: 'Resume uploaded successfully', application: newApplication });
    } catch (err) {
        res.status(500).json({ error: 'Error uploading resume', details: err.message });
    }
};

exports.getResumes = async (req, res) => {
    try {
        const { userId } = req.query;
        const applications = await Application.find({ user: userId });
        res.status(200).json(applications);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching resumes', details: err.message });
    }
};