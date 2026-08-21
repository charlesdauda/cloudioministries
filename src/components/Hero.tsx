import { useEffect, useState } from 'react';
import heroImage1 from '../assets/images/apshero.png';
import heroImage2 from '../assets/images/apshero2.png';

interface Slide {
  image: string;
  eyebrow: string;
  heading: string;
  cta: string;
}

const SLIDES: Slide[] = [
  {
    image: heroImage1,
    eyebrow: 'Teaching Truth · Building Leaders · Transforming Nations',
    heading: 'Revealing Truth, Transforming Destinies',
    cta: 'Read More',
  },
  {
    image: heroImage2,
    eyebrow: 'Sound Doctrine · Lasting Impact · Global Reach',
    heading: 'Building Spiritual Colossals For Yeshuah',
    cta: 'Read More',
  },
];

const SLIDE_DURATION = 4000;
const FADE_DURATION = 1400;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
      setTick((t) => t + 1);
    }, SLIDE_DURATION);
    return () => clearTimeout(id);
  }, [index]);

  const goTo = (i: number) => {
    if (i === index) return;
    setIndex(i);
    setTick((t) => t + 1);
  };

  return (
    <section id='home'
      className="relative h-screen min-h-160 w-full overflow-hidden bg-[#150d09]"
    >
      {SLIDES.map((slide, i) => {
        const active = i === index;
        return (
          <div
            key={i}
            className="absolute inset-0 transition-opacity ease-in-out"
            style={{
              transitionDuration: `${FADE_DURATION}ms`,
              opacity: active ? 1 : 0,
              zIndex: active ? 10 : 0,
            }}
            aria-hidden={!active}
          >
            <div
              key={active ? tick : 'idle'}
              className="hero-kenburns absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="hero-shade absolute inset-0" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
              <span
                className={[
                  'mb-5 font-sans text-[13px] font-semibold tracking-[0.3em] text-white/90',
                  'transition-all duration-700',
                  active ? 'translate-y-0 opacity-100 delay-250' : 'translate-y-3 opacity-0',
                ].join(' ')}
              >
                {slide.eyebrow.toUpperCase()}
              </span>

              <h1
                className={[
                  'max-w-4xl font-display text-[2.35rem] font-bold leading-[1.15] text-white',
                  'sm:text-[3.1rem] lg:text-[3.75rem]',
                  'transition-all duration-700',
                  active ? 'translate-y-0 opacity-100 delay-380' : 'translate-y-4 opacity-0',
                ].join(' ')}
              >
                {slide.heading}
              </h1>
              <a
                href="#"
                className={[
                  'mt-9 inline-flex cursor-pointer items-center justify-center no-underline',
                  'bg-[#cc9c60] px-10 py-4 shadow-sm',
                  'font-sans text-[13px] font-semibold tracking-[0.22em] text-[#1c130d]',
                  'transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0b378] hover:shadow-md',
                  active ? 'translate-y-0 opacity-100 delay-520 duration-700' : 'translate-y-4 opacity-0 duration-700',
                ].join(' ')}
              >
                {slide.cta.toUpperCase()}
              </a>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div className="absolute inset-x-0 bottom-10 z-20 flex items-center justify-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={[
              'h-2.25 rounded-full transition-all duration-500 ease-in-out',
              i === index ? 'w-7 bg-[#e0b378]' : 'w-2.25 bg-white/40 hover:bg-white/70',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  );
}