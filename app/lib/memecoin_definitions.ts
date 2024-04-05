import internal from "stream";

// types.ts
export type Memecoin = {
    id: number;
    memecoin: string;
    MarketCap: number;
    Price: number;
    tier: 'tier-1' | 'tier-2' | 'tier-3'| 'tier-4';
    liquidity: number;
    address: string;
    logo: string; // URL to the logo image
  };
  
  export type Match = {
    id: number;
    memecoinA: Memecoin;
    memecoinB: Memecoin;
  };
  
   export type Wallet = {
   id: number;
   connectedcoinid : number; 
   amount_liqudity : number;
   public_address : number;
   }