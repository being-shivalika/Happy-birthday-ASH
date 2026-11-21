import React, { useState, useEffect } from 'react';
import { MODEL_DATA } from '../config/modelData';
import { ArrowUpRight, Menu, X, Download } from 'lucide-react';

interface ModelNavbarProps {
  onOpenBooking: () => void;
  onOpenCompCard: () => void;
}

export const ModelNavbar: React.FC<ModelNavbarProps> = ({ onOpenBooking, onOpenCompCard }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'THE BOOK', href: '#book' },
    { label: 'COMP CARD', href: '#comp-card' },
    { label: 'RUNWAY', href: '#runway' },
    { label: 'DIGITALS', href: '#digitals' },
    { label: 'PRESS', href: '#press' },
    { label: 'REPRESENTATION', href: '#agencies' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/10 py-3.5 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Monogram & Name */}
        <a
          href="#"
          className="group flex items-center space-x-3 text-black transition-transform duration-300 hover:opacity-80"
        >
          <span className="font-roman text-xl tracking-[0.28em] font-semibold">
            {MODEL_DATA.talent.fullName}
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.3em] uppercase text-neutral-400 font-sans border-l border-neutral-300 pl-3">
            PORTFOLIO
          </span>
        </a>

        {/* Center: Desktop Editorial Nav Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-xs tracking-[0.25em] font-medium text-neutral-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors duration-200 hover:text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={onOpenCompCard}
            className="flex items-center space-x-1.5 px-3 py-1.5 text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-700 hover:text-black border border-neutral-200 hover:border-black transition-all duration-200 rounded-sm"
          >
            <Download className="w-3 h-3" />
            <span>COMP CARD</span>
          </button>

          <button
            onClick={onOpenBooking}
            className="group flex items-center space-x-1.5 px-4 py-1.5 text-[11px] tracking-[0.2em] uppercase font-semibold text-white bg-black hover:bg-neutral-800 transition-all duration-200 rounded-sm shadow-sm"
          >
            <span>BOOK TALENT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-black hover:opacity-70 transition-opacity"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-black/10 px-6 py-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs tracking-[0.28em] font-medium text-neutral-800 hover:text-black py-2 border-b border-neutral-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCompCard();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 text-xs tracking-[0.2em] uppercase font-medium border border-black/20 text-black hover:bg-neutral-50"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD COMP CARD</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center space-x-2 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold bg-black text-white hover:bg-neutral-800"
              >
                <span>BOOKING INQUIRY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
