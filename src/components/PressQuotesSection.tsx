import React from 'react';
import { MODEL_DATA } from '../config/modelData';
import { Quote, Sparkles } from 'lucide-react';

export const PressQuotesSection: React.FC = () => {
  return (
    <section id="press" className="py-24 sm:py-32 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Subtle Roman Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <span className="font-roman text-[35vw] text-white font-bold leading-none">
          AG
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Roman Label */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
            <Sparkles className="w-3 h-3 text-neutral-400" />
            <span className="text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-neutral-300">
              CRITICAL ACCLAIM & EDITORIAL RECOGNITION
            </span>
          </div>

          <h2 className="font-roman text-3xl sm:text-4xl md:text-5xl text-white font-semibold tracking-[0.22em] uppercase">
            EDITORIAL ENDORSEMENTS
          </h2>
          <div className="w-16 h-[1px] bg-white/30 mx-auto mt-6" />
        </div>

        {/* 3-Column Quote Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MODEL_DATA.pressQuotes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#141414] border border-white/10 p-8 shadow-luxury-dark flex flex-col justify-between hover:border-white/30 transition-all duration-300"
            >
              <div>
                <Quote className="w-6 h-6 text-neutral-500 mb-6" />
                <p className="font-serif text-base sm:text-lg italic text-neutral-200 leading-relaxed font-light mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <h4 className="font-roman text-xs text-white font-semibold tracking-[0.2em] uppercase">
                  {item.author}
                </h4>
                <p className="text-[10px] tracking-[0.18em] uppercase font-sans text-neutral-400 mt-1">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Representation Ticker */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap items-center justify-around gap-8 opacity-60 text-xs tracking-[0.3em] font-roman uppercase text-neutral-300">
          <span>VOGUE NOIR</span>
          <span>HARPER'S BAZAAR</span>
          <span>L'OFFICIEL</span>
          <span>NUMÉRO PARIS</span>
          <span>ELLE INTERNATIONAL</span>
          <span>DAZED COUTURE</span>
        </div>
      </div>
    </section>
  );
};
