import React, { useState, useMemo } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Search,
  HelpCircle,
  MessageCircle,
  Bed
} from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FaqPage: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-5': true
  });

  const categories = [
    'All',
    'Rooms & Pricing',
    'Amenities & Food',
    'Rules & Timings',
    'Booking & Visit'
  ];

  const filteredFaqs = useMemo(() => {
    return HOSTEL_CONFIG.faqs.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;
      if (activeCategory === 'All') return true;
      return item.category === activeCategory;
    });
  }, [searchTerm, activeCategory]);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Common Resident Queries
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about room tariffs, Wi-Fi, check-in requirements, food packages, parking, and daily hostel living rules.
          </p>
        </div>
      </section>

      {/* Search and Category Tabs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type your question (e.g. Wi-Fi, gate timings, documents, meals)..."
            className="w-full pl-11 pr-4 py-3 rounded-2xl border border-slate-200 bg-white text-sm text-slate-900 shadow-soft focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-600"
          />
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs sm:text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 shadow-soft">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No matching questions found.</p>
              <p className="text-xs text-slate-500 mt-1">Try another search term or ask us directly on WhatsApp.</p>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus:outline-none focus:bg-slate-50"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="text-sm sm:text-base font-bold text-navy-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>

                    <div className="p-1 rounded-lg text-slate-400 group-hover:text-slate-700 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-amber-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
                      <p>{faq.answer}</p>
                      <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-2">
                        <span className="uppercase font-semibold tracking-wider text-slate-400">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-950 to-navy-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-navy-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white">Have a specific question not covered here?</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Our hostel manager is always available to assist with room allotment, visiting slots, and customized arrangements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href={createWhatsAppUrl({ customMessage: 'Hello, I have an inquiry regarding hostel facilities and policies.' })}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>

            <button
              onClick={() => openEnquiryModal()}
              className="py-3 px-5 rounded-xl bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <Bed className="w-4 h-4" />
              <span>Book / Enquire</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
