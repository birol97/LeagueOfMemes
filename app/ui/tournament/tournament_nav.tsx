import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';



export default function tournament_nav() {
    return (
        <div className="m-2 p-4">
        <div className="mb-4 grid grid-flow-col grid-cols-3 items-center border-0 border-b-2 border-gray-200 text-center text-base md:text-lg font-bold uppercase">
          <div>Quarterfinals</div>
          <div>Semifinals</div>
          <div>Finals</div>
        </div>
        <div className="grid grid-flow-col grid-cols-3 items-center">
          <div className="grid grid-flow-row grid-rows-3">
            <div className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 1</p>
                <p className="text-right">2</p>
              </div>
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 2</p>
                <p className="text-right">1</p>
              </div>
            </div>
            <div className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 3</p>
                <p className="text-right">2</p>
              </div>
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 4</p>
                <p className="text-right">1</p>
              </div>
            </div>
            <div className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 5</p>
                <p className="text-right">2</p>
              </div>
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 6</p>
                <p className="text-right">1</p>
              </div>
            </div>
            <div className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 7</p>
                <p className="text-right">2</p>
              </div>
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 8</p>
                <p className="text-right">1</p>
              </div>
            </div>
          </div>
          <div className="mx-2 grid h-1/2 grid-flow-row grid-rows-2">
            <div className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 1</p>
                <p className="text-right">2</p>
              </div>
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 3</p>
                <p className="text-right">1</p>
              </div>
            </div>
            <div className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 5</p>
                <p className="text-right">2</p>
              </div>
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 7</p>
                <p className="text-right">0</p>
              </div>
            </div>
          </div>
          <div className="mx-2 grid h-1/4 grid-flow-row grid-rows-1">
            <div className="mb-4 rounded-md bg-gray-200 px-4 py-2 text-gray-900 space-y-2 text-xs md:text-base">
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 1</p>
                <p className="text-right">0</p>
              </div>
              <div className="grid grid-flow-col grid-cols-2">
                <p className="font-semibold">Player 5</p>
                <p className="text-right">2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  