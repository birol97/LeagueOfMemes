import React from 'react';

const mockcoinsRound1 = [
  { name: 'Coin A', liquidity: '$1,000,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  // Add more mock data as needed
];

const mockcoinsRound2 = [
  { name: 'Coin A', liquidity: '$1,000,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  { name: 'Coin B', liquidity: '$800,000', status: 'active' },
  // Add more mock data as needed
];

const RoundMatches = ({ coins }) => {
  return (
    <div className="overflow-auto h-56">
      {coins.sort((a, b) => parseFloat(b.liquidity.replace(/[\$,]/g, '')) - parseFloat(a.liquidity.replace(/[\$,]/g, ''))).map((coin, index) => (
        <div key={index} className="flex justify-between items-center p-2">
          <div className="flex items-center">
            <div className="mr-2 w-6 h-6 rounded-full bg-green-500"></div>
            <span>{coin.name}</span>
          </div>
          <span>{coin.liquidity}</span>
          <div className={`h-2 w-2 rounded-full ${coin.status === 'active' ? 'bg-green-400' : 'bg-red-400'}`}></div>
        </div>
      ))}
    </div>
  );
};


export default RoundMatches;
