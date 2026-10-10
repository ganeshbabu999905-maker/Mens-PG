import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Info, Phone, MapPin, IndianRupee, Camera, ShieldCheck } from 'lucide-react';

export const PlaceholderNotice: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 text-amber-950 text-xs sm:text-sm py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded-md bg-amber-200 text-amber-900 shrink-0">
            <Info className="w-4 h-4" />
          </span>
          <p className="font-medium text-slate-800">
            <strong className="text-amber-900 font-semibold">Owner Setup Notice:</strong>{' '}
            Prices, contact details, and optional amenities are editable placeholders awaiting owner confirmation.
          </p>
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xs font-semibold text-amber-900 hover:text-amber-950 flex items-center gap-1 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded-lg transition-colors"
          >
            {isOpen ? 'Hide Checklist' : 'View Owner Checklist'}
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
            className="text-xs text-amber-700 hover:text-amber-950 px-2 py-1"
          >
            Dismiss
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-amber-200/80 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 animate-fade-in text-xs">
          <div className="p-2.5 rounded-lg bg-white/80 border border-amber-200 flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Hostel Address & Map</p>
              <p className="text-slate-600">Replace demo address with real street name, landmark & pin Google Maps embed link.</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/80 border border-amber-200 flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Manager Mobile & WhatsApp</p>
              <p className="text-slate-600">Update phone & WhatsApp in <code className="bg-amber-100 px-1 rounded">hostelConfig.ts</code> for instant enquiries.</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/80 border border-amber-200 flex items-start gap-2.5">
            <IndianRupee className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Room Tariff & Deposit</p>
              <p className="text-slate-600">Provide real monthly rent & deposit for Single, 2, 3, and 4 sharing.</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/80 border border-amber-200 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Optional Facilities Confirmation</p>
              <p className="text-slate-600">Confirm Food, Washing Machine, Power Backup, and Two-Wheeler Parking.</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/80 border border-amber-200 flex items-start gap-2.5">
            <Camera className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Actual Property Photos</p>
              <p className="text-slate-600">Replace sample gallery pictures with genuine photos of your hostel building & rooms.</p>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white/80 border border-amber-200 flex items-start gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-slate-900">Config File Location</p>
              <p className="text-slate-600">All fields are centrally managed in <code className="bg-amber-100 px-1 rounded">src/config/hostelConfig.ts</code>.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
