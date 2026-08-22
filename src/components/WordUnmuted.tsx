import { FaFacebookF,FaTiktok} from "react-icons/fa6";
import WordImg from '../assets/images/apsword.png';

const WordUnmuted = () => {
  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid w-full max-w-375 grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
        <div className="relative overflow-hidden">
          <img
            src={WordImg}
            alt="Word Unmuted Podcast"
            className="h-auto w-full object-cover"
          />
        </div>
        <div className="max-w-162.5">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#b27a48]" />
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.22em] text-[#b27a48]">
              Word Unmuted Live Podcast
            </p>
          </div>
          <h2 className="font-sans text-[42px] font-bold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-[50px] lg:text-[58px]">
            Word Unmuted.
          </h2>

          <h3 className="mt-2 font-sans text-[28px] font-semibold leading-tight text-[#b27a48] sm:text-[34px]">
            Raw. Real. Revelatory.
          </h3>
          <p className="mt-7 max-w-155 font-sans text-[16px] leading-[1.9] text-[#746b65] sm:text-[17px]">
            Join Dr Cloudio live for <strong className="font-semibold text-[#302a26]">
              Word Unmuted
            </strong>
            , an unfiltered conversation about faith, purpose, and the
            Kingdom of God. No scripts, no rehearsals — just the Spirit
            speaking through a yielded vessel in real time.
          </p>
          <div className="mt-8 border-l-2 border-[#b27a48] pl-5">
            <p className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-[#b27a48]">
              Live Schedule
            </p>
            <p className="mt-3 font-sans text-[16px] font-medium text-[#3b3530]">
              Facebook & TikTok
            </p>
            <p className="mt-1 font-sans text-[15px] leading-7 text-[#746b65]">
              Every Tuesday & Thursday · 8:00 PM – 10:30 PM (GMT+0)
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://web.facebook.com/mysteryembassy/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-[#e5ddd5] px-5 py-3.5 transition-all duration-300 hover:border-[#b27a48] hover:bg-[#b27a48] hover:text-white">
              <FaFacebookF className="text-[16px] text-[#1877F2] transition-colors group-hover:text-white" />
              <span className="font-sans text-[13px] font-bold uppercase tracking-[0.08em]">
                Facebook Live
              </span>
            </a>
            <a
              href="https://www.tiktok.com/@dr.cloudio"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-[#e5ddd5] px-5 py-3.5 transition-all duration-300 hover:border-[#b27a48] hover:bg-[#b27a48] hover:text-white">
              <FaTiktok className="text-[16px] text-black transition-colors group-hover:text-white" />
              <span className="font-sans text-[13px] font-bold uppercase tracking-[0.08em]">
                TikTok Live
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WordUnmuted;