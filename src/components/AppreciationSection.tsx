import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import { Heart, Quote, Plus, Minus } from 'lucide-react';
import { playSparkleChime } from '../utils/soundEffects';

export const AppreciationSection: React.FC = () => {
  const { appreciation } = BIRTHDAY_DATA;
  const [activeIndex, setActiveIndex] = useState(0);
  const [openedHiddenNoteIds, setOpenedHiddenNoteIds] = useState<string[]>([]);

  const handleToggleHiddenNote = (id: string) => {
    if (openedHiddenNoteIds.includes(id)) {
      setOpenedHiddenNoteIds(openedHiddenNoteIds.filter(item => item !== id));
    } else {
      setOpenedHiddenNoteIds([...openedHiddenNoteIds, id]);
      playSparkleChime();
    }
  };

  return (
    <section id="appreciation" className="py-28 sm:py-36 px-6 sm:px-12 bg-violetDark bg-grain text-warmCream border-t border-lavender/10 relative overflow-hidden">
      
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-mutedPurple/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-xs font-mono text-lavender/60 tracking-widest uppercase block mb-3">
            [ {appreciation.sectionLabel} ]
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-warmCream tracking-tight mb-4">
            {appreciation.title}{' '}
            <span className="italic font-normal text-lavender">
              {appreciation.titleItalic}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-stoneMuted leading-relaxed font-normal">
            {appreciation.subtitle}
          </p>
        </div>

        {/* Interactive Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Chapter Selector (Left) */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {appreciation.items.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left p-5 rounded-xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-midnight-surface border-lavender/40 shadow-subtle-purple'
                      : 'bg-violetDark-light/50 hover:bg-violetDark-light border-lavender/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs text-lavender tracking-wider">
                      CHAPTER {item.number}
                    </span>
                    {isActive && (
                      <Heart className="w-3.5 h-3.5 text-softPink fill-softPink" />
                    )}
                  </div>
                  <h4 className="font-serif text-lg sm:text-xl text-warmCream mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stoneMuted line-clamp-1">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Expanded Cinematic Card (Right) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              {appreciation.items[activeIndex] && (
                <motion.div
                  key={appreciation.items[activeIndex].id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 p-7 sm:p-10 rounded-2xl bg-midnight-surface border border-lavender/20 relative flex flex-col justify-between overflow-hidden shadow-subtle-purple"
                >
                  {/* Subtle Number Watermark */}
                  <div className="absolute top-4 right-6 font-serif text-8xl text-lavender/5 select-none pointer-events-none">
                    {appreciation.items[activeIndex].number}
                  </div>

                  <div>
                    <span className="text-[11px] font-mono text-lavender tracking-widest uppercase block mb-3">
                      [ CHAPTER {appreciation.items[activeIndex].number} ]
                    </span>

                    <h3 className="font-serif text-2xl sm:text-3xl text-warmCream mb-2">
                      {appreciation.items[activeIndex].title}
                    </h3>

                    <p className="text-xs font-mono text-stoneMuted mb-6">
                      / {appreciation.items[activeIndex].subtitle}
                    </p>

                    <p className="text-warmCream/90 text-base sm:text-lg leading-relaxed font-normal mb-8">
                      {appreciation.items[activeIndex].content}
                    </p>
                  </div>

                  {/* Pull Quote Box */}
                  <div className="p-4 sm:p-5 rounded-xl bg-violetDark/60 border border-lavender/15 flex items-start gap-3">
                    <Quote className="w-4 h-4 text-softPink flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-serif italic text-lg sm:text-xl text-warmCream">
                        "{appreciation.items[activeIndex].highlightPhrase}"
                      </p>
                    </div>
                  </div>

                  {/* Progress dots */}
                  <div className="mt-8 pt-4 border-t border-lavender/10 flex items-center justify-between text-xs font-mono text-stoneMuted">
                    <span>{activeIndex + 1} of {appreciation.items.length} truths</span>
                    <div className="flex gap-1.5">
                      {appreciation.items.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveIndex(i)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            activeIndex === i ? 'w-6 bg-lavender' : 'w-1.5 bg-lavender/20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* CLICK-TO-REVEAL HIDDEN APPRECIATION NOTES */}
        <div className="mt-12 pt-8 border-t border-lavender/15">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono text-lavender tracking-widest uppercase">
              ✦ OPTIONAL HIDDEN THOUGHTS
            </span>
            <span className="text-[11px] font-mono text-stoneMuted">
              [ click prompts to reveal ]
            </span>
          </div>

          <div className="space-y-3">
            {appreciation.hiddenNotes.map((note) => {
              const isOpened = openedHiddenNoteIds.includes(note.id);

              return (
                <div
                  key={note.id}
                  className="rounded-xl bg-midnight-surface/70 border border-lavender/15 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => handleToggleHiddenNote(note.id)}
                    className="w-full p-4 flex items-center justify-between text-left cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <span className="font-serif italic text-base sm:text-lg text-warmCream">
                      "{note.prompt}"
                    </span>
                    <div className="text-lavender p-1">
                      {isOpened ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpened && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 pt-1 sm:p-5 sm:pt-1 border-t border-lavender/10">
                          <p className="font-handwriting text-xl text-softPink leading-snug">
                            {note.message}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
};
