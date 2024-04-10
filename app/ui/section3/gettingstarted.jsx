'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Timer2 from '@/app/ui/countdown/countdown';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import RoundMatches from '@/app/ui/section3/RoundMatchess'; // Adjust the import path as necessary

const GettingStarted = ({coins}) => {


 
  const [isVisible, setIsVisible] = useState(false);
  const targetDate = `December 31, ${new Date().getFullYear()} 23:59:59`;
   
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-4">
      <div className="px-6 py-4 bg-custom-grey">
        <Timer2 targetDate={targetDate} />
        <div className="flex flex-col font-bold text-xl mb-2 justify-center items-center bg-custom-grey p-4">
  <h1 className="text-xl font-bold text-white">Tournament of this week</h1>
  <h2 className="text-xl font-bold text-custom-green p-2 rounded shadow-lg" style={{
   textShadow: '0 0 20px #a5f3fc88, 0 0 30px #a5f3fc88, 0 0 40px #a5f3fc88'}}>Round 1</h2>
</div>
        <button className="mt-2 bg-black text-white font-bold rounded shadow-lg flex items-center justify-center mx-auto w-3/4 py-4">
          <FontAwesomeIcon icon={faTrophy} size="xs" className="h-4" />
          <span className="ml-2 text-sm"> {coins.length/2} PRIZE PLACES</span>
        </button>
        <div className={`transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'} overflow-hidden`} style={{ height: isVisible ? 'auto' : '0' }}>
          {isVisible && (
            <>
              <RoundMatches coins={coins} />
              <div className="px-6 pt-4 pb-2">
              
              </div>
            </>
          )}
        </div>
      </div>
      {/* Toggle Button */}
      <button 
        onClick={toggleVisibility} 
        className="mt-2 bg-blue-800 text-white font-bold rounded shadow-lg flex items-center justify-center mx-auto py-2 px-4 transition duration-300 ease-in-out transform hover:scale-105 w-full"
      >
        <FontAwesomeIcon icon={faTrophy} size="xs" className="h-4" />
        <span className="ml-2 text-sm">{isVisible ? "Hide Details" : "Show Details"}</span>
      </button>
    </div>
  );
};

export default GettingStarted;