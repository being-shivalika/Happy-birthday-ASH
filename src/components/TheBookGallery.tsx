import React, { useState, useEffect } from 'react';
import { MODEL_DATA, EditorialWork } from '../config/modelData';
import { X, ChevronLeft, ChevronRight, Eye, Camera, MapPin, Calendar } from 'lucide-react';

export const TheBookGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedWork, setSelectedWork] = useState<EditorialWork | null>(null);

  const categories = ['All', 'Haute Couture', 'Editorial', 'Runway', 'Campaign', 'Beauty'];

  const filteredWorks = activeCategory === 'All'
    ? MODEL_DATA.portfolioWorks
    : MODEL_DATA.portfolioWorks.filter((w) => w.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedWork) return;
      if (e.key === 'Escape') setSelectedWork(null);
      if (e.key === 'ArrowRight') handleNextWork();
      if (e.key === 'ArrowLeft') handlePrevWork();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWork]);

  const handleNextWork = () => {
    if (!selectedWork) return;
    const currentIndex = filteredWorks.findIndex((w) => w.id === selectedWork.id);
    const nextIndex = (currentIndex + 1) % filteredWorks.length;
    setSelectedWork(filteredWorks[nextIndex]);
  };

  const handlePrevWork = () => {
    if (!selectedWork) return;
    const currentIndex = filteredWorks.findIndex((w) => w.id === selectedWork.id);
    const prevIndex = (currentIndex - 1 + filteredWorks.length) % filteredWorks.length;
    setSelectedWork(filteredWorks[prevIndex]);
  };

  return (
    <section id="book" className="py-24 sm:py-32 bg-[#FAFAFA] border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Roman Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-12">
          <div>
            <span className="text-[11px] tracking-[0.35em] uppercase font-sans text-neutral-400 block mb-2">
              CHAPTER 01 / SELECTED ARCHIVE
            </span>
            <h2 className="font-roman text-3xl sm:text-4xl md:text-5xl text-black font-semibold tracking-[0.2em] uppercase">
              THE BOOK
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-sans text-neutral-500 leading-relaxed">
            Curated high-fashion editorials, international magazine tear sheets, and runway appearances defining modern elegance.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-neutral-200/60 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs tracking-[0.22em] uppercase font-sans transition-all duration-300 rounded-sm ${
                activeCategory === category
                  ? 'bg-black text-white font-medium shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-black border border-neutral-200/80 hover:border-black/30'
              }`}
            >
              {category}
              {category === 'All' && ` (${MODEL_DATA.portfolioWorks.length})`}
            </button>
          ))}
        </div>

        {/* Gallery Grid: Editorial Masonry & Aspect Ratio balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="group cursor-pointer bg-white border border-neutral-200/80 p-3 sm:p-4 shadow-luxury hover:shadow-elevation hover:border-black/40 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Frame with hover zoom & subtle contrast shift */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Corner Minimalist Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 border border-black/10 text-[9px] tracking-[0.25em] uppercase font-sans font-medium text-neutral-800">
                  {work.category}
                </div>

                {/* Hover Inspect Pill */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white px-3.5 py-1.5 rounded-full shadow-lg flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-black transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW EDITORIAL</span>
                  </div>
                </div>
              </div>

              {/* Caption & Editorial Metadata */}
              <div className="mt-4 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between text-[10px] tracking-[0.22em] uppercase font-sans text-neutral-400 mb-1">
                  <span>{work.client}</span>
                  <span className="font-mono">{work.season}</span>
                </div>
                <h3 className="font-roman text-sm sm:text-base text-black font-medium tracking-[0.15em] uppercase group-hover:text-neutral-700 transition-colors">
                  {work.title}
                </h3>
                <div className="mt-2 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase font-sans text-neutral-500">
                  <span>PHOTO: {work.photographer}</span>
                  <span>{work.location.split(',')[0]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN LUXURY EDITORIAL LIGHTBOX MODAL */}
      {selectedWork && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          {/* Top Close Button */}
          <button
            onClick={() => setSelectedWork(null)}
            className="absolute top-6 right-6 p-2 text-white hover:opacity-75 transition-opacity z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrevWork}
            className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all duration-200 z-10"
            aria-label="Previous Editorial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextWork}
            className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all duration-200 z-10"
            aria-label="Next Editorial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Lightbox Content Card */}
          <div className="max-w-6xl w-full bg-white text-black shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
            {/* Image Stage */}
            <div className="flex-1 bg-neutral-900 flex items-center justify-center p-4 sm:p-8 relative min-h-[350px]">
              <img
                src={selectedWork.image}
                alt={selectedWork.title}
                className="max-h-[75vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Editorial Metadata Sidebar */}
            <div className="w-full md:w-96 p-6 sm:p-8 flex flex-col justify-between bg-white border-l border-neutral-200 overflow-y-auto">
              <div>
                <div className="inline-block px-2.5 py-1 bg-black text-white text-[9px] tracking-[0.25em] uppercase font-sans font-medium mb-4">
                  {selectedWork.category}
                </div>

                <h3 className="font-roman text-2xl text-black font-semibold tracking-[0.15em] uppercase mb-2">
                  {selectedWork.title}
                </h3>
                <p className="text-xs tracking-[0.2em] uppercase font-sans text-neutral-400 mb-6">
                  {selectedWork.client} • {selectedWork.season}
                </p>

                {selectedWork.description && (
                  <p className="text-sm font-serif italic text-neutral-700 leading-relaxed mb-6 border-l-2 border-black pl-3 py-1">
                    "{selectedWork.description}"
                  </p>
                )}

                {/* Metadata List */}
                <div className="space-y-3.5 text-xs font-sans text-neutral-600 border-t border-neutral-100 pt-6">
                  <div className="flex items-center space-x-2.5">
                    <Camera className="w-4 h-4 text-neutral-400" />
                    <span className="text-[11px] tracking-[0.18em] uppercase">
                      PHOTO: <strong className="text-black font-medium">{selectedWork.photographer}</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <MapPin className="w-4 h-4 text-neutral-400" />
                    <span className="text-[11px] tracking-[0.18em] uppercase">
                      LOCATION: <strong className="text-black font-medium">{selectedWork.location}</strong>
                    </span>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Calendar className="w-4 h-4 text-neutral-400" />
                    <span className="text-[11px] tracking-[0.18em] uppercase">
                      STYLING: <strong className="text-black font-medium">{selectedWork.styling}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Nav Hint */}
              <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-400">
                <span>USE ARROW KEYS ◄ ►</span>
                <span>ESC TO CLOSE</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
