import { HiOutlineCalendarDays } from "react-icons/hi2";

export default function LogField({log}) {
    return (
        <div className="w-[100%] border-b border-slate-500 h-[30%] flex">
            <div className="w-[25%] h-[80%] border-r-2 border-slate-300 my-auto flex items-center">
                <HiOutlineCalendarDays size={30} className="ml-5" />
                <h1 className="font-navbar text-md ml-2">{log.date}</h1>
            </div>
            <div className="w-[75%] h-[80%] flex flex-col justify-center ml-3 my-auto">
                <h1 className="font-navbar text-xl">{log.event}</h1>
                <p className="font-navbar font-light text-md">{log.details}</p>
            </div>
        </div>
    )
}

