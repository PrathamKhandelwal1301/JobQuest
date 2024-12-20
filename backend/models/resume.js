const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    file: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    uploadedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Resume', resumeSchema);