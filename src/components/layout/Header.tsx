'use client';

import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: '/#demo', label: 'Demo' },
    { href: '/#how', label: 'How it works' },
    { href: '/#creators', label: 'For Creators' },
    { href: '/#pricing', label: 'Pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-[background-color,border-color] duration-300 ${
        scrolled
          ? 'bg-[#0F0F23]/85 border-white/8'
          : 'bg-[#0F0F23]/0 border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="hover:opacity-80 transition-opacity"
          aria-label="Twiinn AI — Home"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Twiinn AI" width={32} height={38} className="w-8 h-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#94A3B8] hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/#waitlist"
            className="gradient-btn text-white text-sm font-600 px-5 py-2.5 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
          >
            Join the waitlist
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,visibility] duration-300 ${
          menuOpen ? 'max-h-64 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav
          className="backdrop-blur-xl bg-[#0F0F23]/95 border-t border-white/8 px-6 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm font-500 border-b border-white/5 last:border-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
