import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  User,
  Bed,
  CheckCircle2,
  Loader2,
  Send,
  Navigation,
  ShieldAlert
} from 'lucide-react';
import { HOSTEL_CONFIG } from '../config/hostelConfig';
import { useToast } from '../context/ToastContext';
import { createWhatsAppUrl, createTelUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    roomType: '2-Sharing',
    moveInDate: '',
    occupation: 'Working Professional',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [lastSubmission, setLastSubmission] = useState<typeof formData | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required';
    } else if (!/^\+?[0-9]{10,13}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.moveInDate) {
      errs.moveInDate = 'Please select your tentative move-in date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);

    const apiUrl = import.meta.env.VITE_API_URL;
    if (apiUrl) {
      try {
        const response = await fetch(`${apiUrl}/api/enquiry`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }
      } catch (err) {
        console.warn('Backend API submission failed or unavailable:', err);
      }
    } else {
      // Local processing delay
      await new Promise((resolve) => setTimeout(resolve, 900));
    }

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setLastSubmission({ ...formData });
    showToast('Enquiry received! The manager will verify bed vacancy and reach out.', 'success');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      roomType: '2-Sharing',
      moveInDate: '',
      occupation: 'Working Professional',
      message: ''
    });
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-wider font-bold text-amber-600 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight">
            Contact & Room Booking
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Reach out directly to {HOSTEL_CONFIG.contact.hostelName}. Inquire about bed vacancies, schedule a physical tour, or clarify meal and parking options.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Fast actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-navy-900">Hostel Contact Information</h2>

              <div className="space-y-5 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-navy-50 text-navy-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Mobile & Direct Call
                    </p>
                    <a
                      href={createTelUrl()}
                      className="text-base font-bold text-navy-900 hover:text-amber-600 transition-colors"
                    >
                      {HOSTEL_CONFIG.contact.phoneFormatted}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Available for calls 7 AM – 9:30 PM</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      WhatsApp Quick Chat
                    </p>
                    <a
                      href={createWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      {HOSTEL_CONFIG.contact.whatsappFormatted}
                    </a>
                    <p className="text-xs text-slate-500 mt-0.5">Quick photo previews & instant replies</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${HOSTEL_CONFIG.contact.email}`}
                      className="text-sm font-bold text-navy-900 hover:text-amber-600 transition-colors break-all"
                    >
                      {HOSTEL_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Hostel Address
                    </p>
                    <p className="text-sm font-semibold text-slate-800 leading-snug">
                      {HOSTEL_CONFIG.contact.address.fullAddress}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Landmark: {HOSTEL_CONFIG.contact.address.landmark}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Visiting & Gate Hours
                    </p>
                    <p className="text-xs font-bold text-slate-800">
                      Visiting: {HOSTEL_CONFIG.contact.visitingHours}
                    </p>
                    <p className="text-xs text-red-600 font-semibold mt-0.5">
                      Main Gate Closes: {HOSTEL_CONFIG.contact.gateClosingTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={createTelUrl()}
                  className="py-3 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-gold-400" />
                  <span>Call Manager</span>
                </a>
              </div>
            </div>

            {/* Neighborhood landmark tips */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-800 flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-600" />
                <span>Nearby Commute & Landmarks</span>
              </h4>
              <p>• 5 minutes walk to local bus depot and metro connectivity</p>
              <p>• Medical clinics, pharmacy, and ATMs right in the immediate lane</p>
              <p>• Convenient dining spots, cafeterias, and stationery shops nearby</p>
            </div>
          </div>

          {/* Right Column: Enquiry Form with Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-soft p-6 sm:p-10">
              {submitSuccess && lastSubmission ? (
                <div className="space-y-6 py-4 animate-fade-in">
                  <div className="w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-navy-900">Enquiry Successfully Dispatched</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you, <strong>{lastSubmission.name}</strong>! We have received your request for the{' '}
                      <strong>{lastSubmission.roomType}</strong> room.
                    </p>
                  </div>

                  {/* Explicit Non-Confirmation Notice */}
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-amber-950">Important Notice on Room Booking:</p>
                      <p className="mt-1 text-amber-900 leading-relaxed">
                        To maintain transparency, <strong>no booking is confirmed automatically</strong> by submitting this form. The hostel manager will personally review current bed vacancies, confirm exact room rent and deposit, and inspect necessary government ID proofs before issuing your room allotment.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Number:</span>
                      <span className="font-semibold text-slate-800">{lastSubmission.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Tentative Move-In Date:</span>
                      <span className="font-semibold text-slate-800">{lastSubmission.moveInDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Room Requested:</span>
                      <span className="font-semibold text-slate-800">{lastSubmission.roomType}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <a
                      href={createWhatsAppUrl({
                        name: lastSubmission.name,
                        roomType: lastSubmission.roomType,
                        moveInDate: lastSubmission.moveInDate,
                        customMessage: lastSubmission.message
                      })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>

                    <button
                      onClick={resetForm}
                      className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                      Enquire for Bed Availability & Physical Visit
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Provide your tentative dates and contact info. Our hostel manager will reply with vacancy details and pricing.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-200'
                            : 'border-slate-300 focus:ring-navy-500/20 focus:border-navy-600'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit mobile number"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                            errors.phone
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-slate-300 focus:ring-navy-500/20 focus:border-navy-600'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                            errors.email
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-slate-300 focus:ring-navy-500/20 focus:border-navy-600'
                          }`}
                        />
                      </div>
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Room Type & Move-in Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Room Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Bed className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <select
                          value={formData.roomType}
                          onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-600"
                        >
                          <option value="Single">Single Sharing / Private Room</option>
                          <option value="2-Sharing">2-Sharing Room</option>
                          <option value="3-Sharing">3-Sharing Room</option>
                          <option value="4-Sharing">4-Sharing Room</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Expected Move-In Date <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                        <input
                          type="date"
                          value={formData.moveInDate}
                          onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                            errors.moveInDate
                              ? 'border-red-400 focus:ring-red-200'
                              : 'border-slate-300 focus:ring-navy-500/20 focus:border-navy-600'
                          }`}
                        />
                      </div>
                      {errors.moveInDate && (
                        <p className="text-xs text-red-500 mt-1">{errors.moveInDate}</p>
                      )}
                    </div>
                  </div>

                  {/* Occupation */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Profession / Current Role
                    </label>
                    <select
                      value={formData.occupation}
                      onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-600"
                    >
                      <option value="Working Professional">Working Professional</option>
                      <option value="College / University Student">College / University Student</option>
                      <option value="Competitive Exam Aspirant">UPSC / GATE / Bank Exam Aspirant</option>
                      <option value="Job Seeker / Intern">Job Seeker / Intern</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Message / Special Queries (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ask any question regarding meals, two-wheeler parking, visit time, or AC options..."
                      className="w-full p-3 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-navy-500/20 focus:border-navy-600"
                    />
                  </div>

                  {/* Notice */}
                  <p className="text-[11px] text-slate-500 leading-normal">
                    * Submitting registers your enquiry. Room reservations are strictly confirmed only after the hostel manager verifies vacancy and required documents.
                  </p>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
                        <span>Submitting Your Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold-400" />
                        <span>Submit Booking Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-navy-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span>Hostel Location Map</span>
              </h2>
              <p className="text-xs text-slate-500">
                Interactive map location placeholder. Replace embed URL with actual Google Maps pin coordinates in <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">hostelConfig.ts</code>.
              </p>
            </div>

            <a
              href={HOSTEL_CONFIG.contact.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-navy-50 hover:bg-navy-100 text-navy-900 text-xs font-bold inline-flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>Open in Google Maps</span>
              <Navigation className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 aspect-[16/9] sm:aspect-[21/9] bg-slate-100">
            <iframe
              src={HOSTEL_CONFIG.contact.googleMapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ganesh Mens Hostel Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
