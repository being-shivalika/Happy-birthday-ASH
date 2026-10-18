import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import { ArrowDown, Sparkles, X, Heart } from 'lucide-react';
import { CrownDoodle, StarDoodle } from './DoodleDecorations';
import { playSparkleChime } from '../utils/soundEffects';

export const HeroSection: React.FC = () => {
  const { hero, recipient } = BIRTHDAY_DATA;
  const [showSecretNote, setShowSecretNote] = useState<boolean>(false);

  const handleScrollToNext = () => {
    const el = document.getElementById('memories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleToggleSecretNote = () => {
    setShowSecretNote(!showSecretNote);
    if (!showSecretNote) playSparkleChime();
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center px-6 sm:px-12 py-24 bg-midnight bg-grain overflow-hidden">
      
      {/* Restrained Violet Ambient Depth */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violetDark/35 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-mutedPurple/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Tasteful Floating Star Accents */}
      <div className="absolute top-28 left-[10%] pointer-events-none opacity-40 hidden lg:block">
        <StarDoodle className="w-8 h-8" color="#C4B0E8" />
      </div>
      <div className="absolute bottom-24 right-[12%] pointer-events-none opacity-30 hidden md:block">
        <StarDoodle className="w-6 h-6" color="#E9A9CC" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: Expressive Editorial Typography */}
          <div className="lg:col-span-7 text-left">
            
            {/* Tagline Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violetDark/80 border border-lavender/20 text-xs font-mono text-lavender tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-lavender" />
              <span>{hero.tagline}</span>
            </motion.div>

            {/* Main Celebratory Heading in Cormorant Garamond */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-warmCream font-normal tracking-tight leading-[1.02] mb-6"
            >
              {hero.heading} <br />
              <span className="italic font-normal text-lavender">
                {hero.headingItalic}
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-stoneMuted text-base sm:text-lg max-w-lg font-normal leading-relaxed mb-8"
            >
              {hero.supportingText}
            </motion.p>

            {/* Badge Pills */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-2 mb-10"
            >
              {hero.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-midnight-surface border border-lavender/15 text-[11px] font-mono text-warmCream/80"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Action Button & Secret Annotation Discovery */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={handleScrollToNext}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-violetDark hover:bg-mutedPurple text-warmCream text-sm font-mono tracking-wider border border-lavender/30 transition-all cursor-pointer group shadow-subtle-purple active:scale-95"
              >
                <span>{hero.ctaButton}</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Secret Clickable Note */}
              <button
                onClick={handleToggleSecretNote}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-midnight-surface/80 hover:bg-midnight-card border border-lavender/20 text-softPink hover:text-warmCream transition-all cursor-pointer text-xs group"
                title="Click to reveal a secret note"
              >
                <span className="font-handwriting text-base font-medium">
                  {hero.secretNotePrompt}
                </span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT: Layered Composition with Crown Doodle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Hand-Drawn Crown Doodle floating above */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
              <CrownDoodle className="w-16 h-12 text-warmCream opacity-90 drop-shadow-sm" />
            </div>

            {/* Layered Card Frame */}
            <div className="relative w-64 sm:w-72 p-3 bg-midnight-surface border border-lavender/25 rounded-2xl shadow-subtle-purple">
              
              {/* Corner Washi Tape */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 washi-tape-purple rounded-xs z-10" />

              {/* Photo Frame */}
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-midnight border border-lavender/15 mb-3">
                <img
                  src={recipient.portraitImage}
                  alt={recipient.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/capybara.jpeg';
                  }}
                />
              </div>

              {/* Card Footer Details */}
              <div className="px-1 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-lavender tracking-widest uppercase block">
                    {recipient.ageOrLevel}
                  </span>
                  <span className="font-serif italic text-lg text-warmCream">
                    {recipient.name}
                  </span>
                </div>
                <span className="font-handwriting text-base text-softPink">
                  the birthday girl ✨
                </span>
              </div>

            </div>

          </motion.div>

        </div>
      </div>

      {/* Secret Note Modal Reveal */}
      <AnimatePresence>
        {showSecretNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSecretNote(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-midnight-pure/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-midnight-card border border-lavender/30 p-7 sm:p-9 shadow-2xl rounded-3xl text-warmCream text-center"
            >
              <button
                onClick={() => setShowSecretNote(false)}
                className="absolute top-4 right-4 p-2 text-stoneMuted hover:text-warmCream transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-full bg-violetDark/80 border border-lavender/30 flex items-center justify-center mx-auto mb-4 text-softPink">
                <Heart className="w-6 h-6 fill-current" />
              </div>

              <span className="text-[10px] font-mono tracking-widest uppercase text-lavender block mb-2">
                [ SECRET DISCOVERY ]
              </span>

              <h4 className="font-serif text-2xl text-warmCream mb-4">
                You weren't supposed to find this so quickly.
              </h4>

              <div className="p-4 rounded-xl bg-midnight-pure/80 border border-white/5 mb-6">
                <p className="font-handwriting text-xl sm:text-2xl text-lavender leading-snug">
                  "{hero.secretNoteMessage}"
                </p>
              </div>

              <button
                onClick={() => setShowSecretNote(false)}
                className="text-xs font-mono text-stoneMuted hover:text-warmCream transition-colors"
              >
                [ back to the universe → ]
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
