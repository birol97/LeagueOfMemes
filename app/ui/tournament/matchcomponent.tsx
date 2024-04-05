// components/MatchComponent.tsx
import React from 'react';
import { Memecoin,Match } from '@/app/lib/memecoin_definitions';

interface MatchProps {
  match: Match;
}

const MatchComponent: React.FC<MatchProps> = ({ match }) => {
  // Hover detail component for each memecoin
  const MemecoinDetail: React.FC<{ memecoin: Memecoin }> = ({ memecoin }) => (
    <div className="absolute bg-white p-4 shadow-lg rounded-md hidden group-hover:block">
      <img src={memecoin.logo} alt="logo" className="w-16 h-16" />
      <p>{memecoin.memecoin} - {memecoin.tier}</p>
      <p>Market Cap: ${memecoin.MarketCap}</p>
      <p>Price: ${memecoin.Price}</p>
      <p>Liquidity: {memecoin.liquidity}</p>
      <p>Address: {memecoin.address}</p>
    </div>
  );

  return (
    <div className="flex justify-between items-center p-4">
      <div className="relative group">
        <img src={match.memecoinA.logo} alt={`${match.memecoinA.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinA.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinA} />
      </div>
      <span>vs</span>
      <div className="relative group">
        <img src={match.memecoinB.logo} alt={`${match.memecoinB.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinB.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinB} />
      </div>
      <div className="relative group">
        <img src={match.memecoinA.logo} alt={`${match.memecoinA.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinA.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinA} />
      </div>
      <span>vs</span>
      <div className="relative group">
        <img src={match.memecoinB.logo} alt={`${match.memecoinB.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinB.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinB} />
      </div>
      <div className="relative group">
        <img src={match.memecoinA.logo} alt={`${match.memecoinA.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinA.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinA} />
      </div>
      <span>vs</span>
      <div className="relative group">
        <img src={match.memecoinB.logo} alt={`${match.memecoinB.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinB.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinB} />
      </div>
      <div className="relative group">
        <img src={match.memecoinA.logo} alt={`${match.memecoinA.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinA.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinA} />
      </div>
      <span>vs</span>
      <div className="relative group">
        <img src={match.memecoinB.logo} alt={`${match.memecoinB.memecoin} logo`} className="w-12 h-12 mr-2" />
        <span>{match.memecoinB.liquidity} pts</span>
        <MemecoinDetail memecoin={match.memecoinB} />
      </div>
    </div>
  );
};

export default MatchComponent;
