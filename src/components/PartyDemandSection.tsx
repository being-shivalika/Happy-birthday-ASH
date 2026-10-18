import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import { ArrowRight, RotateCcw } from 'lucide-react';
import { playSparkleChime } from '../utils/soundEffects';

export const PartyDemandSection: React.FC = () => {
  const { partyDemand } = BIRTHDAY_DATA;
  const [revealStep, setRevealStep] = useState<number>(0);
  const [selectedResponse, setSelectedResponse] = useState<'plan' | 'audacity' | null>(null);

  const handleNextStep = () => {
    setRevealStep(prev => prev + 1);
    playSparkleChime();
  };

  const handleReset = () => {
    setRevealStep(0);
    setSelectedResponse(null);
  };

  return (
    <section id="the-party" className="py-28 sm:py-36 px-6 sm:px-12 bg-midnight bg-grain text-warmCream border-t border-white/10 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violetDark/35 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Section Label */}
        <span className="text-xs font-mono text-lavender/60 tracking-widest uppercase block mb-4">
          [ {partyDemand.sectionLabel} ]
        </span>

        {/* Section Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-warmCream font-normal tracking-tight mb-8">
          {partyDemand.title}
        </h2>

        {/* STEP-BY-STEP REVEAL SEQUENCE */}
        <div className="min-h-[260px] flex flex-col items-center justify-center">
          
          {/* STEP 0: First sentence */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <p className="text-base sm:text-lg text-stoneMuted font-normal leading-relaxed max-w-xl mx-auto">
              "{partyDemand.setup1}"
            </p>
          </motion.div>

          {revealStep === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violetDark hover:bg-mutedPurple text-xs font-mono tracking-wider text-warmCream border border-lavender/30 transition-all cursor-pointer shadow-subtle-purple active:scale-95"
              >
                <span>continue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}

          {/* STEP 1: Second sentence */}
          {revealStep >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="italic font-serif text-xl sm:text-2xl text-warmCream">
                "{partyDemand.setup2}"
              </p>
            </motion.div>
          )}

          {revealStep === 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={handleNextStep}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-violetDark hover:bg-mutedPurple text-xs font-mono tracking-wider text-warmCream border border-lavender/30 transition-all cursor-pointer shadow-subtle-purple active:scale-95"
              >
                <span>[ see the demand → ]</span>
              </button>
            </motion.div>
          )}

          {/* STEP 2: The Big Question + Responses */}
          {revealStep >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full my-6"
            >
              {/* The Big Punchline Heading */}
              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl text-warmCream font-bold tracking-tight leading-tight mb-4">
                {partyDemand.revealQuestion}
              </h3>

              {/* Follow-up text */}
              <p className="text-sm sm:text-base text-stoneMuted max-w-lg mx-auto mb-3">
                {partyDemand.followUp}
              </p>

              {/* Handwritten Punchline */}
              <div className="mb-10">
                <span className="font-handwriting text-xl sm:text-2xl text-softPink">
                  — {partyDemand.handwrittenPunchline}
                </span>
              </div>

              {/* Two Interactive Response Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => setSelectedResponse('plan')}
                  className={`px-6 py-3 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer border active:scale-95 ${
                    selectedResponse === 'plan'
                      ? 'bg-lavender text-midnight border-lavender font-bold shadow-subtle-purple'
                      : 'border-white/15 text-stoneMuted hover:border-lavender hover:text-warmCream'
                  }`}
                >
                  "{partyDemand.button1.label}"
                </button>

                <button
                  onClick={() => setSelectedResponse('audacity')}
                  className={`px-6 py-3 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer border active:scale-95 ${
                    selectedResponse === 'audacity'
                      ? 'bg-lavender text-midnight border-lavender font-bold shadow-subtle-purple'
                      : 'border-white/15 text-stoneMuted hover:border-lavender hover:text-warmCream'
                  }`}
                >
                  "{partyDemand.button2.label}"
                </button>
              </div>

              {/* Response Display Box */}
              <AnimatePresence mode="wait">
                {selectedResponse && (
                  <motion.div
                    key={selectedResponse}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-lg mx-auto p-6 rounded-2xl bg-midnight-card border border-lavender/20 text-left shadow-subtle-purple"
                  >
                    <span className="text-[10px] font-mono uppercase text-lavender tracking-wider block mb-2">
                      response logged:
                    </span>
                    <p className="text-sm sm:text-base text-warmCream font-normal leading-relaxed">
                      {selectedResponse === 'plan'
                        ? partyDemand.button1.response
                        : partyDemand.button2.response}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Reset to replay sequence */}
              <div className="mt-8">
                <button
                  onClick={handleReset}
                  className="text-[11px] font-mono text-stoneMuted/60 hover:text-stoneMuted transition-colors inline-flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>replay sequence</span>
                </button>
              </div>

            </motion.div>
          )}

        </div>

        {/* Final Small Line */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center">
          <p className="text-xs font-mono text-stoneMuted/60">
            {partyDemand.footerDuty}
          </p>
        </div>

      </div>
    </section>
  );
};
