import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { BIRTHDAY_DATA, ScrapbookMoment } from '../config/birthdayData';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const ScrapbookSection: React.FC = () => {
  const { scrapbook } = BIRTHDAY_DATA;
  const [activePhoto, setActivePhoto] = useState<ScrapbookMoment | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  // Gentle subtle parallax for the 12-column layers
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxSlow = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const parallaxFast = useTransform(scrollYProgress, [0, 1], [22, -22]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const idx = scrapbook.moments.findIndex(m => m.id === activePhoto.id);
    const prevIdx = (idx - 1 + scrapbook.moments.length) % scrapbook.moments.length;
    setActivePhoto(scrapbook.moments[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhoto) return;
    const idx = scrapbook.moments.findIndex(m => m.id === activePhoto.id);
    const nextIdx = (idx + 1) % scrapbook.moments.length;
    setActivePhoto(scrapbook.moments[nextIdx]);
  };

  return (
    <section
      ref={containerRef}
      id="memories"
      className="py-24 sm:py-32 px-6 sm:px-12 bg-midnight-pure bg-grain text-warmCream border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Ambient Violet Depth */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violetDark/25 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-mutedPurple/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-xs font-mono text-lavender/60 tracking-widest uppercase block mb-3">
            [ {scrapbook.sectionLabel} ]
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-warmCream tracking-tight mb-4">
            {scrapbook.title}{' '}
            <span className="italic font-normal text-lavender">
              {scrapbook.titleItalic}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-stoneMuted leading-relaxed font-normal">
            {scrapbook.subtitle}
          </p>
        </div>

        {/* Asymmetrical Editorial Collection with Subtle Layered Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-start">
          {scrapbook.moments.map((moment, index) => {
            const colSpan = index === 0 ? 'md:col-span-7'
                          : index === 1 ? 'md:col-span-5 md:pt-12'
                          : index === 2 ? 'md:col-span-5'
                          : index === 3 ? 'md:col-span-7 md:pt-8'
                          : index === 4 ? 'md:col-span-6'
                          : index === 5 ? 'md:col-span-6 md:pt-10'
                          : index === 6 ? 'md:col-span-4'
                          : 'md:col-span-8 md:pt-6';

            const parallax = index % 2 === 0 ? parallaxSlow : parallaxFast;

            return (
              <motion.div
                key={moment.id}
                style={{ y: parallax }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.08 }}
                className={`${colSpan} group cursor-pointer relative`}
                onClick={() => setActivePhoto(moment)}
              >
                {/* Washi Tape Corner Accent */}
                <div
                  className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 ${
                    index % 2 === 0 ? 'washi-tape' : 'washi-tape-purple'
                  } z-10 rounded-xs`}
                />

                <div className="p-3.5 sm:p-4 bg-midnight-card border border-white/10 hover:border-lavender/40 transition-all rounded-xl shadow-polaroid-dark">
                  
                  {/* Photo container with subtle entrance scale & hover lift */}
                  <div className={`w-full overflow-hidden rounded-lg bg-midnight-pure border border-white/5 relative ${
                    moment.aspect === 'landscape' ? 'aspect-[16/10]'
                    : moment.aspect === 'square' ? 'aspect-square'
                    : 'aspect-[4/5]'
                  }`}>
                    <img
                      src={moment.image}
                      alt={moment.caption}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/capybara.jpeg';
                      }}
                    />

                    {/* Subtle click-to-view badge on hover */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-midnight/80 backdrop-blur-sm text-[10px] font-mono text-lavender opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>view</span>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="pt-3.5 pb-1">
                    {moment.dateOrLabel && (
                      <span className="text-[10px] font-mono text-lavender/70 uppercase tracking-wider block mb-1">
                        {moment.dateOrLabel}
                      </span>
                    )}

                    <p className="text-xs sm:text-sm text-warmCream/90 leading-relaxed">
                      {moment.caption}
                    </p>

                    {moment.handwrittenNote && (
                      <div className="mt-2 text-right">
                        <span className="font-handwriting text-base sm:text-lg text-softPink">
                          — {moment.handwrittenNote}
                        </span>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-midnight-pure/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-midnight-card border border-white/15 p-5 sm:p-7 shadow-2xl rounded-2xl text-warmCream"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 p-2 text-stoneMuted hover:text-warmCream transition-colors z-10 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 text-stoneMuted hover:text-warmCream transition-colors cursor-pointer hidden sm:block"
                title="Previous"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-stoneMuted hover:text-warmCream transition-colors cursor-pointer hidden sm:block"
                title="Next"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="w-full max-h-[60vh] overflow-hidden rounded-xl bg-midnight-pure flex items-center justify-center mb-4 border border-white/5">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.caption}
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>

              <div className="px-1">
                {activePhoto.dateOrLabel && (
                  <span className="text-[10px] font-mono text-lavender uppercase tracking-wider block mb-1">
                    {activePhoto.dateOrLabel}
                  </span>
                )}
                <p className="text-sm text-warmCream/95 leading-relaxed">
                  {activePhoto.caption}
                </p>
                {activePhoto.handwrittenNote && (
                  <p className="font-handwriting text-lg text-softPink mt-2">
                    — {activePhoto.handwrittenNote}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
