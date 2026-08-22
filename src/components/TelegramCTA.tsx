import { FaTelegramPlane } from "react-icons/fa";

const TelegramCTA = () => {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-375 flex-col items-start justify-between gap-10 border border-[#e7ded4] px-8 py-10 sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:px-16 lg:py-14">
        <div className="flex items-start gap-6">
          <div className="flex h-15 w-15 shrink-0 items-center justify-center border border-[#d9e8ef] text-[#229ED9]">
            <FaTelegramPlane className="text-[27px]" />
          </div>

          <div>
            <p className="mb-4 font-sans text-[13px] font-bold uppercase tracking-[0.25em] text-[#c9953d]">
              Telegram Channel
            </p>
            <h2 className="font-sans text-[28px] font-semibold leading-tight tracking-[-0.02em] text-[#202020] sm:text-[32px]">
              Hundreds of Messages
            </h2>
            <p className="mt-2 font-sans text-[20px] font-medium text-[#b27a48] sm:text-[22px]">
              Waiting for You.
            </p>
            <p className="mt-5 max-w-140 font-sans text-[15px] leading-[1.9] text-[#8b817a] sm:text-[16px]">
              A rich archive of audio teachings, prophetic words, and daily
              devotionals from Dr Cloudio available anytime, anywhere.
            </p>
          </div>
        </div>
        <a
            href="https://t.me/MysteryEmbassy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto inline-flex shrink-0 items-center gap-3 bg-[#229ED9] px-7 py-4 font-sans text-[13px] font-bold 
            uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#168ac0] lg:mx-0 lg:px-8">
            <FaTelegramPlane className="text-[16px]" />
            Join Channel
            </a>

      </div>
    </section>
  );
};

export default TelegramCTA;