import React from 'react';
import { ShieldCheck, Lock, FileText } from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Data Privacy & Protection
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            How {HOSTEL_CONFIG.contact.hostelName} protects and manages personal enquiry data and resident records.
          </p>
        </div>
      </section>

      {/* Main Content Card */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-8 sm:p-12 space-y-8 text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-600" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              When you submit a room availability enquiry or schedule a physical tour through this website, we collect your name, mobile contact number, preferred room sharing category, and expected date of arrival.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>2. Purpose of Data Use</span>
            </h2>
            <p>
              Your contact details are strictly used to communicate room availability, provide tariff details, coordinate visiting timings, and verify legal photo identification upon hostel check-in.
            </p>
            <p>
              We do not sell, rent, or trade your contact information to external third-party advertisers or lead aggregators.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span>3. Resident Identification Documents</span>
            </h2>
            <p>
              In compliance with local government accommodation and police verification norms, all residents admitted into Ganesh Mens Hostel must furnish valid government photo ID proofs (such as Aadhaar card, voter card, or passport). These documents are retained securely in our confidential resident register.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">4. CCTV Footage & Security Recordings</h2>
            <p>
              Closed-circuit television (CCTV) cameras are deployed strictly in communal areas (reception, main gates, parking frontage, and public corridors) for prevention of unauthorized intrusion and resident security. Cameras are never placed in bedrooms or restrooms.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-base font-bold text-navy-900">Contact Management for Privacy Inquiries</h3>
            <p className="text-xs text-slate-500">
              For any concerns regarding personal information or record updates, contact the hostel management at {HOSTEL_CONFIG.contact.email} or call {HOSTEL_CONFIG.contact.phoneFormatted}.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
