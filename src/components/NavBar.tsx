import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navLogo from '../assets/images/log.png';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Ministry', to: '/ministry' },
  { label: 'Sermons', to: '/sermon' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const heroEl = document.getElementById('home');

    if (!heroEl) {
      setScrolled(true);
      setAtTop(true); // no hero to hide against — keep content visible
      return;
    }

    const onScroll = () => {
      setScrolled(heroEl.getBoundingClientRect().bottom <= 0);
      setAtTop(window.scrollY <= 4);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const showSolid = scrolled || menuOpen;
  const showContent = atTop || showSolid; // hides logo/links only while mid-scroll through the hero

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 py-7',
        'transition-[background-color,box-shadow] duration-500 ease-in-out',
        showSolid
          ? 'bg-[#1c130e]/98 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] backdrop-blur-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex max-w-[1560px] items-center justify-between gap-8 px-6 transition-opacity duration-500 ease-in-out md:grid md:grid-cols-[auto_1fr_auto] md:px-12',
          showContent ? 'opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
      >
        <Link to="/" className="flex items-center" aria-label="Christian Church Athos — Home">
          <img
            src={navLogo}
            alt="Christian Church Athos"
            className="h-9 w-auto object-contain transition-transform duration-500 md:h-10"
            loading="lazy"
          />
        </Link>

        <nav className="hidden justify-center md:flex">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map(({ label, to }) => {
              const active = pathname === to;
              return (
                <li key={label}>
                  <Link
                    to={to}
                    className="group relative inline-block pb-2 font-display text-[16px] leading-none tracking-[0.01em] text-white/95 transition-colors duration-300 hover:text-gold-light"
                  >
                    {label}
                    <span
                    className={[
                      'absolute inset-x-0 bottom-0 h-px origin-left bg-white transition-transform duration-300 ease-out',
                      active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                    ].join(' ')}
                  />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex h-9 w-9 items-center justify-end md:h-10 md:w-10">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span className={['block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out', menuOpen ? 'translate-y-2 rotate-45' : ''].join(' ')} />
            <span className={['block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out', menuOpen ? 'opacity-0' : 'opacity-100'].join(' ')} />
            <span className={['block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out', menuOpen ? '-translate-y-2 -rotate-45' : ''].join(' ')} />
          </button>
        </div>
      </div>

      <div
        className={[
          'overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out md:hidden',
          menuOpen ? 'max-h-90 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
         <nav className="border-t border-white/10 bg-[#1c130e] px-6 pb-8 pt-6">
          <ul className="flex flex-col items-center gap-6">
            {NAV_LINKS.map(({ label, to }) => {
              const active = pathname === to;
              return (
                <li key={label}>
                  <Link
                    to={to}
                    className="group relative inline-block pb-2 font-display text-[18px] leading-none tracking-[0.01em] text-white/95 transition-colors duration-300 hover:text-gold-light"
                  >
                    {label}
                    <span
                      className={[
                        'absolute inset-x-0 bottom-0 h-px origin-left bg-white transition-transform duration-300 ease-out',
                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                      ].join(' ')}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}