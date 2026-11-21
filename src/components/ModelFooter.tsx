import React from 'react';
import { MODEL_DATA } from '../config/modelData';
import { ArrowUp } from 'lucide-react';

export const ModelFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-black/10 py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-neutral-200">
          {/* Left: Brand Monogram & Name */}
          <div className="text-center md:text-left">
            <span className="font-roman text-2xl sm:text-3xl tracking-[0.25em] font-semibold text-black uppercase block">
              {MODEL_DATA.talent.fullName}
            </span>
            <span className="text-[10px] tracking-[0.35em] uppercase font-sans text-neutral-400 block mt-1">
              HAUTE COUTURE • EDITORIAL • RUNWAY
            </span>
          </div>

          {/* Center: City Circuit */}
          <div className="flex items-center space-x-6 text-xs tracking-[0.25em] uppercase font-sans text-neutral-500">
            {MODEL_DATA.talent.cities.map((city) => (
              <span key={city} className="hover:text-black transition-colors">
                {city}
              </span>
            ))}
          </div>

          {/* Right: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 text-xs tracking-[0.2em] uppercase font-sans border border-neutral-300 hover:border-black text-neutral-700 hover:text-black transition-all rounded-sm"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase font-sans text-neutral-400">
          <div>
            © {new Date().getFullYear()} AASHIMA GUPTA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://models.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              MODELS.COM
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              INSTAGRAM
            </a>
            <span className="text-neutral-300">•</span>
            <span>WORLDWIDE TALENT ARCHIVE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
