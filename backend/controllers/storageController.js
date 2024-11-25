const { uploadToCloud, getResume } = require('../services/cloudStorage');

exports.uploadResume = (req, res) => {
    try {
        const { filename, content } = req.body;
        const filePath = uploadToCloud(filename, content);
        res.status(201).json({ message: 'Resume uploaded to cloud', filePath });
    } catch (err) {
        res.status(500).json({ error: 'Error uploading resume to cloud', details: err.message });
    }
};

exports.getResumeFile = (req, res) => {
    try {
        const { filename } = req.params;
        const content = getResume(filename);
        res.status(200).json({ message: 'Resume retrieved successfully', content });
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving resume', details: err.message });
    }
};