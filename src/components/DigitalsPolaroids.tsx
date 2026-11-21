import React from 'react';
import { MODEL_DATA } from '../config/modelData';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export const DigitalsPolaroids: React.FC = () => {
  return (
    <section id="digitals" className="py-24 sm:py-32 bg-white border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.35em] uppercase font-sans text-neutral-400 block mb-2">
              CHAPTER 04 / CASTING SPECIFICATIONS
            </span>
            <h2 className="font-roman text-3xl sm:text-4xl md:text-5xl text-black font-semibold tracking-[0.2em] uppercase">
              RAW DIGITALS
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-sans text-neutral-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span className="tracking-[0.2em] uppercase">100% UNRETOUCHED • NATURAL LIGHTING</span>
          </div>
        </div>

        {/* Polaroid Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MODEL_DATA.digitals.map((dig) => (
            <div
              key={dig.id}
              className="group bg-[#FAFAFA] border border-neutral-200/90 p-4 shadow-comp hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-200 border border-neutral-300">
                <img
                  src={dig.image}
                  alt={dig.title}
                  className="w-full h-full object-cover object-center grayscale contrast-100 group-hover:contrast-105 transition-all duration-300"
                />
                <div className="absolute top-2 left-2 bg-black/80 backdrop-blur-xs text-white text-[9px] font-mono tracking-widest px-2 py-0.5">
                  {dig.code}
                </div>
              </div>

              {/* Specs Label Area */}
              <div className="mt-4 pt-3 border-t border-neutral-200 text-left">
                <div className="flex items-center justify-between text-[9px] tracking-[0.25em] uppercase font-sans text-neutral-400 mb-1">
                  <span>{dig.type}</span>
                  <span className="font-mono">{dig.date}</span>
                </div>
                <h3 className="font-roman text-sm text-black font-semibold tracking-[0.15em] uppercase">
                  {dig.title}
                </h3>
                <p className="mt-2 text-[11px] font-sans text-neutral-500 leading-relaxed">
                  {dig.notes}
                </p>
                <div className="mt-3 text-[9px] tracking-[0.18em] uppercase font-mono text-neutral-400 border-t border-neutral-100 pt-2">
                  {dig.lighting}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note for International Casting Directors */}
        <div className="mt-12 bg-neutral-50 border border-neutral-200/80 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-neutral-600">
          <div className="flex items-center space-x-3">
            <ShieldAlert className="w-5 h-5 text-neutral-400 flex-shrink-0" />
            <p className="tracking-wide">
              Official agency verification: All digitals shot within the current calendar quarter under daylight conditions. Measurements verified in-person at Parisian board.
            </p>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase flex-shrink-0">
            AG-VERIFIED-2026
          </span>
        </div>
      </div>
    </section>
  );
};
