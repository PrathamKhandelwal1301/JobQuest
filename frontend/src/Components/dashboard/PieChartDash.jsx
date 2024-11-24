import { Cell, Legend, Pie, PieChart, Tooltip } from "recharts";

const applicationData = [
    { status: "In Process", count: 40, color: "#f2e40060" },
    { status: "Rejected", count: 25, color: "#e4000060" },
    { status: "Accepted", count: 15, color: "#00e40060" }
  ];

export default function PieChartDash() {
    return (
        <div className="h-[80%] w-[100%] flex items-start pt-4 justify-center text-black">
            <PieChart height={250} width={550}>
                <Pie data={applicationData} nameKey='status' dataKey='count' innerRadius={85} outerRadius={120} paddingAngle={2}>
                    {applicationData.map(entry => (<Cell fill = {entry.color} stroke="grey" />))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="middle" align="right" width="20%" layout="vertical" iconSize={15} iconType="circle" wrapperStyle={{ textShadow : "rgba(0, 0, 0, 3) 0px 0px 0px" }}/>
            </PieChart>
        </div>
    )
}

