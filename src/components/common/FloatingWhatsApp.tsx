import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { createWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = createWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end group">
      {/* Quick message tooltip */}
      {showTooltip && (
        <div className="mb-2 bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-xl shadow-lg flex items-center gap-2 border border-slate-700/60 animate-bounce">
          <span>Need room info? Chat on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp with Ganesh Mens Hostel Manager"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
