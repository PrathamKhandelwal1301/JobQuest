import FrequencyChart from "../Components/dashboard/FrequencyChart";
import ImportantEvents from "../Components/dashboard/ImportantEvents";
import PieChartDash from "../Components/dashboard/PieChartDash";
import TopBox from "../Components/dashboard/TopBox";
import { FaClockRotateLeft } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Dashboard() {
    return (
        <div className="h-[120vh] bg-slate-50 grid grid-rows-[20%,35%,40%]">
            <div className="grid grid-rows-[40%,60%]">
                <div className="flex items-end m-3">
                    <h1 className="font-navbar font-bold text-5xl"> Dashboard </h1>
                </div>
                <div className="grid grid-cols-4">
                    <TopBox heading = {"In Process"} delay={0.3} number={40} ><FaClockRotateLeft size={30} /></TopBox>
                    <TopBox heading = {"Accepted"} delay={0.6} number={15} > <TiTick size={50} /></TopBox>
                    <TopBox heading = {"Rejected"} delay={0.9} number={25} > <ImCross size={30} /> </TopBox>
                    <TopBox heading = {"Days Hunting"} delay={1.2} number={15} > <FaRegCalendarAlt size={40} /> </TopBox>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="m-3 rounded-lg border border-slate-300 custom_shadow_2 bg-white overflow-scroll noscroll" >
                <h1 className="font-navbar text-xl font-semibold h-[20%] flex items-bottom pl-8 pt-7">Important Events:</h1>
                    <ImportantEvents />
                </div>
                <div className="m-3 rounded-lg border border-slate-300 custom_shadow_2 bg-white" >
                <h1 className="font-navbar text-xl font-semibold h-[20%] flex items-bottom pl-8 pt-7">Application Status:</h1>
                    <PieChartDash />
                </div>
            </div>
            <div className="m-3 rounded-lg border border-slate-300 custom_shadow_2 bg-white">
                <h1 className="font-navbar text-xl font-semibold h-[20%] flex items-center pl-8 pt-10 pb-10">Recent Acitvity:</h1>
                <FrequencyChart />
            </div>
        </div>
    )
}

