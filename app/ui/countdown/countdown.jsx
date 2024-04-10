'use client'
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, logo }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="flex justify-end items-center p-5 bg-gray-800 text-white">
    {logo && <img src={logo} alt="Logo" className="mr-4 w-24" />}
    <div className="flex space-x-3">
      {Object.keys(timeLeft).map((interval) => (
        <div key={interval} className="flex flex-col items-center">
          <span className="text-lg font-semibold">{timeLeft[interval]}</span>
          <span className="text-xs uppercase">{interval}</span>
        </div>
      ))}
    </div>
  </div>
  );
};

export default CountdownTimer;