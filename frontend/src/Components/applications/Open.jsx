import {AnimatePresence, motion} from "framer-motion"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import { LuPencilLine } from "react-icons/lu";

export default function Open({application, index, handleDelete, isDelete, handleClick, isOpen, handleEdit, setApplicationsData}) {

    const [isEdit, setIsEdit] = useState(false);

    function handleClick(){
        setIsEdit(!isEdit);
    }

    return (
        <AnimatePresence>
        <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} exit={{opacity : 0}} transition={{duration : 0.55, delay : 0.25}} className="w-[100%] h-[100%] flex flex-col relative">
            <div className=" h-[10%] absolute pr-5 pt-5 right-0">
                <FaTimes size = {30} onClick={() => handleEdit(index)} />
            </div>
            <form className="h-[20%] flex flex-col justify-center">
                <input className="font-navbar text-5xl font-bold ml-10 h-[50%] pt-4 border-slate-300 focus:border-black border-b focus:outline-none w-[35vw]" value={application.description} onChange={(e) => setApplicationsData((applications) => applications.map())} />
                <input className="font-navbar text-lg font-light ml-10 pt-3 h-[30%] focus:outline-none border-b border-slate-300 focus:border-black w-[15vw] " value={application.company} />
            </form>
        </motion.div>
        </AnimatePresence>
    )
}

