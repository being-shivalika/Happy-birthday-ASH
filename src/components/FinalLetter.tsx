import React from 'react';
import { motion } from 'framer-motion';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import { ArrowUpRight } from 'lucide-react';

interface FinalLetterProps {
  onReplay?: () => void;
}

export const FinalLetter: React.FC<FinalLetterProps> = ({ onReplay }) => {
  const { finalLetter } = BIRTHDAY_DATA;

  const handleScrollToTop = () => {
    if (onReplay) {
      onReplay();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="letter" className="py-28 sm:py-36 px-6 sm:px-12 bg-midnight-pure bg-grain text-warmCream border-t border-white/10 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violetDark/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Section Label */}
        <span className="text-xs font-mono text-lavender/60 tracking-widest uppercase block mb-3">
          [ {finalLetter.sectionLabel} ]
        </span>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl text-warmCream tracking-tight mb-12">
          {finalLetter.heading}{' '}
          <span className="italic font-normal text-lavender">
            {finalLetter.headingItalic}
          </span>
        </h2>

        {/* Dark Keepsake Letter Card */}
        <div className="p-8 sm:p-12 rounded-2xl bg-midnight-card border border-lavender/20 shadow-subtle-purple relative space-y-6 text-warmCream text-base sm:text-lg leading-relaxed font-normal">
          <p className="font-serif italic text-2xl text-lavender">
            {finalLetter.salutation}
          </p>

          {finalLetter.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-stoneMuted leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Sign-off & Handwritten Postscript */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <p className="font-serif italic text-lg sm:text-xl text-warmCream">
                {finalLetter.signOff}
              </p>
              <p className="font-handwriting text-xl text-softPink mt-1">
                {finalLetter.handwrittenPostscript}
              </p>
            </div>

            {/* Replay Link */}
            <div>
              <button
                onClick={handleScrollToTop}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-lavender hover:text-warmCream transition-colors cursor-pointer group"
              >
                <span>{finalLetter.replayText}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* ─── FINAL TOUCH: ONE LAST BIRTHDAY WISH ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-28 sm:mt-36 text-center flex flex-col items-center"
        >
          {/* Delicate decorative star detail */}
          <span className="text-softPink/50 text-xs tracking-widest mb-3 select-none">
            ✦
          </span>

          <p className="font-serif text-lg sm:text-xl text-warmCream tracking-wide font-normal">
            and once again, <span className="italic text-lavender font-normal">happy birthday, you.</span> ♡
          </p>

          <p className="font-handwriting text-base sm:text-lg text-stoneMuted mt-2">
            hope this year is kind to you. you deserve that.
          </p>
        </motion.div>

        {/* Minimal Unobtrusive Footer Detail */}
        <footer className="mt-16 text-center">
          <p className="text-[10px] font-mono text-stoneMuted/30 tracking-widest uppercase">
            [ with love ]
          </p>
        </footer>

      </div>
    </section>
  );
};
