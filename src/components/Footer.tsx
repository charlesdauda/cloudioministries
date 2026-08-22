import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaTiktok,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1c130d] text-white">
      <div className="mx-auto w-full max-w-377.5 px-6 pt-25 pb-8 sm:px-10 lg:px-16.25 lg:pt-30 lg:pb-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-20">
          <div>
            <h2 className="max-w-125 font-sans text-[42px] font-bold leading-[1.05] tracking-[-0.035em] text-[#f8f5f2] sm:text-[50px]
                lg:text-[56px]">
              Teaching Truth
              <br />
              Restoring Destinies.
            </h2>

            <p className="mt-7 max-w-125 font-sans text-[16px] leading-[1.8] text-[#b8aaa1] sm:text-[17px]">
              A global apostolic ministry committed to
              <br className="hidden sm:block" />
              revealing Kingdom truths, transforming
              <br className="hidden sm:block" />
              destinies, and raising spiritual leaders for the nations.
            </p>
          </div>

          <div>
            <h3 className="mb-7 font-sans text-[20px] font-bold text-white">
              Church
            </h3>
            <p className="max-w-65 font-sans text-[16px] leading-[1.8] text-[#b8aaa1]">
              Mystery Embassy International
              <br />
              Accra, Ghana
            </p>

            <div className="mt-9 flex items-center gap-2.5">
              <a href="https://www.facebook.com/share/1Lnhxva2Pv/?mibextid=wwXIfr" aria-label="Facebook" className=" flex h-14 w-14 items-center justify-center rounded-full border
               border-[#493b33] text-white transition-all duration-300 hover:border-[#cc9c60] hover:bg-[#cc9c60]
                hover:text-white">
                <FaFacebookF className="text-[17px]" />
              </a>

              <a href="https://www.tiktok.com/@dr.cloudio"
                aria-label="X"
                className=" flex h-14 w-14 items-center justify-center rounded-full border border-[#493b33] text-white transition-all duration-300 hover:border-[#cc9c60] hover:bg-[#cc9c60] hover:text-white">
                <FaTiktok className="text-[17px]" />
              </a>
              <a
                href="https://www.instagram.com/pscloudio"
                aria-label="Instagram"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-[#493b33] text-white transition-all duration-300 hover:border-[#cc9c60] hover:bg-[#cc9c60] hover:text-white">
                <FaInstagram className="text-[17px]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-7 font-sans text-[20px] font-bold text-white">Phone
            </h3>
            <a
              href="tel:+233244496968"
              className="mt-6 block font-sans text-[21px] font-bold tracking-tight text-white transition-colors duration-300 hover:text-[#cc9c60]">+233 244 496 968
            </a>
          </div>
        </div>

        <div className="mt-36.25 border-t border-[#493b33]"/>
        <div
          className="flex flex-col gap-5 pt-7 font-sans text-[15px] text-[#c0b5ae] sm:flex-row sm:items-center sm:justify-between">
          <a
            href="https://github.com/charlesdauda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Developed by CodeWithCharles"
            className="inline-flex w-fit items-center gap-2 transition-colors duration-300  hover:text-[#cc9c60] ">
            <span>
              Developed by
            </span>
            <span className="font-semibold text-white transition-colors duration-300 hover:text-[#cc9c60]" >
              CodeWithCharles
            </span>
            <FaGithub className="text-[16px]" />
          </a>
          <p className="m-0 text-[15px] text-[#c0b5ae]">
            CloudioMinistries © 2026. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;