

import Gettingstarted from '@/app/ui/section3/gettingstarted'



const Mainlayout = () => {


    const mockcoinsRound1 = [
        { name: 'Coin A', liquidity: '$1,000,000', status: 'active' },
        { name: 'Coin B', liquidity: '$800,000', status: 'active' },
        { name: 'Coin A', liquidity: '$1,000,000', status: 'active' },
        { name: 'Coin B', liquidity: '$800,000', status: 'active' },
        { name: 'Coin A', liquidity: '$1,000,000', status: 'active' },
        { name: 'Coin B', liquidity: '$800,000', status: 'active' },
        { name: 'Coin A', liquidity: '$1,000,000', status: 'active' },
        { name: 'Coin B', liquidity: '$800,000', status: 'active' },
        // Add more mock data as needed
      ];
      

  const mockcoinsRound2 = [
    { name: 'Coin A', liquidity: '$1,000,000', status: 'active' },

    // Add more mock data as needed
  ];
  

  const mockcoinsRound3 = [
  

    // Add more mock data as needed
  ];
    return (
<>

<div className='container items-center justify-center bg-black mx-auto'>


<div class="flex flex-col md:flex-row items-center justify-center">
  <div class="bg-black-500 p-4 flex-1 my-1"><Gettingstarted coins={mockcoinsRound1}/></div>
  <div class="bg-black-500  p-4 flex-1"><Gettingstarted coins={mockcoinsRound2}/></div>
  <div class="bg-black-500 p-4 flex-1"><Gettingstarted coins={mockcoinsRound3}/></div>
  
</div>






</div>




</>
);
}







export default Mainlayout;
