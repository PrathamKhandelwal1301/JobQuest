import {motion} from "framer-motion";
import { MdOutlineDelete } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuPencilLine } from "react-icons/lu";


export default function Closed({application, index, handleDelete, isDelete, handleClick, isOpen, handleEdit}) {
    return (
        <motion.div initial = {{opacity : 0}} animate = {{ opacity : 1}} exit={{ opacity : 0}} transition={{duration : 0.55, delay: 0.25}} className="w-[100%] grid grid-cols-[6%,94%] items-center justify-center">
                <div className="flex items-center justify-center border-r-2 border-slate-300">
                {isDelete == index ? <FaTimes size={27} onClick={() => handleClick(index)} /> : <MdOutlineDelete size={30} onClick={() => handleClick(index)} /> }
                </div>
                <div className="flex">
                    <div className="flex flex-col justify-center font-navbar pl-5 w-[24vw]">
                        <h1 className="text-xl font-medium">{application.description}</h1>
                        <p className="text-md font-light"> {application.company} </p>
                    </div>
                    <div className="w-[16vw] flex items-center pl-5">
                        <FaDotCircle color={application.status == "in process" ? "#eab308" : application.status =="rejected" ? "#ef4444" : "#22c55e" } />
                        <h1 className="font-navbar text-lg pl-3"> {application.status.charAt(0).toUpperCase() + application.status.slice(1)} </h1>
                    </div>
                    <div className="flex flex-col justify-center font-navbar pl-5 w-[14vw]">
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
                    <div className="flex items-center justify-center w-[6vw]">
                    <LuPencilLine size = {30} onClick={() =>handleEdit(index)} />
                    </div>
                </div>
        </motion.div>
    )
}

