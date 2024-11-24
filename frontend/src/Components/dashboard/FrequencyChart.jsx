import {Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const applicationData = [
    { date: "2024-11-17", applicationsApplied: 9 },
    { date: "2024-11-18", applicationsApplied: 6 },
    { date: "2024-11-19", applicationsApplied: 3 },
    { date: "2024-11-20", applicationsApplied: 4 },
    { date: "2024-11-21", applicationsApplied: 1 },
    { date: "2024-11-22", applicationsApplied: 9 },
    { date: "2024-11-23", applicationsApplied: 4 }
  ];

export default function FrequencyChart() {
    return (
        <div className="flex items-center justify-center w-[100%] h-[80%] pr-10">
            <AreaChart data={applicationData} height={300} width={1250} >
                <XAxis dataKey={"date"} />
                <YAxis unit={""}/>
                <Tooltip />
                <Area dataKey={"applicationsApplied"} type={"monotone"} stroke="blue" fill="#0000e460" />
            </AreaChart>
        </div>
    )
}

