import {motion} from "framer-motion";

export default function TopBox({children, heading, number, delay}) {
    return (
        <div className="m-3 rounded-lg border border-slate-300 custom_shadow_2 bg-white grid grid-cols-[35%,65%]">
            <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{delay : delay}} className=" flex justify-center items-center">
                <div className="h-[70%] w-[70%] rounded-full border-2 border-black flex items-center justify-center">
                    {children}
                </div>
            </motion.div>
            <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{delay : delay}} className="flex flex-col justify-center">
                <h1 className="text-md font-navbar"> {heading} </h1>
                <p className="font-navbar text-4xl"> {number} </p>
            </motion.div>
        </div>
    )
}

