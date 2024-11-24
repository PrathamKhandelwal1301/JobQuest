import React from 'react';
import { format } from 'date-fns';
import { AnimatePresence, motion } from 'framer-motion';

const getSeverityColor = (severity) => {
  switch (severity) {
    case 'High':
      return 'bg-red-500';
    case 'Medium':
      return 'bg-yellow-500';
    case 'Low':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

export function ImportantCard({ event, index }) {
  return (
    <AnimatePresence>
    <motion.div initial = {{opacity : 0}} animate = {{opacity : 1}} transition={{delay :index * 0.5}} className=" pl-5 pr-5 w-[100%] border-b border-gray-200 last:border-b-0">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <h3 className="text-lg font-semibold text-gray-800">{event.event}</h3>
            <p className="text-sm text-gray-600">{event.company}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center text-sm text-gray-500 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {format(new Date(event.date), 'MMM dd, yyyy')}
            </div>
            <span className={`${getSeverityColor(event.severity)} text-white text-xs font-semibold px-2 py-1 rounded`}>
              {event.severity}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default ImportantCard