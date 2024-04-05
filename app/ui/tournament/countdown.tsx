'use client'
import React, { useState, useEffect } from 'react';

export default function Countdown() {

    const [countdown, setCountdown] = useState('');

    // Example start date for the countdown (e.g., December 31, 2024)
    const targetDate = new Date('December 31, 2024 00:00:00').getTime();
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
  
        // Calculating days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        // Output the result in a string format
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  
        // If the count down is over, write some text
        if (distance < 0) {
          clearInterval(interval);
          setCountdown('The tournament has begun!');
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [targetDate]);
  
return (
<>
{countdown}
</>
  );
};
