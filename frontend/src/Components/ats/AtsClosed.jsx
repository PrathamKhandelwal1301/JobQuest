import { motion } from "framer-motion";
import { MdOutlineDelete } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuPencilLine } from "react-icons/lu";

export default function AtsClosed({ resume, index, handleDelete, isDelete, handleClick, isOpen, handleEdit }) {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.55, delay: 0.25 }} 
            className="w-[100%] grid grid-cols-[6%,94%] items-center justify-center"
        >
            <div className="flex items-center justify-center border-r-2 border-slate-300">
                {isDelete === index ? (
                    <FaTimes size={27} onClick={() => handleClick(index)} />
                ) : (
                    <MdOutlineDelete size={30} onClick={() => handleClick(index)} />
                )}
            </div>
            <div className="flex">
                {/* Title */}
                <div className="flex flex-col justify-center font-navbar pl-5 w-[24vw]">
                    <h1 className="text-xl font-medium">{resume.title}</h1>
                </div>

                {/* ATS Score */}
                <div className="w-[6vw] flex items-center pl-5">
                    <FaDotCircle 
                        color={
                            resume.atsScore < 50 
                                ? "#ef4444" 
                                : resume.atsScore < 75 
                                ? "#eab308" 
                                : "#22c55e"
                        } 
                    />
                    <h1 className="font-navbar text-lg pl-3">
                        {resume.atsScore}
                    </h1>
                </div>

                {/* Last Modified */}
                <div className="flex flex-col justify-center font-navbar pl-16 w-[18vw]">
                    <p className="text-md font-light">Last Modified:</p>
                    <div className="flex items-center">
                        <HiOutlineCalendarDays size={24} />
                        <h1 className="text-lg font-medium pl-1 pt-1">
                            {resume.lastModified}
                        </h1>
                    </div>
                </div>

                {/* Severity */}
                <div className="w-[16vw] flex items-center justify-center">
                    <div className="w-[16vw] h-[80%] font-navbar font-light text-md flex flex-col justify-center">
                        <h1 className="text-md font-light">tag:</h1>
                        <h1 
                            className={`text-lg`}
                        >
                            {resume.tag}
                        </h1>
                    </div>
                </div>

                {/* Edit Button */}
                <div className="flex items-center justify-center w-[6vw]">
                    <LuPencilLine size={30} onClick={() => handleEdit(index)} />
                </div>
            </div>
        </motion.div>
    );
}