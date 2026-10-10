import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';
import { HOSTEL_CONFIG } from '../../config/hostelConfig';
import { createTelUrl, createWhatsAppUrl } from '../../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-900 mt-auto pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          {/* Col 1: About & Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-500 to-amber-300 p-0.5 shadow-md">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <span className="text-gold-400 font-extrabold text-xl">G</span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white block">
                  {HOSTEL_CONFIG.contact.hostelName}
                </span>
                <span className="text-xs uppercase tracking-wider text-gold-400 font-medium">
                  {HOSTEL_CONFIG.contact.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Affordable, comfortable, and secure accommodation for students and working professionals. Focused on cleanliness, safety, and a peaceful living atmosphere.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={createTelUrl()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 text-slate-200 border border-slate-700 text-xs font-semibold hover:bg-navy-750 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Explore Pages
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Rooms & Pricing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gold-300 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Room Sharing & Policies */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Room Options & Policies
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/rooms" className="hover:text-gold-300 transition-colors">
                  Single Sharing (Private Room)
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-gold-300 transition-colors">
                  Two-Sharing Room
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-gold-300 transition-colors">
                  Three-Sharing Room
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-gold-300 transition-colors">
                  Four-Sharing Room
                </Link>
              </li>
              <li>
                <Link to="/rules" className="hover:text-gold-300 transition-colors font-medium text-gold-400/90 flex items-center gap-1">
                  Hostel Rules & Code of Conduct
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-gold-300 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-sm uppercase tracking-wider">
              Get in Touch
            </h3>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{HOSTEL_CONFIG.contact.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={createTelUrl()} className="hover:text-white transition-colors">
                  {HOSTEL_CONFIG.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${HOSTEL_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {HOSTEL_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400 text-xs pt-1">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <p>Visiting Hours: {HOSTEL_CONFIG.contact.visitingHours}</p>
                  <p className="text-amber-400/90 font-medium">Gate Closes: {HOSTEL_CONFIG.contact.gateClosingTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {HOSTEL_CONFIG.contact.hostelName}. All rights reserved. Built with pride for comfort & safety.
          </p>

          <p className="text-center md:text-right text-[11px] text-slate-400">
            * Note: Room pricing, deposit amounts, and optional facilities are subject to final confirmation by hostel management.
          </p>
        </div>
      </div>
    </footer>
  );
};
