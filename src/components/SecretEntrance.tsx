import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import { playPortalChime } from '../utils/soundEffects';
import { triggerStarBurst } from '../utils/confetti';
import { Sparkles } from 'lucide-react';

interface SecretEntranceProps {
  onEnter: () => void;
}

export const SecretEntrance: React.FC<SecretEntranceProps> = ({ onEnter }) => {
  const [isOpening, setIsOpening] = useState(false);
  const { secretEntrance } = BIRTHDAY_DATA;

  const handleEnter = () => {
    setIsOpening(true);
    playPortalChime();
    triggerStarBurst(0.5, 0.45);
    setTimeout(() => {
      onEnter();
    }, 600);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-midnight bg-grain px-6 overflow-hidden"
      >
        {/* Subtle Restrained Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violetDark/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-mutedPurple/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-xl w-full text-center z-10 flex flex-col items-center">
          
          {/* Subtle Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <span className="text-[11px] font-mono tracking-widest text-lavender/60 uppercase">
              [ {secretEntrance.preTitle} ]
            </span>
          </motion.div>

          {/* Heading with Cormorant Garamond */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-warmCream font-normal tracking-tight leading-tight mb-6"
          >
            {secretEntrance.mainTitle} <br />
            <span className="italic font-normal text-lavender">
              {secretEntrance.mainTitleItalic}
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-stoneMuted text-base sm:text-lg max-w-md mx-auto mb-10 font-normal leading-relaxed"
          >
            {secretEntrance.supportingText}
          </motion.p>

          {/* Enter Button + Annotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative flex flex-col items-center"
          >
            {/* Playful Handwritten Annotation */}
            <div className="absolute -top-10 -right-6 sm:-right-14 rotate-6 pointer-events-none select-none">
              <span className="font-handwriting text-xl text-softPink font-medium">
                {secretEntrance.handwrittenNote}
              </span>
            </div>

            {/* Action Button */}
            <button
              onClick={handleEnter}
              disabled={isOpening}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-violetDark hover:bg-mutedPurple text-warmCream text-sm font-mono tracking-wider border border-lavender/30 transition-all cursor-pointer shadow-subtle-purple group"
            >
              <Sparkles className="w-4 h-4 text-lavender group-hover:rotate-12 transition-transform" />
              <span>{secretEntrance.ctaButton}</span>
            </button>
          </motion.div>

          {/* Understated bottom line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-14 text-[11px] font-mono text-stoneMuted/50 tracking-wider"
          >
            [ handcrafted with intentional care & zero templates ]
          </motion.p>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};
