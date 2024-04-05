import React from 'react';
import MemecoinBox from '@/app/ui/tournament/memecoinbox';
import './TournamentBracket.css';
import { lusitana } from '@/app/ui/fonts';
export type Memecoin = {
  id: number;
  memecoin: string;
  liquidity: number;
  logo: string;
};

const memecoins: Memecoin[] = [
  { id: 1, memecoin: 'DogeCoin', liquidity: 1000000, logo: "/logo.png" },
  { id: 2, memecoin: 'ShibaInu', liquidity: 800000, logo: "/logo.png" },
  { id: 3, memecoin: 'SafeMoon', liquidity: 1200000, logo: "/logo.png" },
  { id: 4, memecoin: 'ElonGate', liquidity: 600000, logo: "/logo.png" },
  { id: 5, memecoin: 'PepeCoin', liquidity: 500000, logo: "/logo.png" },
  { id: 6, memecoin: 'Garlicoin', liquidity: 300000, logo: "/logo.png" },
  { id: 7, memecoin: 'Banano', liquidity: 400000, logo: "/logo.png" },
  { id: 8, memecoin: 'HogeFinance', liquidity: 700000, logo: "/logo.png" }
];

const TournamentBracket: React.FC = () => {
  const pairedMemecoins = [];
  for (let i = 0; i < memecoins.length; i += 2) {
    pairedMemecoins.push([memecoins[i], memecoins[i + 1]]);
  }

  // Function to determine the winner based on liquidity
  const determineWinner = (coin1: Memecoin, coin2: Memecoin) => {
    return coin1.liquidity > coin2.liquidity ? coin1 : coin2;
  };

  // Determine winners of the first round
  const firstRoundWinners: Memecoin[] = [];
  for (let i = 0; i < 4; i++) {
    const winner = determineWinner(pairedMemecoins[i][0], pairedMemecoins[i][1]);
    firstRoundWinners.push(winner);
    
  }
  console.log(firstRoundWinners)
  console.log("=---")

  const pairedMemecoins2 = [];
  pairedMemecoins2.push([firstRoundWinners[0],firstRoundWinners[1]])
  pairedMemecoins2.push([firstRoundWinners[2],firstRoundWinners[3]])
  const SecondRoundWinners: Memecoin[] = [];
  for (let i = 0; i < 2; i++) {
    const winner = determineWinner(pairedMemecoins[i][0], pairedMemecoins[i][1]);
    SecondRoundWinners.push(winner);
  }
  const pairedMemecoins3 = [];
  pairedMemecoins3.push([SecondRoundWinners[0],SecondRoundWinners[1]])
  // Determine winners of the second round
  const thirdRoundWinners: Memecoin[] = [];
  
    const winner1 = determineWinner(firstRoundWinners[0], firstRoundWinners[1]);
  
    thirdRoundWinners.push(winner1)
  const winner = [];
  // Determine winner of the final round
  
  
  return (
    <div className="m-2 p-4">
      <div className="mb-4 grid grid-flow-col grid-cols-3 items-center border-0 border-b-2 border-gray-200 text-center text-lg font-bold uppercase">
        <div><h3  className={`${lusitana.className}`}></h3>Round 1</div>
        <div><h3  className={`${lusitana.className}`}></h3>Round 2</div>
        <div><h3  className={`${lusitana.className}`}></h3>Final </div>
      </div>
      <div className="grid grid-flow-col grid-cols-3 items-center">
        {/* Quarterfinals */}
        <div className="grid grid-flow-row grid-rows-4 gap-4">
          {pairedMemecoins.map((pair, index) => (
            <div key={index} className="mb-4">
              {pair.map((coin, idx) => (
                <MemecoinBox key={idx} memecoin={coin} />
              ))}
            </div>
          ))}
        </div>
        {/* Semifinals */}
        <div className="grid grid-flow-row grid-rows-2 gap-4">
          {pairedMemecoins2.map((pair, index) => (
            <div key={index} className="mb-4">
              {pair.map((coin, idx) => (
                <MemecoinBox key={idx} memecoin={coin} />
              ))}
            </div>
          ))}
        </div>
        {/* Finals */}
        <div className="grid grid-flow-row grid-rows-1 gap-4">
          {pairedMemecoins3.map((pair, index) => (
            <div key={index} className="mb-4">
              {pair.map((coin, idx) => (
                <MemecoinBox key={idx} memecoin={coin} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TournamentBracket;

