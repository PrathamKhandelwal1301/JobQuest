import React, { useState, useEffect } from "react";

const PerformanceMeter = ({ score }) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    let animationFrameId;
    let startTime = null;
    const duration = 1200;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const currentScore = Math.round(easedProgress * score);
      setAnimatedScore(currentScore);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [score]);

  const getScoreColor = () => {
    if (score < 30) return "from-red-400 to-red-600";
    if (score < 60) return "from-yellow-400 to-yellow-600";
    return "from-green-400 to-green-600";
  };

  const getScoreRing = () => {
    const circumference = 2 * Math.PI * 54; // Reduced radius to prevent cutting
    const progress = (animatedScore / 100) * circumference;
    return circumference - progress;
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-white w-[30vw] -z-0">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Background Circle */}
        <svg className="absolute w-full h-full" viewBox="0 0 120 120">
          <circle 
            cx="60" 
            cy="60" 
            r="54" 
            fill="none" 
            className="text-gray-200 stroke-current"
            strokeWidth="10"
          />
        </svg>

        {/* Progress Circle */}
        <svg className="absolute w-full h-full rotate-[-90deg]" viewBox="0 0 120 120">
          <circle 
            cx="60" 
            cy="60" 
            r="54" 
            fill="none"
            strokeLinecap="round"
            className={`stroke-current bg-gradient-to-br ${getScoreColor()} transition-all duration-700`}
            strokeWidth="10"
            strokeDasharray="339.292" // 2 * π * 54
            strokeDashoffset={getScoreRing()}
          />
        </svg>

        {/* Score Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`text-4xl font-bold ${
            score < 30 
              ? "text-red-500" 
              : score < 60 
                ? "text-yellow-500" 
                : "text-green-500"
          }`}>
            {animatedScore}
            <span className="text-2xl align-super">%</span>
          </div>
        </div>
      </div>

      <div className="text-sm text-gray-500 font-medium text-center">
        Performance Score
      </div>
    </div>
  );
};

export default PerformanceMeter;