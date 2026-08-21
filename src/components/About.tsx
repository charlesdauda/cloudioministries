import aboutImage from '../assets/images/apsabout.png';
import BibleIllustration from './BibleIllustration';
const About = () => {
  return (
    <section className="relative overflow-hidden bg-white mt-30">
      <div className="mx-auto w-full max-w-367.5 px-6 pt-8.75 lg:px-0 lg:pt-8.75">
        <div className="grid grid-cols-1 lg:grid-cols-[585px_1fr] lg:gap-72.5">
            {/*Left Image*/}
          <div className="relative ml-0 mt-15 h-150 sm:h-155 lg:ml-8.75 lg:mt-15 lg:h-162.5 lg:w-146.25">
            <div className="h-full w-full overflow-hidden">
              <img src={aboutImage} alt="Christian studying the Holy Bible"className="block h-full w-full object-cover object-center"/>
            </div>
            {/*Overlap card*/}
            <div className=" absolute bottom-0 -right-26.25 z-10 flex h-47.5 w-87.5 items-center bg-[#1c130d] px-10.5 sm:h-50
                sm:w-90 sm:px-11.25 lg:h-51.25 lg:w-92.5 lg:px-12">
              <h3 className="m-10 font-sans text-[27px] font-bold leading-[1.17] tracking-tight text-white sm:text-[29px] lg:text-[32px]">
                Praying and
                <br />
                Learning His
                <br />
                Holy Word
              </h3>
            </div>
          </div>

          <div className="relative z-10 py-20 lg:pt-31.5 lg:pb-0">
            <span className="mb-6 block font-sans text-[14px] font-bold tracking-[0.12em] text-[#303030] lg:text-[16px]">
             APOSTLE DR CLOUDIO
            </span>
            <h2 className="font-sans text-[40px] font-bold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-[46px] lg:text-[54px]"
            >The Man Behind
              <br />
              The Mandate.
            </h2>
            {/* INTRO */}
            <p className=" mt-8 max-w-162.5 font-sans text-[19px] font-normal leading-[1.45] text-[#876f5f] sm:text-[21px] lg:text-[24px]" >
              Apostle Dr. Cloudio is a renowned minister of the Gospel of the Kingdom of God, 
              <br className="hidden lg:block" />
              a Revelator and a Theologian.
            </p>
            {/* DESCRIPTION */}
            <div className="mt-10 flex max-w-170">
              <div className="w-0.5 shrink-0 bg-[#cc9c60]" />
              <p className="pl-7 font-sans text-[16px] font-normal leading-[1.75]text-[#876f5f] sm:text-[17px] lg:text-[19px]">
                He is the human founder and General Overseer 
              of the Mystery Embassy International.
              His mission on earth is to restore destinies as he carries the grace 
              and the gift to exegete the Word. He is an Apostolic Priest and well vested with the 
              Power of the Holy Spirit, with the ability to flow in all dimensions 
              of the five-fold ministries.
              </p>
            </div>
            {/* BUTTON */}
            <a href="#" className="mt-13 inline-flex h-15.75 w-56.75 items-center justify-center bg-[#cc9c60] font-sans text-[14px] 
            font-bold tracking-widest text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0b378] " >
              ABOUT US
            </a>

            {/* BIBLE */}
            <BibleIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;