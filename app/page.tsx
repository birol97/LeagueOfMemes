import Image from 'next/image';
import TournamentBracket from '@/app/ui/tournament/tournament_bracket';
import AcmeLogo from '@/app/ui/acme-logo'; // Assuming this is a React component for your 
import Head from 'next/head';
import React  from 'react';
import Countdown from '@/app/ui/tournament/countdown'

export default function Page() {
  
  return (
  
    <div className="flex flex-col min-h-screen bg-gray-800">
    {/* Main Content */}
    <section id="section2" className="relative min-h-screen flex justify-center items-center">
      {/* Background Image */}
      <Image src="/background.webp" alt="Background" layout="fill" objectFit="cover" quality={100} className="z-0" />
  
      {/* Navigation Buttons (and logo) Container with Wrap */}
      <div className="absolute top-4 z-10 flex flex-wrap justify-center gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <AcmeLogo />
        </div>
        
        {/* Navigation Buttons */}
        <a href="#section4" className="bg-custom-blue text-white rounded-full shadow font-bold leading-tight inline-block no-underline hover:bg-blue-800 transition-colors duration-300 text-lg w-32 h-12 flex items-center justify-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>Section 4</a>
        <a href="#section4" className="bg-custom-blue text-white rounded-full shadow font-bold leading-tight inline-block no-underline hover:bg-blue-800 transition-colors duration-300 text-lg w-32 h-12 flex items-center justify-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>Section 4</a>
        <a href="#section4" className="bg-custom-blue text-white rounded-full shadow font-bold leading-tight inline-block no-underline hover:bg-blue-800 transition-colors duration-300 text-lg w-32 h-12 flex items-center justify-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>Section 4</a>
        <a href="#section4" className="bg-custom-blue text-white rounded-full shadow font-bold leading-tight inline-block no-underline hover:bg-blue-800 transition-colors duration-300 text-lg w-32 h-12 flex items-center justify-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>Section 4</a>
        
        {/* Last Navigation Button Centered */}
        <div className="w-full flex justify-center">
          <a href="#section4" className="bg-custom-blue text-white rounded-md shadow font-bold leading-tight inline-block no-underline hover:bg-blue-800 transition-colors duration-300 text-lg w-32 h-12 flex items-center justify-center" style={{ fontFamily: "'Permanent Marker', cursive" }}>Section 4</a>
        </div>
      </div>
    </section>


      {/* Additional Sections */}
      <section id="section3" className="min-h-screen flex justify-center items-center bg-gray-300">
        Section 3 Content
      </section>

      <section id="section4" className="min-h-screen flex justify-center items-center bg-gray-400">
        Section 4 Content
      </section>

      {/* Tournament Bracket and Images Section */}
      <div className="flex flex-col md:flex-row flex-1">
        <section id="tournamentBracket" className="w-full md:w-1/2 flex justify-center items-center p-4">
          <TournamentBracket />
        </section>

        <section id="images" className="bg-gray-200 flex justify-center items-center p-4">
          <Image src="/path-to-your-image.jpg" alt="Image Description" width={500} height={300} layout="intrinsic" />
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        Footer Content
      </footer>
    </div>
  );
}
