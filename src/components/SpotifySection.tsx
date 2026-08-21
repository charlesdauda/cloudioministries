import {
  FaSpotify,
  FaHeadphones,
  FaBroadcastTower,
} from 'react-icons/fa';
import { BookOpen } from 'lucide-react';

import spotifyImage from '../assets/images/apshero3.png';

const SpotifySection = () => {
  return (
    <section className="mt-30 w-full bg-[#080909]">
      <div className="grid min-h-150 w-full grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-105 overflow-hidden lg:min-h-150">
          <img
            src={spotifyImage}
            alt="Dr. Cloudio ministering"
            className="absolute inset-0 h-full w-full object-cover object-center"/>
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-r from-black/10 via-transparent to-black/60"/>
        </div>
        <div className="relative flex flex-col justify-center bg-[#080909] px-8 py-16 sm:px-12 lg:px-16.25 xl:px-20" >
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1DB954]" >
              <FaSpotify className="text-[16px] text-black" />
            </div>
            <span className="font-sans text-[12px] font-bold uppercase tracking-[0.25em] text-[#d99b00] sm:text-[13px]">
              Now Streaming on Spotify
            </span>

          </div>

          <h2 className="max-w-162.5 font-sans text-[42px] font-bold leading-[1.08] tracking-[-0.035em] text-white sm:text-[50px]
              lg:text-[52px] xl:text-[56px]">
            Kingdom Truth.
            <br />
            <span className="font-sans font-bold text-[#d99b00]">
              Everywhere
            </span>{' '}
            You Are.
          </h2>
          <p className="mt-7 max-w-152.5 font-sans text-[16px] font-normal leading-[1.8] text-[#b8b8b8] sm:text-[17px]" >
            Powerful teachings. Revealing messages.
            <br />
            Transforming lives available anytime, anywhere.
          </p>
          <div className="mt-7 h-0.5 w-10.5 bg-[#d99b00]" />
          <p className="mt-7 font-sans text-[14px] text-[#999999] sm:text-[15px]">
            Search on Spotify:{' '}
            <span className="font-semibold text-[#d99b00]">
              Dr. Cloudio (PhD)
            </span>
          </p>
          <a href="#" 
          className="mt-8 inline-flex h-13 w-fit items-center gap-3 bg-[#1DB954] px-7 font-sans text-[13px] font-bold
              uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20c761]
              hover:shadow-[0_10px_30px_rgba(29,185,84,0.2)]">
            <FaSpotify className="text-[20px]" />
            Listen on Spotify
          </a>

          <div className="mt-10 grid grid-cols-1 border-t border-[#252525] pt-8 sm:grid-cols-3 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#4a390f] bg-[#0d0e0e]">
                <FaHeadphones className="text-[16px] text-[#d99b00]" />
              </div>
              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#a9a9a9]">
                Listen Anytime
              </span>
            </div>

            <div className="mt-5 flex items-center gap-3 sm:mt-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#4a390f] bg-[#0d0e0e]">
                <FaBroadcastTower className="text-[16px] text-[#d99b00]" />
              </div>
              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#a9a9a9]">
                Be Inspired
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3 sm:mt-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#4a390f] bg-[#0d0e0e]">
                <BookOpen
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#d99b00]"
                />
              </div>
              <span className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] text-[#a9a9a9]">
                Grow in Truth
              </span>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotifySection;