const fs = require('fs');
const path = require('path');

const storagePath = path.join(__dirname, '../storage/');

exports.uploadToCloud = (filename, content) => {
    const filePath = path.join(storagePath, filename);
    fs.writeFileSync(filePath, content, 'utf-8');
    return filePath;
};

exports.getResume = (filename) => {
    const filePath = path.join(storagePath, filename);
    return fs.readFileSync(filePath, 'utf-8');
};