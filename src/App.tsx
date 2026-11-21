import React, { useState } from 'react';
import { ModelNavbar } from './components/ModelNavbar';
import { HeroPinnedName } from './components/HeroPinnedName';
import { TheBookGallery } from './components/TheBookGallery';
import { CompCardSection } from './components/CompCardSection';
import { RunwayArchive } from './components/RunwayArchive';
import { DigitalsPolaroids } from './components/DigitalsPolaroids';
import { PressQuotesSection } from './components/PressQuotesSection';
import { BookingSection } from './components/BookingSection';
import { ModelFooter } from './components/ModelFooter';
import { BookingInquiryModal } from './components/BookingInquiryModal';

export const App: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  const handleScrollToCompCard = () => {
    const el = document.getElementById('comp-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#0A0A0A] selection:bg-black selection:text-white overflow-x-hidden font-sans">
      {/* 00: Sticky Luxury Editorial Header Navigation */}
      <ModelNavbar
        onOpenBooking={handleOpenBooking}
        onOpenCompCard={handleScrollToCompCard}
      />

      <main>
        {/* 01: Hero Section with GSAP ScrollTrigger PIN for "AASHIMA GUPTA" */}
        <HeroPinnedName />

        {/* 02: Selected Works / The Book (Editorial Gallery & Lightbox) */}
        <TheBookGallery />

        {/* 03: High-Fashion Composite Card (Specs, Metric/Imperial Toggle, Print & Copy) */}
        <CompCardSection />

        {/* 04: Runway Archive (Interactive Fashion Weeks & Shows with Hover Tear-Sheet) */}
        <RunwayArchive />

        {/* 05: Raw Digitals / Daylight Casting Polaroids */}
        <DigitalsPolaroids />

        {/* 06: Contrasting Black Haute Couture Section (Press, Endorsements & Quotes) */}
        <PressQuotesSection />

        {/* 07: Global Agency Representation & Direct Casting Inquiry Form */}
        <BookingSection onOpenModal={handleOpenBooking} />
      </main>

      {/* 08: Minimalist Roman Footer */}
      <ModelFooter />

      {/* Global Booking & Casting Modal */}
      <BookingInquiryModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
      />
    </div>
  );
};

export default App;
