import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
]
const gettingstarted = () => {
    return (
<section className="py-6 bg-white">
  <div className="overflow-x-scroll scrollbar-hide w-full max-w-screen-md mx-auto border border-blue-900 whitespace-nowrap bg-blue-200">
  <FontAwesomeIcon icon={faArrowLeft} />
<FontAwesomeIcon icon={faArrowRight} />


    Your scrollable content here Your scrollable content here Your scrollable content here Your scrollable content here Your scrollable content here Your scrollable content herevvv Your scrollable content here Your scrollable content here Your scrollable content here Your scrollable content herevvv
  </div>
</section>


    );
  };
  
  export default  gettingstarted;
    