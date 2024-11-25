const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    jobTitle: String,
    company: String,
    status: { type: String, default: 'Pending' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Application', ApplicationSchema);