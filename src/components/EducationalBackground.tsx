import { Check } from "lucide-react";
import educationImage from "../assets/images/apsedu.png";

const EducationalBackground = () => {
  const education = [
    "Foundational training in pastoral care, homiletics, and church leadership that laid the groundwork for a life of full-time ministry and apostolic service.",
    "Doctorate degree in Apologetics, with a focus on defending and communicating the truth of the Christian faith.",
    "Extensive theological training developed to equip others with biblical knowledge, wisdom, and understanding.",
    "Years of continuous study, teaching, and ministry experience shaping a deeper understanding of God's Word.",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f3e8d8] mt-30">
      <div className="mx-auto w-full max-w-375 px-6 py-20 sm:px-10 lg:px-16.25 lg:py-26.25">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-25">
          <div className="w-full overflow-hidden">
            <img
              src={educationImage}
              alt="Educational background"
              className="block h-75 w-full object-cover sm:h-95 lg:h-130"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-6 font-sans text-[14px] font-semibold uppercase tracking-[0.12em] text-[#292929] sm:text-[15px]">
              Educational Background
            </span>
            <h2 className="max-w-150 font-sans text-[42px] font-bold leading-[1.08] tracking-[-0.04em] text-[#202020]
                sm:text-[52px] lg:text-[58px]">
              Rooted in the Word, Grounded in Truth.
            </h2>

            <div className="mt-9 space-y-5 sm:mt-10">
              {education.map((item, index) => (
                <div key={index} className="flex items-start gap-4 font-sans text-[16px] leading-[1.8] text-[#202020] sm:text-[17px]">
                  <span className="mt-1.25 flex shrink-0 items-center justify-center text-[#cc9c60]">
                    <Check size={20} strokeWidth={2.5}/>
                  </span>
                  <p className="m-0">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationalBackground;