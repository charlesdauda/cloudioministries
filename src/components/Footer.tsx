import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTiktok,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1c130d] text-white">
      <div className="mx-auto w-full max-w-377.5 px-6 pt-18 pb-8 sm:px-10 sm:pt-22 lg:px-16.25 lg:pt-26 lg:pb-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr] lg:gap-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="max-w-125 font-sans text-[40px] font-bold leading-[1.05] tracking-[-0.035em] text-[#f8f5f2] sm:text-[48px] lg:text-[54px]">
              Teaching Truth
              <br />
              Restoring Destinies.
            </h2>

            <p className="mt-6 max-w-125 font-sans text-[15px] leading-[1.8] text-[#b8aaa1] sm:text-[16px]">
              A global apostolic ministry committed to
              <br className="hidden sm:block" />
              revealing Kingdom truths, transforming
              <br className="hidden sm:block" />
              destinies, and raising spiritual leaders for the nations.
            </p>
          </div>

          <div className="sm:pt-1">
            <h3 className="mb-5 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#cc9c60]">
              Church
            </h3>
            <p className="max-w-65 font-sans text-[15px] leading-[1.8] text-[#b8aaa1] sm:text-[16px]">
              Mystery Embassy International
              <br />
              Accra, Ghana
            </p>

            <div className="mt-7 flex items-center gap-2">
              <a href="https://www.facebook.com/share/1Lnhxva2Pv/?mibextid=wwXIfr" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#493b33] text-white transition-all duration-300 hover:border-[#cc9c60] hover:bg-[#cc9c60] hover:text-white">
                <FaFacebookF className="text-[17px]" />
              </a>

              <a href="https://www.tiktok.com/@dr.cloudio"
                aria-label="TikTok"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#493b33] text-white transition-all duration-300 hover:border-[#cc9c60] hover:bg-[#cc9c60] hover:text-white">
                <FaTiktok className="text-[17px]" />
              </a>
              <a
                href="https://www.instagram.com/pscloudio"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#493b33] text-white transition-all duration-300 hover:border-[#cc9c60] hover:bg-[#cc9c60] hover:text-white">
                <FaInstagram className="text-[17px]" />
              </a>
            </div>
          </div>

          <div className="pl-5 sm:pt-1 lg:pl-7">
            <h3 className="mb-5 font-sans text-[12px] font-bold uppercase tracking-[0.18em] text-[#cc9c60]">Phone</h3>
            <a
              href="tel:+233244496968"
              className="block font-sans text-[20px] font-bold tracking-tight text-white transition-colors duration-300 hover:text-[#cc9c60] sm:text-[21px]"
            >
              +233 244 496 968
            </a>
          </div>
        </div>

        <div className="mt-18 border-t border-[#493b33] sm:mt-22" />
        <div
          className="flex flex-col items-center gap-4 pt-6 text-center font-sans text-[13px] text-[#c0b5ae] sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:text-left sm:text-[14px]">
          <a
            href="https://github.com/charlesdauda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developed by CodeWithCharles"
            className="inline-flex w-fit items-center justify-center gap-2 transition-colors duration-300 hover:text-[#cc9c60]">
            <span>
              Developed by
            </span>
            <span className="font-semibold text-white transition-colors duration-300 hover:text-[#cc9c60]">
              CodeWithCharles
            </span>
            <FaGithub className="text-[16px]" />
          </a>
          <p className="m-0 text-[13px] text-[#c0b5ae] sm:text-[14px]">
            CloudioMinistries © 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;