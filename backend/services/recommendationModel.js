exports.recommendJobs = (applications, jobData) => {
    const appliedCompanies = applications.map(app => app.company.toLowerCase());
    const recommendations = jobData.filter(job => !appliedCompanies.includes(job.company.toLowerCase()));
    return recommendations.slice(0, 5); // Return top 5 recommendations
};