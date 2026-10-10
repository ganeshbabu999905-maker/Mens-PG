import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bed,
  Wifi,
  Flame,
  ShieldCheck,
  UtensilsCrossed,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Clock,
  Star
} from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { createWhatsAppUrl } from '../utils/whatsapp';
import { FacilityIcon } from '../components/facilities/FacilityIcon';
import { Lightbox } from '../components/gallery/Lightbox';

export const HomePage: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Quick highlight pills for hero section
  const highlights = [
    { title: 'High-Speed Wi-Fi', icon: Wifi, desc: 'Coverage on all floors' },
    { title: 'Hot Water 24/7', icon: Flame, desc: 'Geysers in bathrooms' },
    { title: 'Daily Cleaning', icon: Sparkles, desc: 'Hygienic rooms & halls' },
    { title: 'CCTV Security', icon: ShieldCheck, desc: 'Round-the-clock monitoring' },
    { title: 'Food Availability', icon: UtensilsCrossed, desc: 'Hygienic meal options' },
  ];

  const previewGallery = HOSTEL_CONFIG.gallery.slice(0, 6);

  return (
    <div className="flex flex-col space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative bg-navy-950 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Subtle patterned backdrop */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-navy-700/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/90 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold shadow-inner">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                <span>Premier Men's PG Accommodation</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Find Your Comfort at <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500">
                  Ganesh Mens Hostel
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Affordable, comfortable, and secure accommodation for students and working professionals. Focused on cleanliness, peace of mind, and modern amenities.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => openEnquiryModal()}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-gold-500 to-amber-400 hover:from-gold-400 hover:to-amber-300 text-navy-950 font-extrabold text-base shadow-xl hover:shadow-gold-500/25 transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Bed className="w-5 h-5" />
                  <span>Book Your Bed</span>
                </button>

                <Link
                  to="/facilities"
                  className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-navy-900 hover:bg-navy-800 border border-slate-700/80 hover:border-slate-600 text-white font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore Facilities</span>
                  <ArrowRight className="w-4 h-4 text-gold-400" />
                </Link>

                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
                  title="Direct WhatsApp Enquiry"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <span className="sm:hidden lg:inline">WhatsApp</span>
                </a>
              </div>

              {/* Quick check items */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>No Brokerage Fee</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Single & Sharing Options</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Flexible Terms</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700/60 bg-navy-900 group">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80"
                  alt="Ganesh Mens Hostel modern clean bedroom interior"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-navy-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                        Ready to Move In
                      </p>
                      <p className="text-white font-bold text-sm sm:text-base">
                        Clean, Furnished & Sanitized Rooms
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
                        Beds Open
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gold-500/20 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>

        {/* 2. KEY HIGHLIGHTS BAR */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-gold-500/40 transition-all duration-200 flex flex-col items-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-navy-800 group-hover:bg-gold-500/20 flex items-center justify-center text-gold-400 mb-2.5 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ABOUT US INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block">
              About Our Hostel
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900 leading-tight">
              A Welcoming Living Space Built for Ambition & Peace
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Welcome to <strong>Ganesh Mens Hostel</strong>, a comfortable and welcoming place designed for students and working professionals looking for a convenient place to stay. We focus on cleanliness, safety, essential amenities, and a peaceful living environment.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our goal is to make every resident feel at home while enjoying a comfortable and hassle-free hostel experience. Whether you are staying for education or work, Ganesh Mens Hostel aims to provide a practical, affordable, and friendly accommodation experience.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
                <div className="text-2xl font-black text-navy-900 mb-1">24/7</div>
                <div className="text-xs text-slate-600 font-medium">Safety with CCTV & Secure Entry</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
                <div className="text-2xl font-black text-amber-600 mb-1">100%</div>
                <div className="text-xs text-slate-600 font-medium">Hygienic Surroundings & RO Water</div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-amber-600 transition-colors"
              >
                <span>Read our full story & hostel values</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80"
                alt="Cozy private room at Ganesh Mens Hostel"
                className="rounded-2xl shadow-soft object-cover w-full h-48 sm:h-60"
              />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Common lounge and study area"
                className="rounded-2xl shadow-soft object-cover w-full h-36 sm:h-44"
              />
            </div>
            <div className="space-y-4 pt-6">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                alt="Hygienic dining and meal space"
                className="rounded-2xl shadow-soft object-cover w-full h-36 sm:h-44"
              />
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80"
                alt="Building exterior and entry gate"
                className="rounded-2xl shadow-soft object-cover w-full h-48 sm:h-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. ROOMS & PRICING PREVIEW */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-2">
                Room Sharing Categories
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
                Choose Your Preferred Sharing Option
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                From private single rooms for maximum concentration to budget-friendly sharing options, choose what fits your routine.
              </p>
            </div>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 hover:text-amber-600 transition-colors shrink-0"
            >
              <span>View All Pricing & Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Room Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOSTEL_CONFIG.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={room.image}
                    alt={room.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${room.badgeColor}`}>
                      {room.availabilityStatus}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-navy-950/80 backdrop-blur-sm text-white">
                      {room.occupants} {room.occupants === 1 ? 'Occupant' : 'Occupants'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-900 leading-snug">
                      {room.title}
                    </h3>
                    <p className="text-xs text-amber-700 font-semibold mt-0.5">{room.subtitle}</p>

                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                      {room.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                        Key Features:
                      </p>
                      {room.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing placeholder & CTA */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-slate-500 block">
                          Monthly Rent
                        </span>
                        <span className="text-base font-bold text-navy-900">
                          {room.monthlyRentPlaceholder}
                        </span>
                      </div>
                      <span className="text-[10px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        *Placeholder Tariff
                      </span>
                    </div>

                    <button
                      onClick={() => openEnquiryModal(room.sharingType)}
                      className="w-full py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              * Note: Rent and deposit numbers are editable placeholders. Final rates and current room availability are confirmed upon consultation with the hostel manager.
            </p>
          </div>
        </div>
      </section>

      {/* 5. FACILITIES PREVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-2">
            Amenities & Comfort
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
            Everything You Need for a Seamless Stay
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            We ensure all essential everyday conveniences are cared for, keeping safety and comfort our topmost priority.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOSTEL_CONFIG.facilities.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy-50 text-navy-700 group-hover:bg-gold-500/15 group-hover:text-amber-700 flex items-center justify-center transition-colors">
                    <FacilityIcon name={item.iconName} className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      item.isConfirmed
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}
                  >
                    {item.isConfirmed ? 'Standard' : 'Subject to Confirmation'}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-900 mb-1 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
                {item.statusNote}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-navy-900 text-navy-900 font-bold text-sm shadow-sm transition-all"
          >
            <span>View All 23 Facilities & Confirmation Status</span>
            <ArrowRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>
      </section>

      {/* 6. PHOTO GALLERY PREVIEW */}
      <section className="bg-navy-950 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-gold-400 bg-gold-500/20 px-3 py-1 rounded-full inline-block mb-2 border border-gold-400/30">
                Visual Tour
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Hostel Life & Infrastructure
              </h2>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                Take a look at bedrooms, washrooms, dining space, common areas, and building exterior.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <span>Explore Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewGallery.map((img, index) => (
              <div
                key={img.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer bg-navy-900 border border-slate-800"
              >
                <img
                  src={img.imageUrl}
                  alt={img.altText}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] uppercase font-bold text-gold-400">
                    {img.category}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 text-center mt-6">
            * Sample photography shown for layout demonstration. Actual property photos will replace these upon owner submission.
          </p>
        </div>
      </section>

      {/* 7. GENUINE REVIEWS & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-2">
            Resident Voices
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-900">
            What Our Residents Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Genuine experiences from students and professionals who have made Ganesh Mens Hostel their home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOSTEL_CONFIG.testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-gold-500 mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{test.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-navy-900">{test.name}</h4>
                  <p className="text-xs text-slate-500">{test.role}</p>
                </div>
                <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-medium">
                  {test.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. LOCATION & VISIT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-navy-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase font-bold text-gold-400 tracking-wider">
                Schedule a Visit
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Planning to Move In Soon? Come Check the Rooms!
              </h2>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                We invite you to inspect the room ventilation, cleanliness, Wi-Fi speed, and surroundings in person before deciding.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <span>Visiting Hours: {HOSTEL_CONFIG.contact.visitingHours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span>{HOSTEL_CONFIG.contact.address.area}, {HOSTEL_CONFIG.contact.address.city}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => openEnquiryModal()}
                className="w-full py-3.5 px-6 rounded-2xl bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <Bed className="w-4 h-4" />
                <span>Schedule a Free Visit</span>
              </button>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox for preview */}
      {lightboxIndex !== null && (
        <Lightbox
          images={previewGallery}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() =>
            setLightboxIndex((prev) => (prev !== null ? (prev + 1) % previewGallery.length : 0))
          }
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + previewGallery.length) % previewGallery.length : 0
            )
          }
        />
      )}
    </div>
  );
};
