import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { LuPencilLine } from "react-icons/lu";
import AtsClosed from "./AtsClosed";
import AtsOpen from "./AtsOpen";

export default function ApplicationBox({ resume, index, handleDelete, isDelete, handleClick, isOpen, handleEdit, setResumesData, resumesData }) {

  return (
    <AnimatePresence>
      {
        resume.show === 1 &&
        <motion.div
          className={`w-[100%] h-[10vh] flex overflow-x-hidden rounded-lg custom_shadow_2 bg-white mb-5`}
          layout
          style={{
            width: isOpen === index ? "100%" : "",
            height: isOpen === index ? "80%" : "",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ x: 700, opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <AnimatePresence>
            {
              isDelete === index &&
              <motion.div
                key={index}
                className="bg-red-600 opacity-95 flex items-center justify-center"
                initial={{ width: "0%" }}
                animate={{ width: "7%" }}
                exit={{ width: "0%" }}
                transition={{ duration: 0.5 }}
              >
                <FaCheck size={23} color="white" onClick={() => handleDelete(index)} />
              </motion.div>
            }
          </AnimatePresence>
          {isOpen !== index &&
            <AtsClosed
              index={index}
              resume={resume}
              handleDelete={handleDelete}
              isDelete={isDelete}
              handleClick={handleClick}
              handleEdit={handleEdit}
              isOpen={isOpen}
            />}
          {isOpen === index &&
            <AtsOpen
              index={index}
              resume={resume}
              handleDelete={handleDelete}
              isDelete={isDelete}
              handleClick={handleClick}
              handleEdit={handleEdit}
              isOpen={isOpen}
              setResumesData={setResumesData}
              resumesData={resumesData}
            />
          }
        </motion.div>
      }
    </AnimatePresence>
  );
}