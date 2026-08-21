import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
};

type CountUpProps = {
  value: number;
  suffix?: string;
  start: boolean;
};

const stats: Stat[] = [
  {
    label: "Countries",
    value: 40,
    suffix: "+",
  },
  {
    label: "Sermons",
    value: 1000,
    suffix: "+",
  },
  {
    label: "Years",
    value: 20,
    suffix: "+",
  },
  {
    label: "Members",
    value: 5000,
    suffix: "+",
  },
];

const CountUp = ({
  value,
  suffix = "",
  start,
}: CountUpProps) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const duration = 2200;

    const animate = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;

      const progress = Math.min(
        elapsed / duration,
        1
      );

      // Smooth ease-out
      const easedProgress =
        1 - Math.pow(1 - progress, 4);

      setCount(
        Math.floor(easedProgress * value)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [value, start]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const MinistryStats = () => {
  const sectionRef =
    useRef<HTMLElement | null>(null);

  const [isVisible, setIsVisible] =
    useState<boolean>(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          threshold: 0.25,
        }
      );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#b27a48]"
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-375
          grid-cols-2
          px-6
          py-17.5
          sm:px-10
          sm:py-20
          lg:grid-cols-4
          lg:px-16
          lg:py-26.25
        "
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              flex
              flex-col
              items-center
              justify-center
              text-center
            "
          >
            {/* LABEL */}
            <p
              className="
                mb-4
                font-sans
                text-[17px]
                font-bold
                leading-none
                text-[#f8f5f2]
                sm:text-[20px]
                lg:text-[24px]
              "
            >
              {stat.label}
            </p>

            {/* NUMBER */}
            <div
              className="
                font-sans
                text-[58px]
                font-bold
                leading-none
                tracking-[-0.04em]
                text-[#f8f5f2]
                sm:text-[70px]
                lg:text-[82px]
              "
            >
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                start={isVisible}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinistryStats;