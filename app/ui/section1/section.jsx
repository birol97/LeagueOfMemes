'use client'
import Image from 'next/image';
import TournamentBracket from '@/app/ui/tournament/tournament_bracket';
import AcmeLogo from '@/app/ui/acme-logo';
import Head from 'next/head';
import React from 'react';
import Countdown from '@/app/ui/tournament/countdown';
import Button from './Button'; 
export default function Section1() {
  return (
   <>
   
   <div className="w-full h-[30vh] flex justify-between">
      <div className="flex-1 p-4">One of three columns</div>
      <div className="flex-1 p-4">

      <Button variant="primary" onClick={() => alert('Primary clicked!')}>
        Primary Button
      </Button>
      <Button variant="secondary" onClick={() => alert('Secondary clicked!')}>
        Secondary Button
      </Button>
      <Button variant="danger" onClick={() => alert('Danger clicked!')}>
        Danger Button
      </Button>

      </div>
      <div className="flex-1 p-4">One of three columns</div>
    </div>
   </>



  );
}