import React, { useState } from 'react';
import { SecretEntrance } from './components/SecretEntrance';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ScrapbookSection } from './components/ScrapbookSection';
import { CharacterSheet } from './components/CharacterSheet';
import { AppreciationSection } from './components/AppreciationSection';
import { WishesSection } from './components/WishesSection';
import { PartyDemandSection } from './components/PartyDemandSection';
import { FinalLetter } from './components/FinalLetter';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const handleEnterUniverse = () => {
    setHasEntered(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleRestartUniverse = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setHasEntered(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-midnight text-warmCream selection:bg-mutedPurple selection:text-white overflow-x-hidden">
      {!hasEntered ? (
        <SecretEntrance onEnter={handleEnterUniverse} />
      ) : (
        <div className="relative animate-fadeIn">
          {/* Header Navigation */}
          <Navbar onRestartEntrance={handleRestartUniverse} />

          {/* 01: Hero Birthday Reveal */}
          <HeroSection />

          {/* 02: Memory Scrapbook */}
          <ScrapbookSection />

          {/* 03: Friendship Character Sheet */}
          <CharacterSheet />

          {/* 04: Things I Appreciate About You */}
          <AppreciationSection />

          {/* 05: The Birthday Wishes */}
          <WishesSection />

          {/* 06: The Party Demand Interruption */}
          <PartyDemandSection />

          {/* 07: Final Letter */}
          <FinalLetter onReplay={handleRestartUniverse} />
        </div>
      )}
    </div>
  );
};

export default App;
