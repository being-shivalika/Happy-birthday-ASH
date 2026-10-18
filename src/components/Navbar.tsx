import React, { useState } from 'react';
import { BIRTHDAY_DATA } from '../config/birthdayData';
import { Volume2, VolumeX } from 'lucide-react';
import { playSparkleChime } from '../utils/soundEffects';

interface NavbarProps {
  onRestartEntrance?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRestartEntrance }) => {
  const [isMuted, setIsMuted] = useState(false);
  const { recipient } = BIRTHDAY_DATA;

  const navLinks = [
    { label: "memories", href: "#memories" },
    { label: "analysis", href: "#character" },
    { label: "truths", href: "#appreciation" },
    { label: "wishes", href: "#wishes" },
    { label: "the party", href: "#the-party" },
    { label: "letter", href: "#letter" },
  ];

  return (
    <header className="sticky top-0 z-40 px-6 sm:px-12 py-4 bg-midnight/85 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Monogram / Title */}
        <button
          onClick={() => {
            if (onRestartEntrance) onRestartEntrance();
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <span className="font-serif italic text-lg sm:text-xl text-warmCream group-hover:text-lavender transition-colors">
            for {recipient.name.toLowerCase()}
          </span>
          <span className="text-stoneMuted text-xs font-mono">/ {recipient.label}</span>
        </button>

        {/* Editorial Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-stoneMuted hover:text-warmCream transition-colors tracking-wider"
            >
              [ {link.label} ]
            </a>
          ))}
        </nav>

        {/* Minimal Audio Mute/Unmute */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setIsMuted(!isMuted);
              if (isMuted) playSparkleChime();
            }}
            className="flex items-center gap-1.5 text-xs font-mono text-stoneMuted hover:text-warmCream transition-colors p-1 cursor-pointer"
            title={isMuted ? "Unmute audio" : "Mute audio"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-lavender" />}
            <span className="hidden sm:inline text-[11px]">{isMuted ? "sound off" : "sound on"}</span>
          </button>
        </div>

      </div>
    </header>
  );
};
