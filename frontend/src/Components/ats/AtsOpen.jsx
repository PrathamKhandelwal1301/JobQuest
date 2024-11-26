import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import AtsLogField from "./AtsLogField"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Open({
  resume, 
  index, 
  handleDelete, 
  isDelete, 
  handleClick, 
  isOpen, 
  handleEdit, 
  setResumesData, 
  resumesData
}) {
  const today = new Date();
  const [isEdit, setIsEdit] = useState(false);
  const [newDescription, setDescription] = useState(resume.title);
  const [newTag, setTag] = useState(resume.tag);
  const [newATS, setATS] = useState(resume.atsScore);
  const [newDate, setNewDate] = useState(today);
  const [newEvent, setNewEvent] = useState();
  const [newDetails, setNewDetails] = useState();

  const formattedDate = today.toISOString().split("T")[0]; // Outputs: yyyy-mm-dd

  function handleClick() {
    setIsEdit(!isEdit);
  }

  function handleSave(e) {
    e.preventDefault();
    setResumesData((resumesData) =>
      resumesData.map((resume, resumeIndex) =>
        resumeIndex === index
          ? { 
              ...resume, 
              title: newDescription, 
              tag: newTag, 
              atsScore: newATS, 
              lastModified: formattedDate 
            }
          : { ...resume }
      )
    );
    handleEdit(index);
  }

  function handleAddLog(e) {
    e.preventDefault();
    const newLog = { event: newEvent, details: newDetails, date: newDate.toISOString().split("T")[0] };
    console.log(newLog);
    const newLogs = [...resume.logs, newLog];
    setResumesData((resumesData) =>
      resumesData.map((resume, resumeIndex) =>
        resumeIndex === index ? { ...resume, logs: newLogs } : { ...resume }
      )
    );
    setNewDate(today);
    setNewDetails("");
    setNewEvent("");
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55, delay: 0.25 }}
        className="w-[100%] h-[100%] flex flex-col relative"
      >
        <div className="absolute right-64 top-5">
          <img src="resume.jpg" alt="resume image" className="w-[12vw] h-[30vh] shadow-2xl z-10" />
        </div>
        <div className="h-[10%] absolute pr-5 pt-5 right-0">
          <FaTimes size={30} onClick={() => handleEdit(index)} />
        </div>
        <form className="h-[50%] flex flex-col">
          <input
            className="font-navbar text-4xl font-bold ml-10 h-[26%] pt-6 border-slate-300 focus:border-black border-b focus:outline-none w-[35vw]"
            value={newDescription}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="font-navbar text-lg font-light ml-10 pt-3 h-[13%] focus:outline-none border-b border-slate-300 focus:border-black w-[15vw]"
            value={newTag}
            onChange={(e) => setTag(e.target.value)}
          />
          <div className="flex h-[35%] w-[45%] mx-10 justify-between items-center">
            <div className="w-[40%]">
              <label className="font-navbar text-xl mr-6" htmlFor="atsScore">
                ATS Score
              </label>
              <input
                type="number"
                className="border rounded-2xl focus:outline-none border-black p-2 m-2 w-[60%]"
                id="atsScore"
                value={newATS}
                onChange={(e) => setATS(e.target.value)}
              />
            </div>
          </div>
          <div className="ml-10 mb-4">
            <button
              onClick={(e) => handleSave(e)}
              className={`border-2 border-black w-32 h-12 rounded-full font-navbar text-xl hover:bg-black hover:text-white duration-200`}
            >
              Save
            </button>
          </div>
          <hr className="w-[93%] ml-10 mt-4 border-black" />
        </form>
        <div className="h-[45%] ml-12 flex flex-col">
          <h1 className="font-navbar text-2xl font-semibold">Log:</h1>
          <div className="flex w-[93%] h-[100%]">
            <div className="w-[60%] h-[100%] overflow-scroll noscroll">
              {resume.logs.map((log) => (
                <AtsLogField log={log} />
              ))}
            </div>
            <div className="w-0 h-[90%] ml-12 border-2 "></div>
            <div className="w-[45%] h-[100%] flex items-center">
              <form className="flex flex-col gap-4 w-[76%] mx-auto justify-center h-auto my-auto">
                <input
                  className="font-navbar text-2xl font-semibold border-b border-slate-300 focus:outline-none focus:border-black"
                  type="text"
                  placeholder="Enter new event"
                  value={newEvent}
                  onChange={(e) => setNewEvent(e.target.value)}
                  required
                />
                <textarea
                  className="font-navbar h-14 text-lg font-light border-b border-slate-300 focus:outline-none focus:border-black resize-none"
                  placeholder="Enter event details"
                  value={newDetails}
                  onChange={(e) => setNewDetails(e.target.value)}
                  required
                />
                <div className="flex justify-between items-center">
                  <DatePicker
                    className="border-2 p-2 w-36 text-center rounded-xl focus:outline-none focus:border-black"
                    selected={newDate}
                    onChange={(date) => setNewDate(date)}
                    dateFormat={"yyyy-MM-dd"}
                  />
                  <button
                    onClick={(e) => handleAddLog(e)}
                    className={`border-2 border-black w-28 h-10 rounded-full mr-7 font-navbar text-lg hover:bg-black hover:text-white duration-200`}
                  >
                    Enter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}