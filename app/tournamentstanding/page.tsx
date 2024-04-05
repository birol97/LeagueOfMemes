import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import TournamentBracket from '@/app/ui/tournament/tournament_bracket';

import {
    fetchRevenue,
    fetchLatestInvoices,
    fetchCardData,
  } from '@/app/lib/data';
export default async function Page() {
    return (
        <div className="flex flex-col h-screen">
          {/* Header */}
          <header className="bg-gray-800 text-white p-4">Header</header>
          
          {/* Main Content */}
          <main className="flex flex-grow">
            {/* Tournament Bracket Section */}
            <section className="w-full md:w-1/2 flex-none">
              <TournamentBracket />
            </section>
            
            {/* Tournament Information Section */}
            <section className="w-full md:w-1/2 flex-none bg-gray-200">
              Tournament Related Information
            </section>
          </main>
          
          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4">Footer</footer>
        </div>
      );
    }