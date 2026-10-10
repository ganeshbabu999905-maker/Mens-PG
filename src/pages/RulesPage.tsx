import React from 'react';
import {
  Clock,
  VolumeX,
  FileCheck,
  Ban,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Phone
} from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { createTelUrl } from '../utils/whatsapp';

export const RulesPage: React.FC = () => {
  const rules = [
    {
      category: '1. Gate & Curfew Timings',
      icon: Clock,
      points: [
        `Main hostel entrance gate closes promptly at ${HOSTEL_CONFIG.contact.gateClosingTime} every night for resident safety.`,
        'Residents working on night shifts or returning late from exams/work must provide prior intimation or written supervisor permission to the manager.',
        'Visiting hours for non-residents: strictly 7:00 AM to 9:30 PM only in the common reception/lobby area.'
      ]
    },
    {
      category: '2. Peace & Study Atmosphere',
      icon: VolumeX,
      points: [
        'Strict silent hours commence from 11:00 PM to 6:00 AM across all bedroom floors.',
        'Loud music, speakerphones, or shouting in corridors is prohibited. Please use headphones for entertainment and calls.',
        'Group discussions should be carried out respectfully in designated common zones or balconies without disturbing sleep.'
      ]
    },
    {
      category: '3. Cleanliness & Hygiene',
      icon: Sparkles,
      points: [
        'Residents must cooperate with the scheduled housekeeping team by keeping personal belongings neatly organized in lockers.',
        'Trash and empty food packets must strictly be deposited into the provided corridor dustbins; littering from windows is strictly penalised.',
        'Wet clothes must only be dried on terrace or designated balcony clotheslines, not on electrical fixtures or window grills.'
      ]
    },
    {
      category: '4. Safety & Prohibited Items',
      icon: Ban,
      points: [
        'Smoking, consumption of alcohol, narcotics, and gambling are strictly forbidden on hostel premises. Zero tolerance policy applies.',
        'High-wattage heating coils, hotplates, or electric room heaters that overload building electrical wiring are prohibited without manager authorization.',
        'Hostel keys or biometric access must never be duplicated or lent to outsiders.'
      ]
    },
    {
      category: '5. Fee Payment & Move-Out Notice',
      icon: FileCheck,
      points: [
        'Monthly hostel rent must be settled on or before the 5th of each calendar month.',
        'A minimum of 30 days prior written/WhatsApp notice is mandatory before vacating to ensure timely inspection and refund of security deposit.',
        'Any deliberate structural or furniture damage will be deducted from the security deposit upon checkout.'
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Discipline & Safety Guidelines
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Hostel Rules & Code of Conduct
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            To ensure every student and working professional enjoys a peaceful, safe, and dignified living environment, all residents agree to observe these standard hostel regulations.
          </p>
        </div>
      </section>

      {/* Rules Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {rules.map((rule, idx) => {
          const Icon = rule.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 shadow-soft p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-10 h-10 rounded-xl bg-navy-50 text-navy-800 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-navy-900">{rule.category}</h2>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {rule.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* Manager Assistance Box */}
        <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-950">
              <span className="font-bold">Need rule exceptions for rotational work shifts?</span> Contact the hostel warden or manager directly in advance to arrange safe late check-in protocols.
            </div>
          </div>
          <a
            href={createTelUrl()}
            className="px-4 py-2 rounded-xl bg-navy-900 text-white font-bold text-xs shrink-0 flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>Call Manager</span>
          </a>
        </div>
      </section>
    </div>
  );
};
