import { useState } from "react";
import ApllicationBox from "../Components/applications/ApllicationBox";


export default function Applications() {

    const [applicationsData, setApplicationsData] = useState([
        {
          status: "accepted",
          company: "XYZ Corp.",
          description: "Software Developer",
          date: "2024-11-26",
          severity: "High",
          show: 1,
        },
        {
          status: "in process",
          company: "ABC Tech",
          description: "Data Scientist Position",
          date: "2024-11-30",
          severity: "High",
          show: 1,
        },
        {
          status: "rejected",
          company: "Innovate Solutions",
          description: "Front-End Developer",
          date: "2024-12-02",
          severity: "Medium",
          show: 1,
        },
        {
          status: "accepted",
          company: "GreenTech Inc.",
          description: "Environmental Engineer Position",
          date: "2024-12-05",
          severity: "High",
          show: 1,
        },
        {
          status: "in process",
          company: "SoftWare Co.",
          description: "Backend Developer",
          date: "2024-12-08",
          severity: "High",
          show: 1,
        },
        {
          status: "rejected",
          company: "DesignHub Studios",
          description: "Graphic Designer Role",
          date: "2024-12-10",
          severity: "Medium",
          show: 1,
        },
        {
          status: "accepted",
          company: "NextGen Systems",
          description: "Full Stack Developer",
          date: "2024-12-12",
          severity: "High",
          show: 1,
        },
        {
          status: "rejected",
          company: "StartUp Inc.",
          description: "Marketing Specialist Role",
          date: "2024-12-15",
          severity: "Low",
          show: 1,
        },
      ]
    );
    const [isDelete, setIsDelete] = useState(-1);
    const [isOpen, setIsOpen] = useState(-1);

    console.log(applicationsData);

    function handleDelete(indexToDelete){
        setApplicatopnsData((applicationsData) => applicationsData.map((application, index) => index == indexToDelete ? {...application, show : 0} : {...application} ))
        setIsDelete((isDelete) => isDelete = -1);
    }

    function handleClick(index){
        setIsDelete((isDelete) => index == isDelete ? isDelete = -1 : isDelete = index)
    }

    function handleEdit(index){
        setIsOpen((isOpen) => index == isOpen ? isOpen = -1 : isOpen = index);
    }

    return (
        <div className=" w-[95%] mx-auto">
            <h1 className="h-[13vh] flex items-center font-navbar font-bold text-5xl"> Applications </h1>
            {
                applicationsData.map((application, index) => (<ApllicationBox index = {index} application = {application} setApplicationsData = {setApplicationsData} handleDelete = {handleDelete} isDelete={isDelete} handleClick={handleClick} handleEdit={handleEdit} isOpen={isOpen} />))
            }
        </div>
    )
}

