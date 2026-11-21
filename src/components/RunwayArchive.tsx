import React, { useState } from 'react';
import { MODEL_DATA, RunwayShow } from '../config/modelData';
import { ArrowUpRight } from 'lucide-react';

export const RunwayArchive: React.FC = () => {
  const [hoveredShow, setHoveredShow] = useState<RunwayShow | null>(MODEL_DATA.runwayExperience[0]);

  return (
    <section id="runway" className="py-24 sm:py-32 bg-[#FAFAFA] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.35em] uppercase font-sans text-neutral-400 block mb-2">
              CHAPTER 03 / RUNWAY & SHOWS
            </span>
            <h2 className="font-roman text-3xl sm:text-4xl md:text-5xl text-black font-semibold tracking-[0.2em] uppercase">
              RUNWAY ARCHIVE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-sans text-neutral-500 leading-relaxed">
            Record of international runway appearances, haute couture presentations, and opening/closing looks across Paris, Milan, and Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Table of Shows (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-neutral-200">
            {MODEL_DATA.runwayExperience.map((show) => {
              const isSelected = hoveredShow?.id === show.id;
              return (
                <div
                  key={show.id}
                  onMouseEnter={() => setHoveredShow(show)}
                  onClick={() => setHoveredShow(show)}
                  className={`py-6 px-4 -mx-4 cursor-pointer transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-sm ${
                    isSelected ? 'bg-white shadow-sm border-l-2 border-black pl-5' : 'hover:bg-neutral-100/70'
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-3 text-[10px] tracking-[0.25em] uppercase font-sans text-neutral-400 mb-1">
                      <span className="font-mono">{show.year}</span>
                      <span>•</span>
                      <span>{show.city}</span>
                      <span>•</span>
                      <span>{show.season}</span>
                    </div>
                    <h3 className="font-roman text-lg sm:text-xl text-black font-semibold tracking-[0.15em] uppercase">
                      {show.brand}
                    </h3>
                    <p className="text-xs font-sans text-neutral-500 mt-1">
                      {show.event}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="inline-block px-3 py-1 bg-neutral-100 border border-neutral-200 text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-neutral-700">
                      {show.role}
                    </span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-black translate-x-0.5 -translate-y-0.5' : 'text-neutral-400'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Floating Runway Tear-Sheet Preview (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-white p-4 sm:p-6 border border-neutral-200 shadow-luxury">
            {hoveredShow && (
              <div>
                <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-100 relative">
                  <img
                    src={hoveredShow.tearSheetImage || '/assets/6.jpeg'}
                    alt={hoveredShow.brand}
                    className="w-full h-full object-cover object-center grayscale contrast-105 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white px-2.5 py-1 text-[9px] tracking-[0.25em] uppercase font-sans font-medium">
                    RUNWAY TEAR SHEET
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100">
                  <div className="flex items-center justify-between text-[10px] tracking-[0.25em] uppercase font-sans text-neutral-400 mb-1">
                    <span>{hoveredShow.city}</span>
                    <span className="font-mono">{hoveredShow.year}</span>
                  </div>
                  <h4 className="font-roman text-base text-black font-semibold tracking-[0.18em] uppercase">
                    {hoveredShow.brand}
                  </h4>
                  <p className="text-xs font-sans text-neutral-500 mt-1">
                    {hoveredShow.role} — {hoveredShow.event}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
