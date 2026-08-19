import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navLogo from '../assets/images/log.png';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Pages', to: '/pages' },
  { label: 'Blog', to: '/blog' },
  { label: 'Donation', to: '/donation' },
  { label: 'Shop', to: '/shop' },
  { label: 'Contacts', to: '/contacts' },
];

const SCROLL_THRESHOLD = 60;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock background scroll while open, close on Escape
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

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50',
        'transition-[background-color,padding,box-shadow] duration-500 ease-in-out',
        scrolled
          ? 'bg-[#1c130e]/98 py-3.5 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)] backdrop-blur-sm'
          : 'bg-transparent py-6',
      ].join(' ')}
    >
     <div className="mx-auto flex max-w-[1560px] items-center justify-between gap-8 px-6 md:grid md:grid-cols-[auto_1fr_auto] md:px-12">
        <Link to="/" className="flex items-center" aria-label="Christian Church Athos — Home">
          <img
            src={navLogo}
            alt="Christian Church Athos"
            className="h-9 w-auto object-contain transition-transform duration-500 md:h-10"
          />
        </Link>

        {/* Desktop nav — untouched */}
        <nav className="hidden justify-center md:flex">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map(({ label, to }) => {
              const active = pathname === to;
              return (
                <li key={label}>
                  <Link
                    to={to}
                    className={[
                      'relative font-display text-[16px] leading-none tracking-[0.01em] text-white/95',
                      'transition-colors duration-300 hover:text-gold-light',
                      'pb-2.25 inline-block',
                    ].join(' ')}
                  >
                    {label}
                    <span
                      className={[
                        'absolute inset-x-0 bottom-0 h-px bg-gold-light transition-opacity duration-300',
                        active ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Same slot as before: empty spacer on desktop, hamburger/close on mobile */}
        <div className="flex h-9 w-9 items-center justify-end md:h-10 md:w-10">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={[
                'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                menuOpen ? 'translate-y-2 rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                menuOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out',
                menuOpen ? '-translate-y-2 -rotate-45' : '',
              ].join(' ')}
            />
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
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="font-display text-[18px] tracking-[0.01em] text-white/95 transition-colors duration-300 hover:text-gold-light"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}