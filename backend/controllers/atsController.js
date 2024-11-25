const { scanResume } = require('../services/atsScanner');

exports.analyzeResume = (req, res) => {
    try {
        const { resumeContent, jobDescription } = req.body;
        const result = scanResume(resumeContent, jobDescription);
        console.log(result);
        res.status(200).json({ message: 'ATS analysis completed', result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error analyzing resume', details: err.message });
    }
};  