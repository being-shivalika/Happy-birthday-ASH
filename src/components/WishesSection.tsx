import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA, BirthdayWish } from '../config/birthdayData';
import { StarDoodle } from './DoodleDecorations';
import { playSparkleChime } from '../utils/soundEffects';
import { triggerStarBurst } from '../utils/confetti';
import { Mail, MailOpen, X, Sparkles, RotateCcw } from 'lucide-react';

export const WishesSection: React.FC = () => {
  const { wishes } = BIRTHDAY_DATA;
  const [openedIds, setOpenedIds] = useState<string[]>([]);
  const [activeModalWish, setActiveModalWish] = useState<BirthdayWish | null>(null);

  const unopenedCount = wishes.items.length - openedIds.length;
  const allOpened = openedIds.length === wishes.items.length;

  const handleOpenWish = (wish: BirthdayWish) => {
    if (!openedIds.includes(wish.id)) {
      const nextOpened = [...openedIds, wish.id];
      setOpenedIds(nextOpened);
      playSparkleChime();
      if (nextOpened.length === wishes.items.length) {
        triggerStarBurst(0.5, 0.45);
      }
    }
    setActiveModalWish(wish);
  };

  const handleReset = () => {
    setOpenedIds([]);
    setActiveModalWish(null);
  };

  return (
    <section id="wishes" className="py-28 sm:py-36 px-6 sm:px-12 bg-midnight-pure bg-grain text-warmCream border-t border-white/10 relative overflow-hidden">
      
      {/* Dreamy Ambient Violet Lighting */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-violetDark/35 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-mutedPurple/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Floating Stars */}
      <div className="absolute top-20 right-[15%] pointer-events-none opacity-40 hidden md:block">
        <StarDoodle className="w-6 h-6" color="#C4B0E8" />
      </div>
      <div className="absolute bottom-24 left-[10%] pointer-events-none opacity-30 hidden lg:block">
        <StarDoodle className="w-5 h-5" color="#E9A9CC" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono text-lavender/60 tracking-widest uppercase block mb-3">
            [ {wishes.sectionLabel} ]
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-warmCream tracking-tight mb-4">
            {wishes.title}
          </h2>

          <p className="text-sm sm:text-base text-stoneMuted leading-relaxed font-normal mb-8">
            {wishes.subtitle}
          </p>

          {/* Interactive Unopened Counter Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-midnight-card border border-lavender/25 text-xs font-mono tracking-wider shadow-subtle-purple">
            <Sparkles className="w-3.5 h-3.5 text-softPink" />
            {allOpened ? (
              <span className="text-lavender font-semibold">ALL 8 WISHES DISCOVERED ✦</span>
            ) : (
              <span className="text-warmCream/80">
                {unopenedCount} OF {wishes.items.length} MINI LETTERS UNOPENED
              </span>
            )}
          </div>
        </div>

        {/* 8 SEALED MINI LETTERS / GLOWING OBJECTS (Asymmetrical Organic Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {wishes.items.map((wish, index) => {
            const isOpened = openedIds.includes(wish.id);

            return (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => handleOpenWish(wish)}
                className={`p-6 rounded-2xl cursor-pointer transition-all flex flex-col justify-between border relative overflow-hidden group ${
                  isOpened
                    ? 'bg-midnight-card/90 border-lavender/30 shadow-subtle-purple'
                    : 'bg-midnight-surface/80 hover:bg-midnight-card border-white/10 hover:border-lavender/35'
                }`}
              >
                {/* Top Corner Number & Status */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-stoneMuted">
                    {wish.number}
                  </span>
                  
                  <span
                    className={`text-[10px] font-mono tracking-wider px-2 py-0.5 rounded-full border ${
                      isOpened
                        ? 'text-lavender bg-lavender/10 border-lavender/30'
                        : 'text-stoneMuted bg-white/5 border-white/10'
                    }`}
                  >
                    {isOpened ? 'OPENED ✓' : 'SEALED ✦'}
                  </span>
                </div>

                {/* Center Wax Seal / Icon & Category */}
                <div className="my-4 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-midnight-pure border border-lavender/25 flex items-center justify-center text-2xl shadow-inner mb-4 group-hover:scale-110 transition-transform">
                    {wish.icon}
                  </div>

                  <span className="text-[11px] font-mono text-lavender tracking-widest uppercase mb-1 block">
                    {wish.category}
                  </span>

                  <h3 className="font-serif text-xl sm:text-2xl text-warmCream">
                    {wish.title}
                  </h3>
                </div>

                {/* Bottom Action Hint */}
                <div className="mt-6 pt-3 border-t border-white/10 text-center">
                  <span className="text-[11px] font-mono text-stoneMuted group-hover:text-warmCream transition-colors flex items-center justify-center gap-1.5">
                    {isOpened ? (
                      <>
                        <MailOpen className="w-3.5 h-3.5 text-lavender" />
                        <span>Read again →</span>
                      </>
                    ) : (
                      <>
                        <Mail className="w-3.5 h-3.5 text-softPink" />
                        <span>Tap to unseal →</span>
                      </>
                    )}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* ALL 8 WISHES OPENED: FINAL REVELATION BOX */}
        <AnimatePresence>
          {allOpened && (
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mt-16 p-8 sm:p-12 rounded-3xl bg-midnight-card border border-lavender/35 shadow-subtle-purple max-w-2xl mx-auto text-center relative overflow-hidden"
            >
              {/* Subtle top badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lavender/10 border border-lavender/25 text-xs font-mono text-lavender mb-6">
                <Sparkles className="w-3.5 h-3.5 text-softPink" />
                <span>ALL WISHES GATHERED</span>
              </div>

              {/* The Completion Headline */}
              <h3 className="font-serif text-2xl sm:text-4xl text-warmCream font-bold tracking-tight mb-4">
                {wishes.completionHeadline}
              </h3>

              {/* The Completion Message */}
              <p className="font-serif italic text-lg sm:text-xl text-lavender leading-relaxed max-w-xl mx-auto mb-8">
                "{wishes.completionMessage}"
              </p>

              {/* Re-explore / Reset Button */}
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-midnight-pure hover:bg-violetDark text-xs font-mono tracking-wider text-warmCream border border-lavender/30 transition-all cursor-pointer shadow-sm"
              >
                <RotateCcw className="w-3.5 h-3.5 text-lavender" />
                <span>EXPLORE WISHES AGAIN ↺</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* LETTER REVEAL MODAL */}
      <AnimatePresence>
        {activeModalWish && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalWish(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-midnight-pure/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-midnight-card border border-lavender/30 p-7 sm:p-10 shadow-2xl rounded-3xl text-warmCream overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalWish(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-stoneMuted hover:text-warmCream hover:bg-white/5 transition-all z-20 cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Wax Seal Stamp on Top */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-midnight-pure border border-lavender/30 flex items-center justify-center text-xl shadow-sm">
                  {activeModalWish.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-lavender tracking-widest uppercase block">
                    {activeModalWish.category}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-warmCream">
                    {activeModalWish.title}
                  </h4>
                </div>
              </div>

              {/* The Wish Message */}
              <div className="p-6 rounded-2xl bg-midnight-pure/80 border border-white/5 my-6">
                <p className="font-serif italic text-lg sm:text-xl text-warmCream/95 leading-relaxed">
                  "{activeModalWish.message}"
                </p>
              </div>

              {/* Handwritten Note / Footer */}
              <div className="flex items-center justify-between pt-2 text-xs font-mono text-stoneMuted">
                {activeModalWish.note && (
                  <span className="font-handwriting text-lg text-softPink">
                    — {activeModalWish.note}
                  </span>
                )}
                <button
                  onClick={() => setActiveModalWish(null)}
                  className="text-lavender hover:underline font-mono text-xs ml-auto cursor-pointer"
                >
                  fold letter ✕
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
