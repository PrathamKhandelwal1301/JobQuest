import { useState } from "react"
import ApllicationBox from "../Components/applications/ApllicationBox";
import { FaPlus, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import AtsBox from "../Components/ats/AtsBox"
import PDFUploader from "../Components/ats/PdfUploader";

export default function Resumes() {

    const [resumes, setResumes] = useState([
        {
          title: "Resume for Software Development",
          lastModified: "2024-08-17",
          tag: "Software Development",
          atsScore: 85,
          show : 1,
          logs: [
            { event: "Created", date: "2024-05-01", details: "Drafted initial version of the resume." },
            { event: "Updated Skills", date: "2024-07-10", details: "Added proficiency in React.js and Node.js." },
            { event: "ATS Optimization", date: "2024-08-15", details: "Adjusted keywords to align with job descriptions." },
          ]
        },
        {
          title: "Resume for Data Analyst Role",
          lastModified: "2023-12-05",
          tag: "Data Analysis",
          atsScore: 78,
          show : 1,
          logs: [
            { event: "Created", date: "2023-09-01", details: "Prepared draft focused on data analytics projects." },
            { event: "Added Project", date: "2023-11-20", details: "Included a machine learning project on customer segmentation." },
            { event: "Final Review", date: "2023-12-02", details: "Conducted final proofreading and formatting." },
          ]
        },
        {
          title: "Resume for Digital Marketing Specialist",
          lastModified: "2024-02-14",
          tag: "Digital Marketing",
          atsScore: 82,
          show : 1,
          logs: [
            { event: "Created", date: "2024-01-01", details: "Initial version with focus on SEO and campaigns." },
            { event: "Portfolio Link Added", date: "2024-01-15", details: "Included portfolio showcasing successful marketing campaigns." },
            { event: "Final Review", date: "2024-02-12", details: "Updated to include metrics from recent projects." },
          ]
        },
        {
          title: "Resume for Mechanical Engineer",
          lastModified: "2024-06-29",
          tag: "Mechanical Engineering",
          atsScore: 76,
          show : 1,
          logs: [
            { event: "Created", date: "2024-04-01", details: "Prepared resume tailored to engineering roles." },
            { event: "Updated Certifications", date: "2024-05-20", details: "Added Six Sigma certification details." },
            { event: "Proofreading", date: "2024-06-25", details: "Ensured error-free content before submission." },
          ]
        },
        {
          title: "Resume for Project Manager",
          lastModified: "2023-10-21",
          tag: "Project Management",
          atsScore: 88,
          show : 1,
          logs: [
            { event: "Created", date: "2023-07-10", details: "Drafted with emphasis on leadership and project delivery." },
            { event: "Updated Achievements", date: "2023-09-15", details: "Included metrics-driven project outcomes." },
            { event: "Final Review", date: "2023-10-18", details: "Refined to meet ATS compliance standards." },
          ]
        },
        {
          title: "Resume for UX/UI Designer",
          lastModified: "2024-05-12",
          tag: "UI/UX Design",
          atsScore: 79,
          show : 1,
          logs: [
            { event: "Created", date: "2024-02-01", details: "Focused on UI/UX design skills and experience." },
            { event: "Portfolio Update", date: "2024-04-10", details: "Added recent project samples to the portfolio link." },
            { event: "ATS Review", date: "2024-05-10", details: "Optimized formatting for ATS." },
          ]
        },
        {
          title: "Resume for Cybersecurity Analyst",
          lastModified: "2024-03-30",
          tag: "Cybersecurity",
          atsScore: 90,
          show : 1,
          logs: [
            { event: "Created", date: "2024-01-15", details: "Drafted initial resume with focus on cybersecurity expertise." },
            { event: "Updated Skills", date: "2024-02-20", details: "Added certifications in ethical hacking and SOC." },
            { event: "Reviewed", date: "2024-03-28", details: "Fine-tuned for better readability and ATS scoring." },
          ]
        },
        {
          title: "Resume for Content Writer",
          lastModified: "2024-07-08",
          tag: "Content Writing",
          atsScore: 74,
          show : 1,
          logs: [
            { event: "Created", date: "2024-03-01", details: "Drafted with focus on writing experience and publications." },
            { event: "Portfolio Update", date: "2024-06-20", details: "Added recent blog posts and articles." },
            { event: "Proofreading", date: "2024-07-05", details: "Performed final editing and proofreading." },
          ]
        }
      ]);
    const [isDelete, setIsDelete] = useState(-1);
    const [isOpen, setIsOpen] = useState(-1);
    const [isNew, setIsNew] = useState(false);
    const [newTitle, setTitle] = useState("");
    const [newTag, setTag] = useState("");
    const [newAts, setAts] = useState(0);

    function handleDelete(indexToDelete) {
        setResumes((resumes) =>
            resumes.map((resume, index) =>
                index === indexToDelete ? { ...resume, show: 0 } : { ...resume }
            )
        );
        setIsDelete(-1);
    }

    function handleClick(index) {
        setIsDelete(index === isDelete ? -1 : index);
    }

    function handleEdit(index) {
        setIsOpen(index === isOpen ? -1 : index);
    }

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Outputs: yyyy-mm-dd

    function handleNew(e) {
        e.preventDefault();
        const newResume = {
            title: newTitle,
            tag: newTag,
            atsScore: newAts,
            lastModified: formattedDate,
            logs: [
                { event: "Created", date: formattedDate, details: "Initial resume version created." }
            ],
        };

        setResumes((resumes) => [...resumes, newResume]);
        setIsNew(!isNew);
        setTitle("");
        setTag("");
        setAts(0);
    }

    return (
        <div className="w-[95%] mx-auto">
            <h1 className="h-[13vh] flex items-center font-navbar font-bold text-5xl">Resumes</h1>
            {
                resumes.map((resume, index) => (
                    <AtsBox
                        resume={resume}
                        index={index}
                        handleDelete={handleDelete}
                        isDelete={isDelete}
                        handleClick={handleClick}
                        handleEdit={handleEdit}
                        isOpen={isOpen}
                        setResumesData={setResumes}
                        resumesData={resumes}
                    />
                ))
            }

<motion.div layout style={{ width : isNew ? "30vw" : "5rem", height : isNew ? "50vh" : "5rem", margin : isNew ? "auto" : "0", borderRadius : isNew ? "50px" : "50px" }} transition={{duration : 0.5}} className="w-20 h-20 bg-white absolute bottom-10 right-10 border-2 border-black rounded-full flex flex-col items-center justify-center overflow-hidden">
                <AnimatePresence>
                {
                    !isNew &&
                    <motion.div initial={{opacity : 0}} animate={{opacity:1}} transition={{duration:0.2, delay: 0.2}} >
                        <FaPlus size={40} onClick={() => setIsNew(!isNew)} />
                    </motion.div>
                }
                </AnimatePresence>
                <AnimatePresence>
                {
                    isNew &&
                    <motion.div className="w-[100%] h-[100%]" initial={{opacity : 0}} animate={{opacity:1}} transition={{duration: 0.2, delay: 0.2}} >
                      <div className=" h-[10%] absolute pr-8 pt-8 right-0">
                        <FaTimes size = {30} onClick={() => setIsNew(!isNew)} />
                      </div>
                      <form className="h-[100%] flex flex-col justify-start mt-10">
                          <input className="font-navbar text-4xl font-bold ml-5 h-[20%] pt-6 border-slate-300 focus:border-black border-b focus:outline-none w-[90%]" placeholder="Enter Resume name" value={newTitle} onChange={(e) => setTitle(e.target.value)} />
                          <input className="font-navbar text-lg font-light ml-5 pt-3 h-[10%] focus:outline-none border-b border-slate-300 focus:border-black w-[15vw] " placeholder="Enter Tag" value={newTag}  onChange={(e) => setTag(e.target.value)}/>
                          <div className="flex h-[35%] w-[90%] ml-5 space-x-20 items-center">
                              <div className="w-[5%]">
                                  <label className="font-navbar text-xl mr-4" htmlFor="ATS">ATS</label>
                                  <input className="font-navbar text-lg font-light pt-3 h-[10%] focus:outline-none border-b border-slate-300 focus:border-black w-[5vw] " placeholder="Enter Ats" value={newAts}  onChange={(e) => setAts(e.target.value)}/>
                              </div>
                              <div className="w-[50%]">
                                  <PDFUploader />
                              </div>
                          </div>
                          <div className="ml-5 mb-4">
                          <button onClick={(e) => handleNew(e)} className={`border-2 border-black w-32 h-12 rounded-full font-navbar text-xl hover:bg-black hover:text-white duration-200`} >
                              Save
                          </button>
                          </div>
                      </form>
                    </motion.div>
                }
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
