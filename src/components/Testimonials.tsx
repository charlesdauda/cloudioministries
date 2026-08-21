import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteRight } from 'react-icons/fa';

import 'swiper/css';

interface Testimonial {
  text: string;
  name: string;
  location: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    text: "I was healed from a chronic illness that doctors couldn't explain. What medicine couldn't do, God did in a moment. Yeshuah is still healing.",
    name: 'Healing & Restoration',
    location: 'Accra, Ghana',
  },
  {
    text: 'From debt to abundance God turned my situation around completely. Doors opened that I never even knocked on. I am living proof of His faithfulness.',
    name: 'Financial Breakthrough',
    location: 'Durham, Canada',
  },
  {
    text: "I was bound for years by things I couldn't explain. One encounter with God through this ministry and I walked out completely free. No chains.",
    name: 'Deliverance',
    location: 'Ontario, Canada',
  },
  {
    text: "I had been drifting for years with no real direction. The teachings here gave me clarity about who I am and what I was created to do. Priceless.",
    name: 'Purpose & Calling',
    location: 'Kumasi, Ghana',
  },
  {
    text: 'A word was spoken over my life that described things no one could have known. Six months later, every single thing has come to pass. God is not silent.',
    name: 'Prophetic Word',
    location: 'Accra, Ghana',
  },
];

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-[#f4eadb] py-17.5 sm:py-18.75 lg:py-20 mt-30">
      <div className="mx-auto w-full max-w-377.5 px-6 lg:px-7.5">
        <div className="mb-11.25 sm:mb-12.5">
          <span className="mb-4 block font-sans text-[14px] font-bold uppercase tracking-[0.14em] text-[#303030] sm:text-[15px] lg:text-[16px]">
            Testimonials
          </span>
          <h2 className="font-sans text-[40px] font-bold leading-[1.08] tracking-[-0.035em] text-[#202020] sm:text-[48px] lg:text-[52px] ">
            What People Say
          </h2>
        </div>
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          spaceBetween={30}
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
              spaceBetween: 30,
            },
          }}
          className="w-full"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={`${testimonial.name}-${index}`}>
              <article className="bg-white px-8.75 py-11.25 sm:px-10 sm:py-12 lg:px-13.75 lg:py-13.75 ">
                <div className="mb-7">
                  <FaQuoteRight className="rotate-180 text-[25px] text-[#b77a3f]"/>
                </div>
                <p className="max-w-110 font-sans text-[16px] font-normal leading-[1.75] text-[#202020] sm:text-[17px] lg:text-[18px]">
                  {testimonial.text}
                </p>
                <div className="mt-8">
                  <h3 className="font-sans text-[18px] font-bold leading-tight tracking-[-0.02em] text-[#202020] sm:text-[19px]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 font-sans text-[15px] font-normal text-[#99918c] ">
                    {testimonial.location}
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

export default Testimonials;