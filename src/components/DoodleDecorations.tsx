import React from 'react';

// Playful 4-Point Star
export const StarDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "currentColor",
}) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20 2C20.5 12 28 19.5 38 20C28 20.5 20.5 28 20 38C19.5 28 12 20.5 2 20C12 19.5 19.5 12 20 2Z"
      fill={color}
    />
  </svg>
);

// Hand-Drawn Crown Doodle (from Dikshant reference)
export const CrownDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-10 h-8",
  color = "#FFE600",
}) => (
  <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M5 32L12 12L24 22L32 6L42 22L52 12L56 32H5Z"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="12" cy="10" r="2.5" fill={color} />
    <circle cx="32" cy="4" r="2.5" fill={color} />
    <circle cx="52" cy="10" r="2.5" fill={color} />
  </svg>
);

// Curved Hand-Drawn Arrow (with organic wobble)
export const CurvedArrowDoodle: React.FC<{ className?: string; color?: string; flip?: boolean }> = ({
  className = "w-16 h-12",
  color = "#FFE600",
  flip = false,
}) => (
  <svg
    viewBox="0 0 100 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${flip ? '-scale-x-100' : ''}`}
  >
    <path
      d="M10 45C30 50 65 48 85 22"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    <path
      d="M68 18L87 20L84 38"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Playful Hand-Drawn Squiggle
export const SquiggleDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-24 h-6",
  color = "#FF8DBD",
}) => (
  <svg viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M5 10C15 2 25 18 35 10C45 2 55 18 65 10C75 2 85 18 95 10C105 2 115 18 118 10"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

// Hand-Drawn Sparkle Crosses
export const SparkleDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-5 h-5",
  color = "#FFE600",
}) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2V22M2 12H22" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Cute Hand-Drawn Smiley / Wink Doodle
export const SmileyDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-8 h-8",
  color = "#2CE885",
}) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="20" cy="20" r="16" stroke={color} strokeWidth="3" />
    <circle cx="14" cy="16" r="2.5" fill={color} />
    <path d="M23 16C25 14 28 14 29 16" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M14 26C16 30 24 30 26 26" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Lightning Bolt Doodle
export const LightningDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-8",
  color = "#FFE600",
}) => (
  <svg viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M14 2L3 18H13L10 34L22 15H12L14 2Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);
