import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingInquiryModal: React.FC<BookingInquiryModalProps> = ({ isOpen, onClose }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    shootType: 'Haute Couture',
    city: 'Paris',
    dates: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.clientName || !formData.email) return;
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-neutral-300 shadow-2xl p-6 sm:p-8 rounded-sm">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-[10px] tracking-[0.28em] uppercase font-sans text-neutral-500 mb-2">
          <ShieldCheck className="w-4 h-4 text-neutral-700" />
          <span>DIRECT CASTING COMMISSIONS</span>
        </div>

        <h3 className="font-roman text-2xl text-black font-semibold tracking-[0.18em] uppercase mb-1">
          BOOK AASHIMA GUPTA
        </h3>
        <p className="text-xs tracking-[0.2em] uppercase font-sans text-neutral-400 mb-6">
          WORLDWIDE AVAILABILITY & RATES
        </p>

        {formSubmitted ? (
          <div className="py-10 text-center animate-fadeIn">
            <CheckCircle2 className="w-12 h-12 text-black mx-auto mb-4" />
            <h4 className="font-roman text-lg text-black font-semibold tracking-[0.18em] uppercase mb-2">
              CASTING BRIEF RECEIVED
            </h4>
            <p className="text-xs font-sans text-neutral-600 max-w-sm mx-auto leading-relaxed mb-6">
              Your inquiry has been routed to Aashima Gupta's international management board. A representative will contact you with availability and option holds.
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-black text-white text-xs tracking-[0.2em] uppercase font-medium hover:bg-neutral-800 transition-colors"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1">
                  CLIENT / FASHION HOUSE *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Saint Laurent / Vogue"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1">
                  OFFICIAL EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="director@house.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1">
                  PROJECT TYPE
                </label>
                <select
                  value={formData.shootType}
                  onChange={(e) => setFormData({ ...formData, shootType: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-black focus:outline-none focus:border-black"
                >
                  <option value="Haute Couture">Haute Couture</option>
                  <option value="Editorial">Magazine Editorial</option>
                  <option value="Runway">Fashion Week Runway</option>
                  <option value="Campaign">Global Campaign</option>
                  <option value="Lookbook">Lookbook</option>
                  <option value="Beauty">Beauty</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1">
                  LOCATION / CITY
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-black focus:outline-none focus:border-black"
                >
                  <option value="Paris">Paris</option>
                  <option value="Milan">Milan</option>
                  <option value="New York">New York</option>
                  <option value="London">London</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Other">Other Global City</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1">
                PROJECT DATES / RUN
              </label>
              <input
                type="text"
                placeholder="e.g. November 2026 / Paris Fashion Week"
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black"
              />
            </div>

            <div>
              <label className="block text-[10px] tracking-[0.2em] uppercase font-sans text-neutral-500 mb-1">
                BRIEF / USAGE RIGHTS / NOTES
              </label>
              <textarea
                rows={3}
                placeholder="Creative team, usage terms, call times, location specs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 bg-neutral-50 border border-neutral-300 text-xs text-black placeholder:text-neutral-400 focus:outline-none focus:border-black resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs tracking-[0.2em] uppercase font-sans text-neutral-600 hover:text-black border border-neutral-300"
              >
                CANCEL
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-black hover:bg-neutral-800 text-white text-xs tracking-[0.25em] uppercase font-sans font-semibold flex items-center space-x-2"
              >
                <span>SEND INQUIRY</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
