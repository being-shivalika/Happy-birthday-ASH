import React, { useState } from 'react';
import { MODEL_DATA } from '../config/modelData';
import { Printer, Copy, Check, ShieldCheck } from 'lucide-react';

export const CompCardSection: React.FC = () => {
  const [metricSystem, setMetricSystem] = useState<'imperial' | 'metric'>('imperial');
  const [copied, setCopied] = useState(false);

  const handleCopySpecs = () => {
    const specsText = `
AASHIMA GUPTA — MODEL SPECIFICATION SHEET
HEIGHT: ${MODEL_DATA.stats.height.imperial} (${MODEL_DATA.stats.height.metric})
BUST: ${MODEL_DATA.stats.bust.imperial} (${MODEL_DATA.stats.bust.metric})
WAIST: ${MODEL_DATA.stats.waist.imperial} (${MODEL_DATA.stats.waist.metric})
HIPS: ${MODEL_DATA.stats.hips.imperial} (${MODEL_DATA.stats.hips.metric})
SHOES: ${MODEL_DATA.stats.shoes.eu} / ${MODEL_DATA.stats.shoes.us}
DRESS: ${MODEL_DATA.stats.dress.eu} / ${MODEL_DATA.stats.dress.us}
EYES: ${MODEL_DATA.stats.eyes}
HAIR: ${MODEL_DATA.stats.hair}
AGENCY STATUS: ${MODEL_DATA.stats.agencyStatus}
BOOKINGS: ${MODEL_DATA.directContact.email}
    `.trim();

    navigator.clipboard.writeText(specsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrintCard = () => {
    window.print();
  };

  return (
    <section id="comp-card" className="py-24 sm:py-32 bg-white border-b border-black/5 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.35em] uppercase font-sans text-neutral-400 block mb-2">
              CHAPTER 02 / CASTING STANDARD
            </span>
            <h2 className="font-roman text-3xl sm:text-4xl md:text-5xl text-black font-semibold tracking-[0.2em] uppercase">
              THE COMPOSITE
            </h2>
          </div>

          {/* Unit Toggle & Actions */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
            {/* Unit Switcher */}
            <div className="inline-flex p-1 bg-neutral-100 border border-neutral-200 rounded-sm text-xs font-sans">
              <button
                onClick={() => setMetricSystem('imperial')}
                className={`px-3 py-1 tracking-[0.2em] uppercase rounded-sm transition-all ${
                  metricSystem === 'imperial'
                    ? 'bg-black text-white font-medium shadow-sm'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                US / INCHES
              </button>
              <button
                onClick={() => setMetricSystem('metric')}
                className={`px-3 py-1 tracking-[0.2em] uppercase rounded-sm transition-all ${
                  metricSystem === 'metric'
                    ? 'bg-black text-white font-medium shadow-sm'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                EU / METRIC
              </button>
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopySpecs}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs tracking-[0.2em] uppercase font-sans border border-neutral-300 hover:border-black text-neutral-700 hover:text-black transition-all rounded-sm bg-white"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY SPECS</span>
                </>
              )}
            </button>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrintCard}
              className="flex items-center space-x-1.5 px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-sans font-medium bg-black hover:bg-neutral-800 text-white transition-all rounded-sm shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT COMP CARD</span>
            </button>
          </div>
        </div>

        {/* PRINTABLE COMP CARD CONTAINER */}
        <div className="bg-[#FAFAFA] border border-neutral-300 p-6 sm:p-10 shadow-elevation relative">
          {/* Subtle Top Agency Header */}
          <div className="flex items-center justify-between border-b border-black/15 pb-4 mb-8 text-[11px] tracking-[0.28em] uppercase font-sans text-neutral-500">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-neutral-700" />
              <span className="font-semibold text-black">OFFICIAL CASTING RECORD</span>
            </div>
            <span>WORLDWIDE MANAGEMENT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Main Editorial Headshot (4 cols) */}
            <div className="lg:col-span-5 bg-white p-3 border border-neutral-200 shadow-sm">
              <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-100 relative">
                <img
                  src={MODEL_DATA.talent.portrait}
                  alt="Aashima Gupta Headshot"
                  className="w-full h-full object-cover object-center grayscale contrast-105"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 text-[9px] tracking-[0.25em] uppercase font-sans font-semibold text-black">
                  PRIMARY HEADSHOT
                </div>
              </div>
            </div>

            {/* Right: Model Name, 4-Grid Tear Sheets & Specs Table (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full">
              {/* Model Headline */}
              <div>
                <h3 className="font-roman text-3xl sm:text-4xl text-black font-semibold tracking-[0.22em] uppercase mb-1">
                  {MODEL_DATA.talent.fullName}
                </h3>
                <p className="text-xs tracking-[0.3em] uppercase font-sans text-neutral-400 mb-6">
                  {MODEL_DATA.talent.tagline}
                </p>

                {/* 4 Mini Composite Photos */}
                <div className="grid grid-cols-4 gap-3 mb-8">
                  {[
                    { img: '/assets/new.jpeg', label: 'FULL LENGTH' },
                    { img: '/assets/xyz.jpeg', label: 'PROFILE 90°' },
                    { img: '/assets/5.jpeg', label: 'BEAUTY' },
                    { img: '/assets/huh.jpeg', label: 'DIGITAL CLOSE' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-1.5 border border-neutral-200 shadow-xs">
                      <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-100">
                        <img
                          src={item.img}
                          alt={item.label}
                          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <span className="block mt-1 text-[8px] tracking-[0.15em] uppercase font-sans text-neutral-400 text-center truncate">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical Specifications Table */}
              <div className="bg-white border border-neutral-200/90 p-4 sm:p-6 shadow-sm">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 text-xs font-sans">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">HEIGHT</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {metricSystem === 'imperial' ? MODEL_DATA.stats.height.imperial : MODEL_DATA.stats.height.metric}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">BUST</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {metricSystem === 'imperial' ? MODEL_DATA.stats.bust.imperial : MODEL_DATA.stats.bust.metric}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">WAIST</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {metricSystem === 'imperial' ? MODEL_DATA.stats.waist.imperial : MODEL_DATA.stats.waist.metric}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">HIPS</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {metricSystem === 'imperial' ? MODEL_DATA.stats.hips.imperial : MODEL_DATA.stats.hips.metric}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">SHOES</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {MODEL_DATA.stats.shoes.eu} / {MODEL_DATA.stats.shoes.us}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">DRESS</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {MODEL_DATA.stats.dress.eu} / {MODEL_DATA.stats.dress.us}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">EYES</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {MODEL_DATA.stats.eyes}
                    </strong>
                  </div>

                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 block mb-1">HAIR</span>
                    <strong className="text-black text-sm font-semibold tracking-wider font-mono">
                      {MODEL_DATA.stats.hair}
                    </strong>
                  </div>
                </div>

                {/* Footer of Comp Card: Direct Booking & Placements */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-y-2 text-[10px] tracking-[0.25em] uppercase font-sans text-neutral-500">
                  <span>AGENCY: ELITE PARIS • THE SOCIETY NYC</span>
                  <span>BOOKINGS: {MODEL_DATA.directContact.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
