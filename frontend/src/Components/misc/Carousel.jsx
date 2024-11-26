import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle, Search, Bell } from "lucide-react";

const carouselData = [
  {
    id: 1,
    title: "Track Your Applications",
    description: "Effortlessly monitor the status of all your job applications in one place.",
    icon: <Search className="w-16 h-16 text-blue-500" />,
    background: "bg-blue-50"
  },
  {
    id: 2,
    title: "Real-Time Updates",
    description: "Receive instant notifications about your application progress and interviews.",
    icon: <Bell className="w-16 h-16 text-green-500" />,
    background: "bg-green-50"
  },
  {
    id: 3,
    title: "Simplified Job Tracking",
    description: "Organize, analyze, and optimize your job search with our comprehensive dashboard.",
    icon: <CheckCircle className="w-16 h-16 text-purple-500" />,
    background: "bg-purple-50"
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
  };

  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute w-full h-full flex items-center justify-center"
          >
            <div className={`w-full h-full flex items-center justify-center ${carouselData[currentSlide].background}`}>
              <div className="max-w-4xl w-full px-8 text-center">
                <div className="mb-6 flex justify-center">
                  {carouselData[currentSlide].icon}
                </div>
                <h2 className="text-4xl font-bold mb-4">
                  {carouselData[currentSlide].title}
                </h2>
                <p className="text-gray-600 mb-6 text-xl">
                  {carouselData[currentSlide].description}
                </p>
                <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-8 h-8 text-gray-700" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
        >
          <ChevronRight className="w-8 h-8 text-gray-700" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;