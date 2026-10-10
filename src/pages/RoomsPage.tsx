import React, { useState } from 'react';
import {
  Bed,
  Users,
  CheckCircle2,
  Info
} from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const RoomsPage: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();
  const [activeSharingFilter, setActiveSharingFilter] = useState<string>('All');

  const filteredRooms = HOSTEL_CONFIG.rooms.filter((room) => {
    if (activeSharingFilter === 'All') return true;
    return room.sharingType === activeSharingFilter;
  });

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Accommodation & Tariff
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Rooms & Pricing
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Explore our Single, 2-Sharing, 3-Sharing, and 4-Sharing room choices. We maintain spacious configurations with individual beds, personal storage, and high hygiene standards.
          </p>
        </div>

        {/* Tariff Transparency Notice */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-950 flex items-start gap-3 shadow-sm max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-900">Tariff Transparency Notice:</span> The prices, deposit figures, and bed availability shown below are editable placeholders until the hostel owner confirms the latest official rates. Please click <strong>"Enquire Now"</strong> to check exact current availability and current month tariff card.
          </div>
        </div>
      </section>

      {/* Sharing Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 text-xs sm:text-sm">
          {['All', 'Single', '2-Sharing', '3-Sharing', 'Four-Sharing'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSharingFilter(tab)}
              className={`px-4 py-2.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                activeSharingFilter === tab
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab === 'All' ? 'All Rooms' : tab}
            </button>
          ))}
        </div>
      </section>

      {/* Room Cards Detailed Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image banner */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={room.image}
                  alt={room.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-xl bg-navy-950/80 backdrop-blur-md text-white font-semibold text-xs border border-white/10 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-gold-400" />
                    <span>{room.occupants} {room.occupants === 1 ? 'Occupant (Private)' : 'Occupants'}</span>
                  </span>

                  <span className={`px-3 py-1 rounded-xl text-xs font-bold border shadow-sm ${room.badgeColor}`}>
                    {room.availabilityStatus}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">{room.title}</h3>
                  <p className="text-xs sm:text-sm text-gold-300 font-medium">{room.subtitle}</p>
                </div>
              </div>

              {/* Room details & specs */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Ideal for tag */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center gap-2">
                    <span className="font-bold text-navy-900 shrink-0">Best Suited For:</span>
                    <span className="text-slate-700">{room.idealFor}</span>
                  </div>

                  {/* Included features list */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Included In This Room:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      {room.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Tariff, Deposit & Actions */}
                <div className="pt-6 border-t border-slate-100 space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-3 p-4 rounded-2xl bg-navy-50/70 border border-navy-100">
                    <div>
                      <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block">
                        Monthly Rent (Estimated)
                      </span>
                      <span className="text-xl sm:text-2xl font-extrabold text-navy-900">
                        {room.monthlyRentPlaceholder}
                      </span>
                      <span className="text-[10px] text-slate-500 block">/ bed per month</span>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] uppercase font-bold tracking-wider text-slate-500 block">
                        Security Deposit
                      </span>
                      <span className="text-sm sm:text-base font-bold text-slate-800">
                        {room.depositPlaceholder}
                      </span>
                      <span className="text-[10px] text-emerald-600 block font-medium">Refundable</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => openEnquiryModal(room.sharingType)}
                      className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                    >
                      <Bed className="w-4 h-4 text-gold-400" />
                      <span>Enquire Now</span>
                    </button>

                    <a
                      href={createWhatsAppUrl({
                        roomType: room.title
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>WhatsApp Manager</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Standard Inclusions Checklist */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-2">
              Standard Package
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Included Across Every Room Type
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Regardless of the sharing category chosen, all residents receive access to these essentials:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            {[
              'Individual Bed & Quality Mattress',
              'Personal Storage Cupboard / Locker',
              'High-Speed Wi-Fi Connectivity',
              'Hot Water Geyser in Restrooms',
              '24/7 Running Water Supply',
              'Daily Common Area Cleaning',
              '24/7 CCTV Monitored Hallways',
              'RO Purified Drinking Water',
              'Bedside Power Charging Points',
              'Quiet Study Hours Maintenance',
              'Secure Building Gate Access',
              'Prompt Handyman Support'
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
