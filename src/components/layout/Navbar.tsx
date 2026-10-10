import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Bed, ArrowRight } from 'lucide-react';
import { HOSTEL_CONFIG } from '../../config/hostelConfig';
import { useEnquiryModal } from '../../context/EnquiryModalContext';
import { createTelUrl } from '../../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openEnquiryModal } = useEnquiryModal();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle scroll effect for shadow and blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Rooms & Pricing', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-card border-b border-navy-800/80 py-3'
          : 'bg-navy-950 text-white border-b border-navy-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold-400 rounded-xl p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-gold-500 to-amber-300 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <span className="text-gold-400 font-extrabold text-lg sm:text-xl tracking-tight">G</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                {HOSTEL_CONFIG.contact.hostelName}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider uppercase text-gold-400">
                {HOSTEL_CONFIG.contact.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'text-gold-300 bg-white/10 font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Click to Call */}
            <a
              href={createTelUrl()}
              className="flex items-center gap-2 text-xs xl:text-sm font-semibold text-slate-200 hover:text-gold-300 px-3 py-2 rounded-xl border border-slate-700/80 hover:border-gold-400/50 transition-colors"
              title="Click to call hostel manager"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Manager</span>
            </a>

            {/* Primary CTA */}
            <button
              onClick={() => openEnquiryModal()}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-400 text-navy-950 font-bold text-xs xl:text-sm shadow-md hover:shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Bed className="w-4 h-4" />
              <span>Enquire Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openEnquiryModal()}
              className="px-3 py-1.5 rounded-lg bg-gold-400 text-navy-950 font-bold text-xs shadow-sm"
            >
              Enquire
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-navy-950/98 border-t border-navy-800/80 animate-fade-in px-4 pt-3 pb-6 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-gold-500/15 text-gold-300 font-semibold border-l-4 border-gold-400'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </NavLink>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="mt-5 pt-4 border-t border-navy-800 flex flex-col gap-3">
            <a
              href={createTelUrl()}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-700 bg-navy-900 text-slate-200 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {HOSTEL_CONFIG.contact.phoneFormatted}</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                openEnquiryModal();
              }}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gold-400 text-navy-950 font-bold text-sm shadow-md"
            >
              <Bed className="w-4 h-4" />
              <span>Book Bed / Enquire Availability</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
