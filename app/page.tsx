import Image from 'next/image';
import TournamentBracket from '@/app/ui/tournament/tournament_bracket';
import AcmeLogo from '@/app/ui/acme-logo'; // Assuming this is a React component for your 
import Head from 'next/head';
import React  from 'react';
import Countdown from '@/app/ui/tournament/countdown'
import Navbar from '@/app/ui/section1/navbar'
import WhatIsLeagueofmemes from'@/app/ui/section2/whatisleagueofmeme'
import Gettingstarted from '@/app/ui/section3/main_layour'
//import Gettingstarted1 from '@/app/ui/section5/tournament'
export default function Page() {
  
  return (
    <>
    <section>

        
        {/* Navbar Content */}
        <div className="relative">
          <Navbar />
        </div>
    </section>


    <section className="relative h-screen">
        <Image
          src="/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </section>

     
   
      <section>
 
<div className='relative'>
<WhatIsLeagueofmemes/>

<Gettingstarted/>
</div>
</section>
<section>

</section>
    </>
  );
}
