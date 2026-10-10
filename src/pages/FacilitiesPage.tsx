import React, { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageCircle,
  Info
} from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { FacilityIcon } from '../components/facilities/FacilityIcon';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const FacilitiesPage: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'All' | 'Confirmed' | 'Optional' | 'Essentials' | 'Security & Hygiene' | 'Living & Comfort' | 'Services & Food'>('All');

  // Filter logic
  const filteredFacilities = useMemo(() => {
    return HOSTEL_CONFIG.facilities.filter((item) => {
      // Search term
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.statusNote && item.statusNote.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      // Category filter
      if (activeFilter === 'All') return true;
      if (activeFilter === 'Confirmed') return item.isConfirmed;
      if (activeFilter === 'Optional') return !item.isConfirmed;
      return item.category === activeFilter;
    });
  }, [searchTerm, activeFilter]);

  const confirmedCount = HOSTEL_CONFIG.facilities.filter((f) => f.isConfirmed).length;
  const optionalCount = HOSTEL_CONFIG.facilities.filter((f) => !f.isConfirmed).length;

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Amenities & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Facilities at Ganesh Mens Hostel
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Review all 23 hostel amenities below. To ensure complete honesty and transparency, standard inclusions and optional facilities awaiting manager confirmation are clearly labeled.
          </p>
        </div>

        {/* Transparency Banner */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
          <div className="flex items-start sm:items-center gap-3">
            <span className="p-2 rounded-xl bg-amber-200 text-amber-900 shrink-0">
              <Info className="w-5 h-5" />
            </span>
            <div>
              <span className="font-bold text-amber-900">Transparency Commitment:</span> We do not falsely claim that every optional facility is universally active. Items marked "Subject to Confirmation" are verified upon owner consultation or opted as part of specific packages.
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-2.5 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-semibold text-xs border border-emerald-300">
              {confirmedCount} Standard
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 font-semibold text-xs border border-amber-300">
              {optionalCount} Optional / Subject to Confirmation
            </span>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-soft">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search any facility (e.g., Wi-Fi, Water, Food, CCTV, Parking)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-600"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
            <button
              onClick={() => setActiveFilter('All')}
              className={`px-3 py-2 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'All'
                  ? 'bg-navy-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All ({HOSTEL_CONFIG.facilities.length})
            </button>
            <button
              onClick={() => setActiveFilter('Confirmed')}
              className={`px-3 py-2 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'Confirmed'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              Standard Confirmed
            </button>
            <button
              onClick={() => setActiveFilter('Optional')}
              className={`px-3 py-2 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                activeFilter === 'Optional'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              Optional / Confirm with Manager
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFacilities.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No matching facilities found</h3>
            <p className="text-sm text-slate-500">Try modifying your search keywords or resetting filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveFilter('All');
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 p-6 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon and Status Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-800 group-hover:bg-gold-500/15 group-hover:text-amber-700 flex items-center justify-center transition-colors">
                      <FacilityIcon name={facility.iconName} className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-[11px] font-mono text-slate-400">
                        #{facility.number}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                          facility.isConfirmed
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-amber-50 text-amber-900 border-amber-300'
                        }`}
                      >
                        {facility.isConfirmed ? 'Standard Included' : 'Subject to Confirmation'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      {facility.category}
                    </span>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-amber-700 transition-colors">
                      {facility.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Bottom status note and footer */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                    {facility.isConfirmed ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    ) : (
                      <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    )}
                    <span>{facility.statusNote}</span>
                  </div>

                  {!facility.isConfirmed && (
                    <a
                      href={createWhatsAppUrl({
                        customMessage: `Inquiry regarding availability of ${facility.title}`
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1"
                    >
                      <span>Ask Manager</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Booking CTA Footer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-5 border border-navy-800 shadow-2xl">
          <span className="text-xs uppercase tracking-wider font-bold text-gold-400">
            Have questions about a specific amenity?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Speak directly with our hostel manager
          </h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            We are happy to answer any questions about meal menus, vehicle parking slots, power backup status, or room availability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openEnquiryModal()}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold text-sm shadow-md transition-all"
            >
              Enquire About Facilities
            </button>
            <a
              href={createWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
