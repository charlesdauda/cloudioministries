import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import ministry1 from '../assets/images/apsc.png';
import ministry2 from '../assets/images/apsprophetic.png';
import ministry3 from '../assets/images/apshealing.png';
import ministry4 from '../assets/images/apsmystical.png';
import ministry5 from '../assets/images/apscounseling.png';

interface MinistryCard {
  image: string;
  title: string;
  description: string;
}

const MINISTRY_CARDS: MinistryCard[] = [
  {
    image: ministry1,
    title: 'Apostolic Mandate',
    description:
      "Grounded in the foundation of the apostles and prophets, Dr Cloudio carries a divine assignment to plant, establish, and govern God's purposes on the earth.",
  },
  {
    image: ministry2,
    title: 'Prophetic Ministry',
    description:
      'Through prophetic revelation and spiritual discernment, Dr Cloudio communicates the heart and mind of God, bringing direction, correction, and clarity to nations.',
  },
  {
    image: ministry3,
    title: 'Healing & Deliverance',
    description:
      'Ministering healing, freedom, and restoration through prayer, faith, and the power of the Holy Spirit.',
  },
  {
    image: ministry4,
    title: 'Mystery Teachings',
    description:
      "With a unique grace for unveiling Kingdom mysteries, Dr Cloudio teaches profound spiritual realities that deepen believers' understanding of God and His purposes.",
  },
  {
    image: ministry5,
    title: 'Counseling & Restoration',
    description:
      'Through wisdom, mentorship, and pastoral counsel, Dr Cloudio guides individuals towards their purpose navigating their footsteps with faith, clarity, and conviction.',
  },
];

const Ministry = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4eadb] py-17.5 sm:py-20 lg:min-h-200 lg:py-22.5">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.16]">
        <svg
          className="h-full w-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M-80 120C80 20 190 60 140 190C90 320-20 260 70 390C160 520 300 400 270 270C240 140 370 80 450 170C530 260 430 350 350 410C270 470 330 610 450 590C570 570 590 430 690 460C790 490 720 650 820 700C920 750 990 630 930 540C870 450 950 330 1060 370C1170 410 1130 540 1230 570C1330 600 1430 500 1370 390C1310 280 1410 190 1530 250C1650 310 1600 100 1740 80"
            stroke="#d7c6ad"
            strokeWidth="3"
          />

          <path
            d="M-100 700C40 610 140 650 120 760C100 870 230 900 310 820C390 740 340 650 430 620C520 590 590 700 550 790C510 880 650 930 740 850C830 770 760 660 850 620C940 580 1030 670 1000 760C970 850 1090 900 1190 830C1290 760 1250 650 1350 620C1450 590 1530 690 1500 790C1470 890 1600 900 1700 820"
            stroke="#d7c6ad"
            strokeWidth="3"
          />

          <path
            d="M500 -80C450 30 540 80 610 30C680 -20 760 20 730 100C700 180 790 230 850 170C910 110 1000 150 970 240C940 330 1050 350 1120 290C1190 230 1270 270 1240 360C1210 450 1320 470 1400 400C1480 330 1570 360 1530 460"
            stroke="#d7c6ad"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-377.5 px-6 lg:px-7.5">
        <div className="mx-auto mb-13.75 max-w-250 text-center lg:mb-14.5">
          <span className="mb-5 block font-sans text-[14px] font-bold tracking-[0.14em] text-[#303030] sm:text-[15px] lg:text-[16px]">
            MINISTRY
          </span>
          <h2 className="mx-auto max-w-225 font-sans text-[39px] font-bold leading-[1.08] tracking-[-0.035em] text-[#202020]sm:text-[48px]
              lg:text-[55px]">
            Discover the Ministry
            <br />
            and Its Mission
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          rewind={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          speed={900}
          spaceBetween={34}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 34,
            },
          }}
          className="w-full"
        >
          {MINISTRY_CARDS.map((card, index) => (
            <SwiperSlide key={`${card.title}-${index}`}>
              <article className="overflow-hidden bg-white">
                <div className="h-87.5 w-full overflow-hidden sm:h-82.5 lg:h-89.5">
                  <img 
                  src={card.image} 
                  alt={card.title}
                    className=" h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>

                <div className="flex min-h-45 flex-col items-center justify-start bg-white px-6 py-7 text-center
                    sm:min-h-47.5 lg:min-h-48.75">
                  {/* TITLE */}
                  <h3 className="font-sans text-[26px] font-bold leading-tight tracking-tight text-[#151515] sm:text-[27px] lg:text-[28px]">
                    {card.title}
                  </h3>
                  {/* DESCRIPTION */}
                  <p className="mt-4 max-w-97.5 font-sans text-[15px] font-normal leading-[1.65] text-[#876f5f] sm:text-[16px]">
                    {card.description}
                  </p>
                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Ministry;