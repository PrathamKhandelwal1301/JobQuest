import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function ApllicationBox({application, index}) {

    const [isDelete, setIsDelete] = useState(false);

    function handleClick(){
        setIsDelete(!isDelete)
    }


    return (
        <AnimatePresence>
        <motion.div initial = {{y : 20, opacity : 0}} animate = {{y : 0, opacity : 1}} transition={{duration : 0.35, delay : index*0.1}} className=" w-[100%] h-[10vh] flex overflow-x-hidden rounded-lg custom_shadow_2 bg-white mb-5">
            <AnimatePresence>
            {
                isDelete &&
                <motion.div className="bg-red-600 opacity-95 flex items-center justify-center" initial = {{width : "0%"}} animate = {{width : "7%"}} exit={{width : "0%"}} transition={{duration : 0.5}}  >
                    <FaCheck size={23} color="white" onClick={handleClick} />
                </motion.div>
            }
            </AnimatePresence>
            <div className="w-[100%] grid grid-cols-[6%,94%] items-center justify-center">
            <div className="flex h-[80%] items-center justify-center border-r-2 border-slate-300">
            {!isDelete ? <MdOutlineDelete size={30} onClick={handleClick} /> : <FaTimes size={27} onClick={handleClick} /> }
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center font-navbar pl-5 w-[22vw]">
                    <h1 className="text-xl font-medium">{application.description}</h1>
                    <p className="text-md font-light"> {application.company} </p>
                </div>
                <div className="w-[14vw] flex items-center pl-5">
                    <FaDotCircle color={application.status == "in process" ? "#eab308" : application.status =="rejected" ? "#ef4444" : "#22c55e" } />
                    <h1 className="font-navbar text-lg pl-3"> {application.status.charAt(0).toUpperCase() + application.status.slice(1)} </h1>
                </div>
                <div className="flex flex-col justify-center font-navbar pl-5 w-[12vw]">
                    <p className="text-md font-light"> Edited on: </p>
                    <div className="flex items-center">
                    <HiOutlineCalendarDays size = {24}/><h1 className="text-lg font-medium pl-1 pt-1">{application.date}</h1>
                    </div>
                </div>
                <div className="w-[12vw] flex items-center justify-center">
                    <div className={`w-[6vw] h-[80%] font-navbar font-light text-md flex flex-col justify-center`}> 
                    <h1 className="text-md font-light">Priority:</h1>
                        <h1 className= {`${application.severity == "Medium" ? "text-yellow-500" : application.severity == "High" ? "text-red-500" : "text-green-500" } text-lg`} >
                            {application.severity} 
                        </h1>
                    </div>
                </div>
            </div>
            </div>
        </motion.div>
        </AnimatePresence>
    )
}

