import ImportantCard from "../misc/ImportantCard";

const jobHuntingEvents = [
    {
      event: "Interview Call",
      company: "XYZ Corp.",
      description: "Software Developer Interview",
      date: "2024-11-26",
      severity: "High"
    },
    {
      event: "Application Deadline",
      company: "ABC Tech",
      description: "Data Scientist Position",
      date: "2024-11-30",
      severity: "High"
    },
    {
      event: "Interview Call",
      company: "Innovate Solutions",
      description: "Front-End Developer Interview",
      date: "2024-12-02",
      severity: "Medium"
    },
    {
      event: "Application Deadline",
      company: "GreenTech Inc.",
      description: "Environmental Engineer Position",
      date: "2024-12-05",
      severity: "High"
    },
    {
      event: "Interview Call",
      company: "SoftWare Co.",
      description: "Backend Developer Interview",
      date: "2024-12-08",
      severity: "High"
    },
    {
      event: "Application Deadline",
      company: "DesignHub Studios",
      description: "Graphic Designer Role",
      date: "2024-12-10",
      severity: "Medium"
    },
    {
      event: "Interview Call",
      company: "NextGen Systems",
      description: "Full Stack Developer Interview",
      date: "2024-12-12",
      severity: "High"
    },
    {
      event: "Application Deadline",
      company: "StartUp Inc.",
      description: "Marketing Specialist Role",
      date: "2024-12-15",
      severity: "Low"
    }
  ];

  export default function ImportantEvents() {
    return (
        <div className="h-[78%] noscroll overflow-scroll">
            {jobHuntingEvents.map((event, index) => <ImportantCard event = {event} index = {index} key = {index}/>)}
        </div>
    )
  }
  
  