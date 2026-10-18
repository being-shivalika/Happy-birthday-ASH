import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import { CrownDoodle, StarDoodle } from './DoodleDecorations';
import { ShieldAlert, Zap, Flame, Award, ChevronDown } from 'lucide-react';
import { playSparkleChime } from '../utils/soundEffects';

export const CharacterSheet: React.FC = () => {
  const { characterSheet, recipient } = BIRTHDAY_DATA;
  const [expandedTrait, setExpandedTrait] = useState<string | null>(null);

  const handleToggleTrait = (traitName: string) => {
    if (expandedTrait === traitName) {
      setExpandedTrait(null);
    } else {
      setExpandedTrait(traitName);
      playSparkleChime();
    }
  };

  return (
    <section id="character" className="py-24 sm:py-32 px-6 sm:px-12 bg-midnight bg-grain text-warmCream border-t border-lavender/10 relative overflow-hidden">
      
      {/* Background Lighting Depth */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-violetDark/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-mutedPurple/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <span className="text-xs font-mono text-lavender/60 tracking-widest uppercase block mb-3">
            [ {characterSheet.sectionLabel} ]
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl text-warmCream tracking-tight mb-4">
            {characterSheet.title}{' '}
            <span className="italic font-normal text-lavender">
              {characterSheet.titleItalic}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-stoneMuted leading-relaxed font-normal">
            {characterSheet.subtitle}
          </p>
        </div>

        {/* Character Sheet Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Character Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-midnight-surface border border-lavender/20 shadow-subtle-purple relative"
          >
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-lavender/10 pb-4 mb-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-lavender/50 uppercase block">
                  SUBJECT DOSSIER
                </span>
                <h3 className="font-serif text-2xl text-warmCream">
                  {recipient.name}
                </h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-softPink/15 border border-softPink/30 text-softPink text-[11px] font-mono flex items-center gap-1.5">
                <Flame className="w-3 h-3" />
                <span>THREAT: MAXIMUM</span>
              </span>
            </div>

            {/* Avatar with Hand-Drawn Crown */}
            <div className="relative mx-auto w-44 sm:w-48 aspect-square mb-6">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                <CrownDoodle className="w-14 h-10 text-warmCream drop-shadow-sm" />
              </div>

              <div className="w-full h-full rounded-xl overflow-hidden border border-lavender/30 bg-midnight p-1">
                <img
                  src={recipient.portraitImage}
                  alt={recipient.name}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/capybara.jpeg';
                  }}
                />
              </div>

              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-midnight border border-lavender/25 text-[10px] font-mono text-lavender">
                LVL 99 ICON
              </div>
            </div>

            {/* Class & Alignment */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-xl bg-midnight/60 border border-lavender/10">
                <span className="text-[10px] font-mono uppercase text-stoneMuted block mb-0.5">
                  CLASS
                </span>
                <span className="font-serif text-sm text-lavender font-semibold">
                  {characterSheet.characterClass}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-midnight/60 border border-lavender/10">
                <span className="text-[10px] font-mono uppercase text-stoneMuted block mb-0.5">
                  ROLE
                </span>
                <span className="font-serif text-sm text-softPink font-semibold">
                  {characterSheet.characterRole}
                </span>
              </div>
            </div>

            {/* Equipped Perks */}
            <div className="p-4 rounded-xl bg-midnight/60 border border-lavender/10">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase text-lavender tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-softPink" />
                  <span>PASSIVE BUFFS</span>
                </span>
                <StarDoodle className="w-3.5 h-3.5" color="#C4B0E8" />
              </div>

              <div className="space-y-2.5">
                {characterSheet.specialPerks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-left">
                    <span className="text-sm select-none mt-0.5">{perk.icon}</span>
                    <div>
                      <div className="font-serif text-sm text-warmCream">
                        {perk.name}
                      </div>
                      <div className="text-[11px] text-stoneMuted leading-tight">
                        {perk.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Annotation */}
            <div className="mt-5 text-center">
              <span className="font-handwriting text-lg text-lavender">
                ⚠️ Dangerously charismatic. Approach with snacks.
              </span>
            </div>

          </motion.div>

          {/* RIGHT: Attribute Metrics with Animated Meters & Click-to-Reveal Lore */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-lavender/10">
              <h3 className="font-serif text-xl text-warmCream flex items-center gap-2">
                <Award className="w-4 h-4 text-lavender" />
                <span>Attribute Diagnostics</span>
              </h3>
              <span className="text-xs font-mono text-stoneMuted">
                [ tap any stat to reveal incident lore ]
              </span>
            </div>

            {characterSheet.traits.map((trait, index) => {
              const isExpanded = expandedTrait === trait.name;

              return (
                <motion.div
                  key={trait.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onClick={() => handleToggleTrait(trait.name)}
                  className={`p-4 sm:p-5 rounded-xl transition-all cursor-pointer border ${
                    isExpanded
                      ? 'bg-midnight-card border-lavender/40 shadow-subtle-purple'
                      : 'bg-midnight-surface/80 border-lavender/15 hover:border-lavender/30'
                  }`}
                >
                  {/* Name, Score, Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-serif text-lg text-warmCream">
                        {trait.name}
                      </span>
                      <span
                        style={{ color: trait.color, borderColor: `${trait.color}40`, backgroundColor: `${trait.color}15` }}
                        className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider border"
                      >
                        {trait.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm text-warmCream font-semibold">
                        {trait.score}
                        <span className="text-xs text-stoneMuted font-normal">/100</span>
                      </span>
                      <ChevronDown className={`w-3.5 h-3.5 text-stoneMuted transition-transform ${isExpanded ? 'rotate-180 text-lavender' : ''}`} />
                    </div>
                  </div>

                  {/* Meter Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-midnight border border-lavender/10 p-0.5 overflow-hidden mb-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${trait.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      style={{ backgroundColor: trait.color }}
                      className="h-full rounded-full"
                    />
                  </div>

                  <p className="text-xs text-stoneMuted leading-relaxed">
                    {trait.description}
                  </p>

                  {/* Click-to-Reveal Humorous Extra Lore */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pt-3 border-t border-lavender/10">
                          <span className="text-[10px] font-mono uppercase text-softPink tracking-wider block mb-1">
                            ✦ CLASSIFIED INCIDENT REPORT:
                          </span>
                          <p className="font-handwriting text-base text-lavender leading-snug">
                            "{trait.extraHumorousLore}"
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}

            <div className="pt-2 flex items-center justify-between text-xs font-mono text-stoneMuted/60">
              <span>Overall combat rating: completely unhinged</span>
              <ShieldAlert className="w-3.5 h-3.5 text-softPink" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
