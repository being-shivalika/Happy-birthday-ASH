// Web Audio API Synthesizer for ambient chimes, clicks, and soundtrack themes
let audioCtx: AudioContext | null = null;
let currentTrackOscillators: { stop: () => void }[] = [];
let isTrackPlaying = false;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a delicate magic sparkle chime
 */
export const playSparkleChime = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.08);

      gain.gain.setValueAtTime(0.01, ctx.currentTime + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + idx * 0.08 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.08 + 0.6);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.08);
      osc.stop(ctx.currentTime + idx * 0.08 + 0.65);
    });
  } catch (err) {
    console.debug('Audio not supported or permitted', err);
  }
};

/**
 * Play celebratory gift fanfare
 */
export const playFanfareChime = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const notes = [440, 554.37, 659.25, 880, 1108.73]; // A4, C#5, E5, A5, C#6
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);

      gain.gain.setValueAtTime(0.01, ctx.currentTime + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + idx * 0.1 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.1 + 0.9);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.1);
      osc.stop(ctx.currentTime + idx * 0.1 + 1.0);
    });
  } catch (err) {
    console.debug('Audio fanfare failed', err);
  }
};

/**
 * Play gentle cosmic portal chime for the entrance
 */
export const playPortalChime = () => {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const freqs = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 987.77, 1046.50];
    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);

      gain.gain.setValueAtTime(0.005, ctx.currentTime + idx * 0.09);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + idx * 0.09 + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.09 + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.09);
      osc.stop(ctx.currentTime + idx * 0.09 + 0.85);
    });
  } catch (err) {
    console.debug('Portal chime failed', err);
  }
};

/**
 * Stop any ongoing synth track
 */
export const stopTrackSynth = () => {
  currentTrackOscillators.forEach(item => {
    try {
      item.stop();
    } catch {
      // ignore
    }
  });
  currentTrackOscillators = [];
  isTrackPlaying = false;
};

/**
 * Synthesize a melodic chill loop for the track preview
 */
export const playTrackSynth = (
  theme: 'dreamy' | 'upbeat' | 'chill' | 'lofi' = 'dreamy',
  onTick?: (activeNote: number) => void
) => {
  stopTrackSynth();

  const ctx = getAudioContext();
  if (!ctx) return () => {};

  isTrackPlaying = true;

  const scales = {
    dreamy: [440, 523.25, 659.25, 783.99, 987.77, 1046.50],
    upbeat: [523.25, 587.33, 659.25, 783.99, 880, 1046.50],
    chill: [392.00, 440.00, 523.25, 659.25, 783.99],
    lofi: [349.23, 440.00, 523.25, 659.25, 698.46],
  };

  const currentScale = scales[theme] || scales.dreamy;
  let step = 0;
  let intervalId: number | null = null;

  const playStep = () => {
    if (!isTrackPlaying) return;
    try {
      const freq = currentScale[step % currentScale.length];
      if (onTick) onTick(step % currentScale.length);

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = theme === 'lofi' ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0.01, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.09, ctx.currentTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.7);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.75);

      step++;
    } catch {
      // ignore
    }
  };

  playStep();
  intervalId = window.setInterval(playStep, 500);

  currentTrackOscillators.push({
    stop: () => {
      if (intervalId) clearInterval(intervalId);
    },
  });

  return () => {
    stopTrackSynth();
  };
};
