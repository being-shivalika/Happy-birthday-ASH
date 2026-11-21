import React, { useState } from 'react';
import { MODEL_DATA } from '../config/modelData';
import { Send, CheckCircle2, Globe, Clock, ArrowUpRight } from 'lucide-react';

interface BookingSectionProps {
  onOpenModal?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    shootType: 'Editorial',
    city: 'Paris',
    dates: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <section id="agencies" className="py-24 sm:py-32 bg-white border-b border-black/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-8 mb-16">
          <div>
            <span className="text-[11px] tracking-[0.35em] uppercase font-sans text-neutral-400 block mb-2">
              CHAPTER 05 / GLOBAL REPRESENTATION
            </span>
            <h2 className="font-roman text-3xl sm:text-4xl md:text-5xl text-black font-semibold tracking-[0.2em] uppercase">
              BOOKINGS & INQUIRIES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm font-sans text-neutral-500 leading-relaxed">
            For runway availability, campaign options, and high-fashion editorial commissions across Europe, North America, and Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Worldwide Agency Boards (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-roman text-sm tracking-[0.25em] uppercase text-black font-semibold mb-6 flex items-center space-x-2">
              <Globe className="w-4 h-4 text-neutral-500" />
              <span>AGENCY DISTRIBUTION</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {MODEL_DATA.agencies.map((agency, index) => (
                <div
                  key={index}
                  className="bg-[#FAFAFA] border border-neutral-200 p-5 shadow-comp hover:shadow-luxury hover:border-black/30 transition-all duration-300"
                >
                  <div className="text-[9px] tracking-[0.25em] uppercase font-sans text-neutral-400 mb-1">
                    {agency.city}
                  </div>
                  <h4 className="font-roman text-sm font-semibold tracking-[0.15em] text-black uppercase mb-1">
                    {agency.agency}
                  </h4>
                  <p className="text-[11px] font-sans text-neutral-500 mb-4">
                    {agency.board}
                  </p>
                  <a
                    href={`mailto:${agency.contact}`}
                    className="inline-flex items-center space-x-1 text-[10px] tracking-[0.2em] uppercase font-medium text-black hover:text-neutral-600 transition-colors border-b border-black/30 pb-0.5"
                  >
                    <span>CONTACT BOARD</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>

            {/* Direct Booking Desk Note */}
            <div className="bg-neutral-50 border border-neutral-200/80 p-5 mt-6">
              <div className="text-xs font-sans text-neutral-600 space-y-2">
                <div className="flex items-center space-x-2 text-black font-semibold tracking-wider uppercase text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-neutral-500" />
                  <span>DIRECT INQUIRIES & CASTING DESK</span>
                </div>
                <p className="text-xs leading-relaxed text-neutral-500">
                  Direct management responds to qualified casting calls within 24 business hours. Passport and visa status clear for international travel.
                </p>
                <div className="pt-2 text-xs font-mono text-neutral-700">
                  DIRECT: <a href="mailto:bookings@aashimagupta.com" className="underline hover:text-black font-semibold">bookings@aashimagupta.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Casting Inquiry Form (6 cols) */}
          <div className="lg:col-span-6 bg-[#FAFAFA] border border-neutral-200 p-6 sm:p-8 shadow-luxury">
            <h3 className="font-roman text-lg text-black font-semibold tracking-[0.2em] uppercase mb-1">
              CASTING INQUIRY FORM
            </h3>
            <p className="text-xs tracking-[0.2em] uppercase font-sans text-neutral-400 mb-6">
              SUBMIT A CAMPAIGN OR RUNWAY BRIEF
            </p>

            {formSubmitted ? (
              <div className="py-12 px-4 text-center bg-white border border-neutral-200 shadow-sm animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-black mx-auto mb-4" />
                <h4 className="font-roman text-xl text-black font-semibold tracking-[0.18em] uppercase mb-2">
                  INQUIRY TRANSMITTED
                </h4>
                <p className="text-xs font-sans text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you. Your project brief has been logged with Aashima Gupta's direct casting desk. A representative will review dates and availability promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-6 px-4 py-2 text-[10px] tracking-[0.2em] uppercase font-sans font-medium border border-black text-black hover:bg-black hover:text-white transition-all"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1.5">
                      CLIENT / BRAND NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maison Dior / Vogue"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1.5">
                      DIRECT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="casting@brand.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1.5">
                      PROJECT CATEGORY
                    </label>
                    <select
                      value={formData.shootType}
                      onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="Haute Couture">Haute Couture</option>
                      <option value="Editorial">Magazine Editorial</option>
                      <option value="Runway">Fashion Week Runway</option>
                      <option value="Campaign">Global Brand Campaign</option>
                      <option value="Lookbook">Designer Lookbook</option>
                      <option value="Beauty">Beauty / Close-Up</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1.5">
                      PRIMARY LOCATION
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-neutral-300 text-xs text-black focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="Paris">Paris, France</option>
                      <option value="Milan">Milan, Italy</option>
                      <option value="New York">New York, USA</option>
                      <option value="London">London, UK</option>
                      <option value="Mumbai">Mumbai, India</option>
                      <option value="International Location">Other International Location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1.5">
                    PROJECT DATES / TIMEFRAME
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. October 24-28, 2026"
                    value={formData.dates}
                    onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1.5">
                    PROJECT BRIEF / CASTING DETAILS
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe creative direction, photographer, usage rights, and schedule..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2.5 bg-white border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-black hover:bg-neutral-800 text-white text-xs tracking-[0.25em] uppercase font-sans font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-sm rounded-sm"
                >
                  <span>TRANSMIT CASTING INQUIRY</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
