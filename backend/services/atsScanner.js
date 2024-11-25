exports.scanResume = (resumeContent, jobDescription) => {
    // Basic keyword matching for demonstration purposes
    const jobKeywords = jobDescription.split(' ').map(word => word.toLowerCase());
    const resumeWords = resumeContent.split(' ').map(word => word.toLowerCase());
    const matches = jobKeywords.filter(word => resumeWords.includes(word));
    const matchRate = (matches.length / jobKeywords.length) * 100;

    return { matchRate, matches };
};