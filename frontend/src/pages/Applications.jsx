import ApllicationBox from "../Components/applications/ApllicationBox";

const ApplicationsData = [
    {
        status: "accepted",
        company: "XYZ Corp.",
        description: "Software Developer",
        date: "2024-11-26",
        severity: "High"
    },
    {
        status: "in process",
        company: "ABC Tech",
        description: "Data Scientist Position",
        date: "2024-11-30",
        severity: "High"
    },
    {
        status: "rejected",
        company: "Innovate Solutions",
        description: "Front-End Developer",
        date: "2024-12-02",
        severity: "Medium"
    },
    {
        status: "accepted",
        company: "GreenTech Inc.",
        description: "Environmental Engineer Position",
        date: "2024-12-05",
        severity: "High"
    },
    {
        status: "in process",
        company: "SoftWare Co.",
        description: "Backend Developer",
        date: "2024-12-08",
        severity: "High"
    },
    {
        status: "rejected",
        company: "DesignHub Studios",
        description: "Graphic Designer Role",
        date: "2024-12-10",
        severity: "Medium"
    },
    {
        status: "accepted",
        company: "NextGen Systems",
        description: "Full Stack Developer",
        date: "2024-12-12",
        severity: "High"
    },
    {
        status: "rejected",
        company: "StartUp Inc.",
        description: "Marketing Specialist Role",
        date: "2024-12-15",
        severity: "Low"
    }
];

export default function Applications() {
    return (
        <div className=" w-[95%] my-auto">
            <h1 className="h-[13vh] flex items-center font-navbar font-bold text-5xl"> Applications </h1>
            {
                ApplicationsData.map((application, index) => (<ApllicationBox index = {index} application = {application} />))
            }
        </div>
    )
}

