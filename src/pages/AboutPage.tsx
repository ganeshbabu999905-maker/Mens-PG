import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  BookOpen,
  Briefcase,
  GraduationCap,
  Bed,
  MessageCircle,
  Users
} from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { useEnquiryModal } from '../context/EnquiryModalContext';
import { createWhatsAppUrl } from '../utils/whatsapp';

export const AboutPage: React.FC = () => {
  const { openEnquiryModal } = useEnquiryModal();

  const corePillars = [
    {
      title: 'Uncompromised Cleanliness',
      description: 'Daily sweeping, mopping of common zones, sanitization of restrooms, and systematic waste clearance to keep your surroundings healthy.',
      icon: Sparkles
    },
    {
      title: 'Safety & 24/7 Security',
      description: 'CCTV surveillance in public corridors, visitor logging, strict entry control, and night security protocols to safeguard your personal space.',
      icon: ShieldCheck
    },
    {
      title: 'Quiet Study & Work Atmosphere',
      description: 'Strict silent hours starting at 11:00 PM ensure IT professionals, college students, and exam aspirants can rest and focus without disturbance.',
      icon: BookOpen
    },
    {
      title: 'Approachable Management',
      description: 'Direct phone & WhatsApp contact with the hostel manager for instant repair requests, room maintenance, and friendly assistance.',
      icon: HeartHandshake
    }
  ];

  const residentProfiles = [
    {
      role: 'Working Professionals & IT Engineers',
      desc: 'Seamless Wi-Fi connectivity, hot water, peaceful sleep after late shifts, and hassle-free living close to commercial hubs.',
      icon: Briefcase
    },
    {
      role: 'College & University Students',
      desc: 'Affordable sharing options, study tables, secure lockers, and a disciplined peer atmosphere supporting academic focus.',
      icon: GraduationCap
    },
    {
      role: 'Competitive Exam Aspirants (UPSC / GATE)',
      desc: 'Private single rooms and silent environment designed for rigorous preparation without daily household chores.',
      icon: BookOpen
    },
    {
      role: 'Job Seekers & Interns',
      desc: 'Flexible monthly accommodation without long lease lock-ins or hefty broker commissions.',
      icon: Users
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Our Story & Mission
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            About {HOSTEL_CONFIG.contact.hostelName}
          </h1>
          <p className="text-base sm:text-lg text-slate-600">
            "{HOSTEL_CONFIG.contact.tagline}" — creating a home away from home for ambitious men.
          </p>
        </div>
      </section>

      {/* Primary Narrative & Official Hostel Description */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-8 sm:p-12 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
                Welcome to Ganesh Mens Hostel
              </h2>

              {/* Exact required description paragraph from prompt */}
              <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-amber-500 text-slate-700 text-base sm:text-lg leading-relaxed italic">
                "Welcome to Ganesh Mens Hostel, a comfortable and welcoming place designed for students and working professionals looking for a convenient place to stay. We focus on cleanliness, safety, essential amenities, and a peaceful living environment. Our goal is to make every resident feel at home while enjoying a comfortable and hassle-free hostel experience. Whether you are staying for education or work, Ganesh Mens Hostel aims to provide a practical, affordable, and friendly accommodation experience."
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We understand how challenging it can be to move away from hometowns to a new city. Our facilities are designed to eliminate everyday stresses like water scarcity, unreliable internet, and poor sanitation so you can put 100% of your energy into your career and studies.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => openEnquiryModal()}
                  className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <Bed className="w-4 h-4 text-gold-400" />
                  <span>Enquire for Room</span>
                </button>
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="Hostel building infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="font-bold text-base">Secure Building Infrastructure</p>
                    <p className="text-xs text-slate-300">Well-ventilated floors, CCTV coverage & clean surroundings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-2">
            Our Commitments
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
            What Sets Ganesh Mens Hostel Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Who We Host */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-2">
              Our Community
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900">
              Designed for Focused Individuals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentProfiles.map((prof, idx) => {
              const Icon = prof.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-soft">
                  <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-1.5">{prof.role}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{prof.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules Summary & Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-navy-950 text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-wider font-bold text-gold-400">
              Transparent & Disciplined
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Want to see our rules and visit policy?
            </h2>
            <p className="text-sm text-slate-300">
              We maintain a transparent code of conduct regarding gate timings, visitors, and hygiene so that every resident enjoys a stress-free environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/rules"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-slate-700 text-white font-semibold text-sm transition-colors text-center"
            >
              Hostel Rules & Policies
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-300 text-navy-950 font-bold text-sm shadow-md transition-colors text-center"
            >
              Contact & Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
