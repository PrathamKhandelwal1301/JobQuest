import { useState } from "react"
import { motion } from "framer-motion";
import Speedometer from "../Components/ats/Speedometer";
import { FeedbackSection } from "../Components/ats/FeedbackSection";

const resumeFeedback = {
    good_points: [
      {
        heading: "Keyword Optimization",
        description: "The resume includes relevant technical keywords such as 'MERN stack', 'AWS Lambda', 'Docker', and 'CI/CD', making it ATS-friendly.",
        reason: "Using industry-specific and role-specific keywords improves the chances of passing ATS filters."
      },
      {
        heading: "Quantifiable Achievements",
        description: "The projects and experiences include measurable impacts like 'boosted user engagement by 30%' and 'reduced API response times by 60%'.",
        reason: "Quantifiable achievements demonstrate the candidate's tangible contributions and enhance ATS ranking."
      },
      {
        heading: "Clear Section Headings",
        description: "Sections like 'Education', 'Technical Skills', 'Projects', and 'Achievements' are well-defined and ATS-readable.",
        reason: "Properly structured headings improve readability for both ATS and recruiters."
      }
    ],
    bad_points: [
      {
        heading: "Overuse of Complex Phrases",
        description: "Sentences like 'leveraged load balancing and horizontal scaling techniques' could be simplified for better ATS comprehension.",
        reason: "ATS may struggle with overly complex phrasing, potentially reducing keyword match rates."
      },
      {
        heading: "Lack of Soft Skills",
        description: "The resume does not highlight essential soft skills like 'teamwork', 'communication', or 'problem-solving'.",
        reason: "ATS systems often look for both technical and soft skills to identify well-rounded candidates."
      },
      {
        heading: "Missing Job Titles in Projects",
        description: "Projects do not specify a formal role like 'Backend Developer' or 'Full-Stack Developer'.",
        reason: "ATS may prioritize resumes with clearly stated roles aligned to job descriptions."
      }
    ],
    improvements: [
      {
        heading: "Simplify Technical Descriptions",
        description: "Rewrite technical descriptions to balance detail with simplicity, ensuring ATS can parse the content effectively.",
        reason: "Simpler phrasing retains keyword richness while improving ATS compatibility."
      },
      {
        heading: "Add Soft Skills Section",
        description: "Include a dedicated section for soft skills with examples such as 'Collaboration', 'Leadership', and 'Adaptability'.",
        reason: "Highlighting soft skills complements technical abilities and increases ATS match scores."
      },
      {
        heading: "Define Formal Roles for Projects",
        description: "Mention formal roles (e.g., 'Frontend Developer') in project descriptions to align with job postings.",
        reason: "ATS systems often match job titles in resumes with those in job descriptions."
      }
    ]
  }

export default function Ats() {
    const [resume, setResume] = useState(null);

    function getRandomWeightedNumber() {
        const ranges = [
            { min: 40, max: 59, weight: 1 }, // Lower range with less weight
            { min: 60, max: 85, weight: 5 }, // Middle range with higher weight
            { min: 86, max: 95, weight: 1 }  // Upper range with less weight
        ];
    
        // Calculate the total weight
        const totalWeight = ranges.reduce((sum, range) => sum + range.weight, 0);
    
        // Pick a random number between 0 and totalWeight
        const randomWeight = Math.random() * totalWeight;
    
        // Determine which range the random number falls into
        let cumulativeWeight = 0;
        for (const range of ranges) {
            cumulativeWeight += range.weight;
            if (randomWeight <= cumulativeWeight) {
                // Generate a random number within the selected range
                return (Math.floor(Math.random() * (range.max - range.min + 1)) + range.min);
            }
        }
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setResume({
                    name: file.name,
                    type: file.type,
                    size: file.size,
                    preview: reader.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const score = getRandomWeightedNumber();

    return (
        <div className="w-[95%] h-[100%] flex flex-col bg-white overflow-scroll">
            <h1 className="h-[10%] flex items-end font-navbar font-bold text-5xl"> 
                Check your ATS Score 
            </h1>
            
            {!resume ? (
                <div className="w-[100%] h-[86%] my-auto rounded-xl border-dashed border-4 border-slate-300 [--dash-gap:80px] flex items-center justify-center">
                    <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="resume-upload"
                    />
                    <label 
                        htmlFor="resume-upload" 
                        className="cursor-pointer flex items-center justify-center bg-slate-300 text-white px-4 py-2 rounded-full font-navbar text-8xl w-[10vh] h-[10vh] hover:bg-black transition-colors duration-300"
                    >
                        +
                    </label>
                </div>
            ) : (
                <div className="w-[95%] h-[90%] flex flex-col">
                    <div className="mt-10 flex w-[auto] mx-auto">
                        <img src="resume.jpg" alt="resume image" className="w-[15vw] h-[37.5vh] shadow-2xl z-10" />
                        <Speedometer score = {score} />
                    </div>
                    <div className="container mx-auto px-4 py-8">
                <div className="space-y-8 mt-10">
                    <FeedbackSection 
                    title="Good Points" 
                    items={resumeFeedback.good_points} 
                    />
                    <FeedbackSection 
                    title="Areas for Improvement" 
                    items={resumeFeedback.bad_points} 
                    />
                    <FeedbackSection 
                    title="Suggested Improvements" 
                    items={resumeFeedback.improvements} 
                    />
                </div>
                </div>
                </div>
            )}
        </div>
    )
}