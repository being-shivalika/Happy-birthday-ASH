import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MODEL_DATA } from '../config/modelData';
import { ArrowDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const HeroPinnedName: React.FC = () => {
  const triggerSectionRef = useRef<HTMLDivElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const statsTickerRef = useRef<HTMLDivElement>(null);
  const backgroundEmblemRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const trigger = triggerSectionRef.current;
    const pinTarget = pinTargetRef.current;
    const name = nameRef.current;
    const subtitle = subtitleRef.current;
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;
    const statsTicker = statsTickerRef.current;
    const emblem = backgroundEmblemRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (!trigger || !pinTarget || !name) return;

    // Use gsap.context for clean cleanup in React 19
    const ctx = gsap.context(() => {
      // 1. Initial entrance animation
      const tlIntro = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });
      tlIntro
        .fromTo(name, { opacity: 0, y: 30, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, delay: 0.2 })
        .fromTo(subtitle, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.8')
        .fromTo(scrollIndicator, { opacity: 0 }, { opacity: 1 }, '-=0.4');

      // 2. The GSAP ScrollTrigger PIN Sequence
      const tlPin = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: '+=200%', // Gives 2 full viewports of smooth pinned interaction
          pin: pinTarget,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // While AASHIMA GUPTA remains pinned center stage:
      // Left and right editorial cards glide in with depth, rotation, and luxury shadows
      tlPin
        // Hide scroll hint
        .to(scrollIndicator, { opacity: 0, y: 20, duration: 0.2 }, 0)
        // Background Roman emblem subtly scales
        .to(emblem, { scale: 1.25, opacity: 0.06, ease: 'none', duration: 1 }, 0)
        // Name letter-spacing widens subtly with royal presence
        .to(name, { letterSpacing: '0.32em', scale: 0.92, y: -40, duration: 1, ease: 'power1.out' }, 0)
        // Subtitle moves with the name
        .to(subtitle, { y: -30, opacity: 0.75, duration: 1, ease: 'power1.out' }, 0)
        // Left editorial image (Ash portrait) glides in from bottom-left with subtle tilt
        .fromTo(
          leftCard,
          { x: -160, y: 180, opacity: 0, rotation: -3 },
          { x: 0, y: 0, opacity: 1, rotation: -1.5, duration: 0.9, ease: 'power2.out' },
          0.1
        )
        // Right editorial image (Vogue noir silhouette) glides in from bottom-right with subtle tilt
        .fromTo(
          rightCard,
          { x: 160, y: 180, opacity: 0, rotation: 3 },
          { x: 0, y: 0, opacity: 1, rotation: 1.5, duration: 0.9, ease: 'power2.out' },
          0.15
        )
        // Bottom stats ticker reveals across the base
        .fromTo(
          statsTicker,
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          0.3
        );
    }, trigger);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={triggerSectionRef} className="relative w-full bg-[#FAFAFA]">
      {/* Pinned Target Container */}
      <div
        ref={pinTargetRef}
        className="w-full h-screen relative flex flex-col justify-between items-center px-4 sm:px-8 py-20 sm:py-24 overflow-hidden border-b border-black/5"
      >
        {/* Subtle Luxury Background Grain & Roman Watermark */}
        <div className="absolute inset-0 bg-grain pointer-events-none" />
        <div
          ref={backgroundEmblemRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none transition-transform"
        >
          <span className="font-roman text-[40vw] leading-none font-bold text-black tracking-tighter">
            AG
          </span>
        </div>

        {/* Center: Monumental Pinned Name & Floating Editorial Cards */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-center justify-center my-auto">
          {/* THE PINNED NAME: AASHIMA GUPTA in Royal Roman Majuscules */}
          <div className="text-center px-2 select-none">
            <h1
              ref={nameRef}
              className="font-roman text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-black font-medium tracking-[0.22em] uppercase leading-none transition-all"
            >
              AASHIMA GUPTA
            </h1>

            <div
              ref={subtitleRef}
              className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm tracking-[0.35em] uppercase text-neutral-500 font-sans font-light"
            >
              <span>HAUTE COUTURE</span>
              <span className="text-neutral-300">•</span>
              <span>EDITORIAL</span>
              <span className="text-neutral-300">•</span>
              <span>RUNWAY</span>
            </div>
          </div>

          {/* Floating Editorial Photo Cards (Gliding in during the Pin scrub) */}
          <div className="w-full max-w-5xl mx-auto mt-6 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-8 px-2 sm:px-6 pointer-events-none">
            {/* Left Card: Ash Close-up Portrait */}
            <div
              ref={leftCardRef}
              className="flex justify-end opacity-0 pointer-events-auto"
            >
              <div className="group relative w-36 sm:w-56 md:w-64 aspect-[3/4] bg-white p-2 sm:p-2.5 shadow-luxury border border-black/10 transition-transform duration-500 hover:scale-[1.02]">
                <div className="w-full h-full overflow-hidden bg-neutral-100">
                  <img
                    src={MODEL_DATA.talent.portrait}
                    alt="Aashima Gupta Portrait"
                    className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500">
                  <span>HEADSHOT / COMP</span>
                  <span className="font-mono text-neutral-400">NO. 01</span>
                </div>
              </div>
            </div>

            {/* Right Card: Editorial Look 01 (Vogue Noir) */}
            <div
              ref={rightCardRef}
              className="flex justify-start opacity-0 pointer-events-auto"
            >
              <div className="group relative w-36 sm:w-56 md:w-64 aspect-[3/4] bg-white p-2 sm:p-2.5 shadow-luxury border border-black/10 transition-transform duration-500 hover:scale-[1.02]">
                <div className="w-full h-full overflow-hidden bg-neutral-100">
                  <img
                    src={MODEL_DATA.portfolioWorks[0].image}
                    alt="Aashima Gupta Editorial"
                    className="w-full h-full object-cover object-center grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500">
                  <span>EDITORIAL NOIR</span>
                  <span className="font-mono text-neutral-400">NO. 02</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Model Physical Metrics & Location Matrix */}
        <div
          ref={statsTickerRef}
          className="relative z-10 w-full max-w-5xl mx-auto px-4 opacity-0"
        >
          <div className="bg-white/80 backdrop-blur-md border border-black/10 py-3 px-4 sm:px-6 shadow-comp rounded-sm flex flex-wrap items-center justify-between gap-y-2 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-sans text-neutral-700">
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 font-normal">HEIGHT:</span>
              <span className="font-semibold text-black">{MODEL_DATA.stats.height.imperial} ({MODEL_DATA.stats.height.metric})</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2">
              <span className="text-neutral-400 font-normal">BUST/WAIST/HIPS:</span>
              <span className="font-semibold text-black">32B • 24" • 35"</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-neutral-400 font-normal">SHOES:</span>
              <span className="font-semibold text-black">{MODEL_DATA.stats.shoes.eu} / {MODEL_DATA.stats.shoes.us}</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-neutral-400 font-normal">EYES:</span>
              <span className="font-semibold text-black">{MODEL_DATA.stats.eyes}</span>
            </div>
            <div className="flex items-center space-x-1.5 text-black font-semibold">
              <Sparkles className="w-3 h-3 text-neutral-400" />
              <span>PARIS • MILAN • NYC • MUMBAI</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 pointer-events-none"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-neutral-400 font-sans">
            SCROLL TO DISCOVER
          </span>
          <ArrowDown className="w-3.5 h-3.5 text-neutral-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
};
