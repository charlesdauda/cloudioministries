import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import { FaSpotify, FaYoutube } from "react-icons/fa6";

type SpotifySermon = {
  title: string;
  subtitle: string;
  image: string; // fallback if the Spotify thumbnail fetch fails
  spotifyUrl: string;
};

type YouTubeSermon = {
  title: string;
  subtitle: string;
  thumbnail: string; // fallback if a real video ID can't be found
  youtubeUrl: string;
};

const spotifySermons: SpotifySermon[] = [
  {
    title: "The Secret To Capacity",
    subtitle: "Apostle Dr Cloudio",
    image: "/sermon-1.jpg",
    spotifyUrl: "https://open.spotify.com/episode/6csNc71SJzQt50HQQMI6pN?si=c4b51f822b9a4ba9",
  },
  {
    title: "The Mystery Of First Fruit",
    subtitle: "Apostle Dr Cloudio",
    image: "/sermon-2.jpg",
    spotifyUrl: "https://open.spotify.com/episode/4AbLiasNRTYZqTZt132p0n?si=780883b99d2949d9",
  },
  {
    title: "How To Build A Strong Spirit",
    subtitle: "Apostle Dr Cloudio",
    image: "/sermon-3.jpg",
    spotifyUrl: "https://open.spotify.com/episode/4Zup6j7JHCdpuCsccW42r3?si=2a6d2d43d05f4544",
  },
];

const youtubeSermons: YouTubeSermon[] = [
  {
    title: "Is Christ the same as Lucifer",
    subtitle: "Apostle Dr Cloudio",
    thumbnail: "/youtube-1.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=Ty0OfddxCm0&feature=youtu.be",
  },
  {
    title: "Mystery Of Ideas",
    subtitle: "Apostle Dr Cloudio",
    thumbnail: "/youtube-2.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=tHV8ZQQorbs&feature=youtu.be",
  },
  {
    title: "The Voice Behind The Voice",
    subtitle: "Dr Cloudio Ministries",
    thumbnail: "/youtube-3.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=kOf0cq8ikiU&feature=youtu.be",
  },
];

function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1).split("/")[0] || null;
    }
    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname === "/watch") return parsed.searchParams.get("v");
      const match = parsed.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
      if (match) return match[2];
    }
  } catch {
    // not a real/absolute URL yet (e.g. a placeholder like "https://www.youtube.com/")
  }
  return null;
}
const CORS_PROXY = "https://corsproxy.io/?url=";

function useSpotifyThumbnail(spotifyUrl: string, fallback: string): string {
  const [thumbnail, setThumbnail] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;

    fetch(`${CORS_PROXY}${encodeURIComponent(oembedUrl)}`)
      .then((res) => {
        if (!res.ok) throw new Error("oEmbed request failed");
        return res.json();
      })
      .then((data) => {
        if (!cancelled && data?.thumbnail_url) {
          setThumbnail(data.thumbnail_url);
        }
      })
      .catch(() => {
        // keep the fallback image, no crash
      });

    return () => {
      cancelled = true;
    };
  }, [spotifyUrl]);

  return thumbnail;
}

const SermonsSection = () => {
  const spotifyRef = useRef<HTMLDivElement | null>(null);
  const youtubeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const setupAutoScroll = (
      container: HTMLDivElement | null
    ): (() => void) | undefined => {
      if (!container) return;

      const mediaQuery = window.matchMedia("(max-width: 767px)");

      if (!mediaQuery.matches) return;

      let currentIndex = 0;

      const interval = window.setInterval(() => {
        const cards = container.children;

        if (!cards.length) return;

        currentIndex += 1;

        if (currentIndex >= cards.length) {
          currentIndex = 0;
        }

        const card = cards[currentIndex] as HTMLElement;

        container.scrollTo({
          left: card.offsetLeft,
          behavior: "smooth",
        });
      }, 4500);

      return () => {
        window.clearInterval(interval);
      };
    };

    const spotifyCleanup = setupAutoScroll(spotifyRef.current);
    const youtubeCleanup = setupAutoScroll(youtubeRef.current);

    return () => {
      spotifyCleanup?.();
      youtubeCleanup?.();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f3e8d8]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.035]">
        <div className="absolute -left-32 top-0 h-125 w-125 rounded-full border-45 border-[#8c684d]"/>
        <div className="absolute -right-40 -bottom-37.5 h-15 w-150 rounded-full border-50 border-[#8c684d]"/>
      </div>
      <div className="relative mx-auto w-full max-w-375 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <div className="max-w-225">
          <p className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#3a3735] sm:text-[14px]" >
            Latest Messages
          </p>
          <h2 className="font-sans text-[38px] font-bold leading-[1.08] tracking-[-0.04em] text-[#202020] sm:text-[48px] lg:text-[56px] ">
            The Sound of Our Ministry
          </h2>
          <p className="mt-6 max-w-212.5 font-sans text-[16px] leading-[1.8] text-[#7c6d62] sm:text-[17px] lg:text-[18px] ">
            Dr Cloudio&apos;s messages carry a rare depth rooted in Scripture,
            revealed by the Spirit, and delivered with apostolic authority.
            Access his teachings across all platforms and allow the Word to
            transform your life.
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaSpotify
                className="text-[27px] text-[#1DB954]"
              />
              <h3 className="font-sans text-[27px] font-bold tracking-tight text-[#202020] sm:text-[31px]">
                Spotify
              </h3>
            </div>

            <a href="https://open.spotify.com/show/0sAsHcZqb2L4hZaKIgNB6x?si=2eb8e2e842c44c8f"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 font-sans text-[15px] font-semibold text-[#202020] transition-colors duration-300 hover:text-[#b27a48] sm:flex">
              Listen on Spotify
              <ArrowRight size={17} />
            </a>
          </div>

          <div ref={spotifyRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 scrollbar-none sm:gap-6 
          md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
            {spotifySermons.map((sermon) => (
              <SpotifyCard
                key={sermon.title}
                sermon={sermon}
              />
            ))}
          </div>
        </div>

        <div className="mt-20 sm:mt-24">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaYoutube
                className="text-[27px] text-[#FF0000]"
              />
              <h3 className="font-sans text-[27px] font-bold tracking-tight text-[#202020] sm:text-[31px]">
                YouTube
              </h3>
            </div>
            <a href="https://www.youtube.com/channel/UCiMBzZwr83VnPgzMvGP5R4g"
               target="_blank"
               rel="noopener noreferrer"
               className="hidden items-center gap-2 font-sans text-[15px] font-semibold text-[#202020] transition-colors 
               duration-300 hover:text-[#b27a48] sm:flex">
                    Watch on YouTube
              <ArrowRight size={17} />
            </a>
          </div>
          <div ref={youtubeRef} className="flexsnap-x snap-mandatory gap-5 overflow-x-auto pb-5 scrollbar-none sm:gap-6 md:grid 
          md:grid-cols-3 md:overflow-visible md:pb-0">
            {youtubeSermons.map((sermon) => (
              <YouTubeCard
                key={sermon.title}
                sermon={sermon}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

const SpotifyCard = ({sermon,}: {sermon: SpotifySermon;}) => {
  const thumbnail = useSpotifyThumbnail(sermon.spotifyUrl, sermon.image);

  return (
    <a href={sermon.spotifyUrl}
       target="_blank"
       rel="noopener noreferrer"
       className="group block min-w-[85%] snap-start bg-white transition-all duration-500 hover:-translate-y-1 
       hover:shadow-[0_20px_50px_rgba(45,30,20,0.10)] sm:min-w-[45%] md:min-w-0">

      <div className="relative aspect-1.5/1 overflow-hidden">
        <img src={thumbnail}
             alt={sermon.title}
             loading="lazy"
             onError={(e) => {
               if (e.currentTarget.src !== sermon.image) {
                 e.currentTarget.src = sermon.image;
               }
             }}
             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 "/>
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25"/>
        <div className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white 
        text-[#202020] shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Play
            size={16}
            fill="currentColor"
            className="ml-0.5"
          />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b27a48]">
          Sermon
        </p>
        <h4
          className="font-sans text-[19px] font-bold leading-[1.3] tracking-[-0.02em] text-[#202020] sm:text-[20px]">
          {sermon.title}
        </h4>
        <div className="mt-5 flex items-center justify-between">
          <span
            className="font-sans text-[13px] text-[#8a7b70]">
            {sermon.subtitle}
          </span>
          <ExternalLink
            size={16}
            className="text-[#b27a48] transition-transform duration-300 group-hover:translate-x-1"/>
        </div>
      </div>
    </a>
  );
};

const YouTubeCard = ({sermon,}: { sermon: YouTubeSermon;}) => {
  const videoId = getYouTubeVideoId(sermon.youtubeUrl);
  const [thumbSrc, setThumbSrc] = useState(
    videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : sermon.thumbnail
  );

  const handleThumbError = () => {
    if (!videoId) return;
    if (thumbSrc.includes("maxresdefault")) {
      setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
    } else if (thumbSrc !== sermon.thumbnail) {
      setThumbSrc(sermon.thumbnail);
    }
  };

  return (
    <a
      href={sermon.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block min-w-[85%] snap-start bg-white transition-all duration-500 hover:-translate-y-1 
      hover:shadow-[0_20px_50px_rgba(45,30,20,0.10)] sm:min-w-[45%] md:min-w-0">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={thumbSrc}
          alt={sermon.title}
          loading="lazy"
          onError={handleThumbError}
          className=" h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/30" />
        <div
          className="absolute left-1/2 top-1/2 flex h-12  w-17 -translate-x-1/2 -translate-y-1/2 items-center justify-center 
          rounded-[10px] bg-[#FF0000] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
          <FaYoutube className="text-[24px]" />
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p
          className=" mb-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b27a48]">
          Video Message
        </p>
        <h4
          className="font-sans text-[19px] font-bold leading-[1.3] tracking-[-0.02em] text-[#202020] sm:text-[20px]">
          {sermon.title}
        </h4>

        <div className="mt-5 flex items-center justify-between">
          <span
            className="font-sans text-[13px] text-[#8a7b70]">
            {sermon.subtitle}
          </span>
          <ExternalLink
            size={16}
            className=" text-[#b27a48] transition-transform duration-300 group-hover:translate-x-1"/>
        </div>
      </div>
    </a>
  );
};

export default SermonsSection;