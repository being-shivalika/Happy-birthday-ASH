import confetti from 'canvas-confetti';

/**
 * Fires a celebratory birthday confetti blast with custom colors
 */
export const triggerBirthdayConfetti = (origin?: { x?: number; y?: number }) => {
  const count = 200;
  const defaults = {
    origin: { x: origin?.x ?? 0.5, y: origin?.y ?? 0.7 },
    zIndex: 9999,
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
      colors: ['#792BFF', '#FF8DBD', '#FFE600', '#B9A0FF', '#00F0FF', '#FFFFFF', '#FFF4E8'],
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

/**
 * Continuous subtle star burst
 */
export const triggerStarBurst = (x = 0.5, y = 0.5) => {
  confetti({
    particleCount: 40,
    angle: 90,
    spread: 360,
    origin: { x, y },
    colors: ['#FFE600', '#FF8DBD', '#B9A0FF', '#792BFF'],
    shapes: ['star'],
    scalar: 1.1,
    ticks: 120,
    zIndex: 9999,
  });
};
