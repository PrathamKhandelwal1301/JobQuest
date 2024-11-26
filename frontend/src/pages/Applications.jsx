import { useState } from "react";
import ApllicationBox from "../Components/applications/ApllicationBox";
import { FaPlus, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";


export default function Applications() {

    const [applicationsData, setApplicationsData] = useState([
              {
                status: "accepted",
                company: "XYZ Corp.",
                description: "Software Developer",
                date: "2024-11-26",
                severity: "High",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-01", details: "Submitted application through the company website." },
                  { event: "Initial Screening", date: "2024-11-05", details: "Completed a phone interview with HR." },
                  { event: "Technical Interview", date: "2024-11-15", details: "Participated in a technical coding test and discussion." },
                  { event: "Final Offer", date: "2024-11-25", details: "Offer received, awaiting response." }
                ]
              }
            ,
              {
                status: "in process",
                company: "ABC Tech",
                description: "Data Scientist Position",
                date: "2024-11-30",
                severity: "High",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-10", details: "Application submitted via LinkedIn." },
                  { event: "Screening Test", date: "2024-11-18", details: "Completed a machine learning assessment test." },
                  { event: "HR Call", date: "2024-11-25", details: "Underwent an HR discussion to verify qualifications." }
                ]
              },
              {
                status: "rejected",
                company: "Innovate Solutions",
                description: "Front-End Developer",
                date: "2024-12-02",
                severity: "Medium",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-05", details: "Submitted application via company website." },
                  { event: "Technical Assessment", date: "2024-11-15", details: "Completed a practical front-end development test." },
                  { event: "Rejection", date: "2024-12-01", details: "Received rejection email due to high competition." }
                ]
              },
              {
                status: "accepted",
                company: "GreenTech Inc.",
                description: "Environmental Engineer Position",
                date: "2024-12-05",
                severity: "High",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-01", details: "Application submitted through referral." },
                  { event: "Technical Interview", date: "2024-11-15", details: "Participated in technical and case study discussions." },
                  { event: "Final Round", date: "2024-11-28", details: "Completed a panel interview with leadership team." },
                  { event: "Offer Received", date: "2024-12-04", details: "Awaiting candidate response." }
                ]
              },
              {
                status: "in process",
                company: "SoftWare Co.",
                description: "Backend Developer",
                date: "2024-12-08",
                severity: "High",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-12", details: "Application submitted through job portal." },
                  { event: "Technical Test", date: "2024-11-22", details: "Completed a backend problem-solving assessment." },
                  { event: "Awaiting Interview", date: "2024-11-30", details: "Pending interview scheduling from HR." }
                ]
              },
              {
                status: "rejected",
                company: "DesignHub Studios",
                description: "Graphic Designer Role",
                date: "2024-12-10",
                severity: "Medium",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-08", details: "Uploaded portfolio and resume to the career site." },
                  { event: "Design Test", date: "2024-11-20", details: "Submitted a creative design task for evaluation." },
                  { event: "Rejection", date: "2024-12-09", details: "Received feedback stating they preferred another candidate." }
                ]
              },
              {
                status: "accepted",
                company: "NextGen Systems",
                description: "Full Stack Developer",
                date: "2024-12-12",
                severity: "High",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-10", details: "Submitted application via company portal." },
                  { event: "Coding Test", date: "2024-11-20", details: "Completed a full-stack development challenge." },
                  { event: "Final Round", date: "2024-12-05", details: "Attended technical and cultural fit interviews." },
                  { event: "Offer Received", date: "2024-12-11", details: "Awaiting candidate response." }
                ]
              },
              {
                status: "rejected",
                company: "StartUp Inc.",
                description: "Marketing Specialist Role",
                date: "2024-12-15",
                severity: "Low",
                show: 1,
                logs: [
                  { event: "Applied", date: "2024-11-05", details: "Application submitted through a recruitment drive." },
                  { event: "Marketing Case Study", date: "2024-11-18", details: "Prepared and submitted a marketing strategy presentation." },
                  { event: "Rejection", date: "2024-12-14", details: "Informed of the decision to move forward with another candidate." }
                ]
              }
          ]
    );
    const [isDelete, setIsDelete] = useState(-1);
    const [isOpen, setIsOpen] = useState(-1);
    const [isNew, setIsNew] = useState(false);
    const [newDescription, setDescription] = useState("");
    const [newCompany, setCompany] = useState("");
    const [newStatus, setStatus] = useState("in process");
    const [priority, setPriority] = useState("High");

    function handleDelete(indexToDelete){
        setApplicationsData((applicationsData) => applicationsData.map((application, index) => index == indexToDelete ? {...application, show : 0} : {...application} ))
        setIsDelete((isDelete) => isDelete = -1);
    }

    function handleClick(index){
        setIsDelete((isDelete) => index == isDelete ? isDelete = -1 : isDelete = index)
    }

    function handleEdit(index){
        setIsOpen((isOpen) => index == isOpen ? isOpen = -1 : isOpen = index);
    }

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];// Outputs: yyyy-mm-dd

    function handleNew(e){
      e.preventDefault();
      const newApplication = {
        status : newStatus,
        severity : priority,
        company : newCompany,
        date : formattedDate,
        description : newDescription,
        logs : [
          {event: "Applied", date: formattedDate , details: "Application submitted through a recruitment drive."}
        ]
      }

      console.log(newApplication);
      setApplicationsData((applicationsData) => [...applicationsData, newApplication ]);
      setIsNew(!isNew);
      setDescription("");
      setCompany("");
    }

    return (
        <div className=" w-[95%] mx-auto">
            <h1 className="h-[13vh] flex items-center font-navbar font-bold text-5xl"> Applications </h1>
            {
                applicationsData.map((application, index) => (<ApllicationBox 
                                                                    applicationsData = {applicationsData} 
                                                                    index = {index} 
                                                                    application = {application} 
                                                                    setApplicationsData = {setApplicationsData} 
                                                                    handleDelete = {handleDelete} 
                                                                    isDelete={isDelete} 
                                                                    handleClick={handleClick} 
                                                                    handleEdit={handleEdit} 
                                                                    isOpen={isOpen} />)
                                    )
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
                          <input className="font-navbar text-4xl font-bold ml-5 h-[20%] pt-6 border-slate-300 focus:border-black border-b focus:outline-none w-[90%]" placeholder="Enter Role" value={newDescription} onChange={(e) => setDescription(e.target.value)} />
                          <input className="font-navbar text-lg font-light ml-5 pt-3 h-[10%] focus:outline-none border-b border-slate-300 focus:border-black w-[15vw] " placeholder="Enter company" value={newCompany}  onChange={(e) => setCompany(e.target.value)}/>
                          <div className="flex h-[35%] w-[90%] ml-5 justify-between items-center">
                              <div className="w-[50%]">
                                  <label className="font-navbar text-xl mr-4" htmlFor="status">Status</label>
                                  <select className="border rounded-2xl focus:outline-none border-black p-2 m-2" name="Status" id="status" value={newStatus} onChange={(e) => setStatus(e.target.value)} >
                                      <option value="in process"> In Process </option>
                                      <option value="accepted"> Accepted </option>
                                      <option value="rejected"> Rejected </option>
                                  </select>
                              </div>
                              <div className="w-[50%]">
                                  <label className="font-navbar text-xl mr-4" htmlFor="priority">Priority</label>
                                  <select className="border rounded-2xl focus:outline-none border-black p-2 m-2" name="priority" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} >
                                      <option value="High"> High </option>
                                      <option value="Medium"> Medium </option>
                                      <option value="Low"> Low </option>
                                  </select>
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
    )
}

