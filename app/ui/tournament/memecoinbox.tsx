import React from 'react';

export type Memecoin = {
  id: number;
  memecoin: string;
  liquidity: number;
  logo: string; // URL to the logo image
};

type MemecoinBoxProps = {
  memecoin: Memecoin;
};

const MemecoinBox: React.FC<MemecoinBoxProps> = ({ memecoin }) => {
  return (
    <div className="group relative w-40 h-12 bg-gray-800 rounded-lg overflow-hidden p-2 flex items-center justify-center">
    <img src={memecoin.logo} alt={`${memecoin.memecoin} logo`} className="w-10 h-10" />
    <div className="absolute flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:absolute group-hover:w-full group-hover:h-full top-0 left-0 bg-gray-900 bg-opacity-90 p-2 transition-opacity duration-300 ease-in-out">
      <h3 className="text-sm font-semibold text-white">{memecoin.memecoin}</h3>
      <p className="text-xs text-gray-400">Liquidity: ${memecoin.liquidity.toLocaleString()}</p>
    </div>
  </div>

  );
};

export default MemecoinBox;
