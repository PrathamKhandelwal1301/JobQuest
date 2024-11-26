import {AnimatePresence, motion} from "framer-motion"
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { LuPencilLine } from "react-icons/lu";
import LogField from "./LogField"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

export default function Open({application, index, handleDelete, isDelete, handleClick, isOpen, handleEdit, setApplicationsData, applicationsData}) {

    const today = new Date();
    const [isEdit, setIsEdit] = useState(false);
    const [newDescription, setDescription] = useState(application.description);
    const [newCompany, setCompany] = useState(application.company);
    const [newStatus, setStatus] = useState(application.status);
    const [priority, setPriority] = useState(application.severity);
    const [newDate, setNewDate] = useState(today);
    const [newEvent, setNewEvent] = useState();
    const [newDetails, setNewDetails] = useState();

    const formattedDate = today.toISOString().split('T')[0];// Outputs: yyyy-mm-dd

    function handleClick(){
        setIsEdit(!isEdit);
    }

    function handleSave(e){
        e.preventDefault();
        setApplicationsData((applicationsData) => applicationsData.map((application,appIndex) => appIndex == index ? {...application, description : newDescription, company : newCompany, status : newStatus, severity : priority, date : formattedDate } : {...application}));
        handleEdit(index);
    }

    function handleAddLog(e){
        e.preventDefault();
        const newLog = {event : newEvent, details : newDetails, date : newDate.toISOString().split('T')[0]};
        console.log(newLog);
        const newLogs = [...application.logs, newLog];
        setApplicationsData((applicationsData) => applicationsData.map((application, appIndex) => appIndex == index ? {...application, logs : newLogs} : {...application}))
        setNewDate(today);
        setNewDetails("");
        setNewEvent("");
    }

    return (
        <AnimatePresence>
        <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} exit={{opacity : 0}} transition={{duration : 0.55, delay : 0.25}} className="w-[100%] h-[100%] flex flex-col relative">
            <div className=" h-[10%] absolute pr-5 pt-5 right-0">
                <FaTimes size = {30} onClick={() => handleEdit(index)} />
            </div>
            <form className="h-[50%] flex flex-col">
                <input className="font-navbar text-4xl font-bold ml-10 h-[26%] pt-6 border-slate-300 focus:border-black border-b focus:outline-none w-[35vw]" value={newDescription} onChange={(e) => setDescription(e.target.value)} />
                <input className="font-navbar text-lg font-light ml-10 pt-3 h-[13%] focus:outline-none border-b border-slate-300 focus:border-black w-[15vw] " value={newCompany}  onChange={(e) => setCompany(e.target.value)}/>
                <div className="flex h-[35%] w-[45%] mx-10 justify-between items-center">
                    <div className="w-[40%]">
                        <label className="font-navbar text-xl mr-6" htmlFor="status">Status</label>
                        <select className="border rounded-2xl focus:outline-none border-black p-2 m-2" name="Status" id="status" value={newStatus} onChange={(e) => setStatus(e.target.value)} >
                            <option value="in process"> In Process </option>
                            <option value="accepted"> Accepted </option>
                            <option value="rejected"> Rejected </option>
                        </select>
                    </div>
                    <div className="w-[40%]">
                        <label className="font-navbar text-xl mr-6" htmlFor="priority">Priority</label>
                        <select className="border rounded-2xl focus:outline-none border-black p-2 m-2" name="priority" id="priority" value={priority} onChange={(e) => setPriority(e.target.value)} >
                            <option value="High"> High </option>
                            <option value="Medium"> Medium </option>
                            <option value="Low"> Low </option>
                        </select>
                    </div>
                </div>
                <div className="ml-10 mb-4">
                <button onClick={(e) => handleSave(e)} className={`border-2 border-black w-32 h-12 rounded-full font-navbar text-xl hover:bg-black hover:text-white duration-200`} >
                    Save
                </button>
                </div>
                <hr className="w-[93%] ml-10 mt-4 border-black" />
            </form>
            <div className="h-[45%] ml-12 flex flex-col">
                <h1 className="font-navbar text-2xl font-semibold">Log:</h1>
                <div className="flex w-[93%] h-[100%]">
                    <div className="w-[60%] h-[100%] overflow-scroll noscroll">
                        {
                            application.logs.map((log) => <LogField log = {log} />)
                        }
                    </div>
                    <div className=" w-0 h-[90%] ml-12 border-2 "></div>
                    <div className="w-[45%] h-[100%] flex items-center">
                        <form className="flex flex-col gap-4 w-[76%] mx-auto justify-center h-auto my-auto">
                            <input className="font-navbar text-2xl font-semibold border-b border-slate-300 focus:outline-none focus:border-black" type="text" placeholder="Enter new event" value={newEvent} onChange={(e) => setNewEvent(e.target.value)} required />
                            <textarea className="font-navbar h-14 text-lg font-light border-b border-slate-300 focus:outline-none focus:border-black resize-none" type="text" placeholder="Enter event details" value={newDetails} onChange={(e) => setNewDetails(e.target.value)} required />
                            <div className="flex justify-between items-center">
                                <DatePicker className="border-2 p-2 w-36 text-center rounded-xl focus:outline-none focus:border-black" selected={newDate} onChange={(date)=> setNewDate(date)} dateFormat={"YYYY-MM-dd"} />
                                <button onClick={(e) => handleAddLog(e)} className={`border-2 border-black w-28 h-10 rounded-full mr-7 font-navbar text-lg hover:bg-black hover:text-white duration-200`} >
                                    Enter
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

