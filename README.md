# Ganesh Mens Hostel — Official Website

> **"Your Comfort, Our Priority"**  
> A complete, modern, responsive, and production-quality accommodation website designed for students and working professionals looking for comfortable, safe, and convenient living.

---

## 🌟 Highlights & Key Features

- **Branded Initial Loading Experience**: Features the Ganesh Mens Hostel insignia, animated bed/home spinner icon, "Preparing Your Comfortable Stay..." status message, lightweight footprint, and full `prefers-reduced-motion` accessibility support.
- **Brand Palette & Design System**: Modern Navy Blue (`#0c1726`), Crisp White, Light Grey surfaces, and warm Amber/Gold accents (`#f59e0b`).
- **Full Route Navigation**:
  - **Home Page** (`/`): High-impact hero section, amenity highlight pills, about overview, room card previews, photo gallery preview, genuine resident feedback, and visit scheduling banner.
  - **About Us** (`/about`): Official hostel story, core operational pillars, resident profiles, and disciplinary code of conduct overview.
  - **Facilities Page** (`/facilities`): Comprehensive interactive catalog of **all 23 amenities** with real-time category filtering, search bar, and distinct "Standard Confirmed" vs "Subject to Confirmation / Optional" badges.
  - **Rooms & Pricing** (`/rooms`): Single (private), 2-Sharing, 3-Sharing, and 4-Sharing room cards with editable pricing, deposit info, included checklist, and instant "Enquire Now" modal triggers.
  - **Photo Gallery** (`/gallery`): Responsive categorized grid (Bedrooms, Bathrooms, Building Exterior, Dining Area, Common Areas) with lazy-loading, skeleton placeholders, and full-screen keyboard-navigable Lightbox.
  - **Contact & Booking Page** (`/contact`): Detailed address, manager phone, direct WhatsApp link, business hours, interactive Google Maps placeholder, and a fully validated enquiry form with anti-duplicate submission safeguards.
  - **Frequently Asked Questions** (`/faq`): Searchable categorized accordion FAQ covering tariffs, deposits, meals, laundry, parking, ID verification documents, and curfew timings.
  - **Hostel Rules & Policies** (`/rules`): Code of conduct, 10:30 PM gate closure protocol, silent study hours, cleanliness guidelines, and move-out notice conditions.
  - **Privacy Policy** (`/privacy`): Transparent explanation of personal data handling and visitor register security.
  - **Custom 404 Page** (`/*`): Branded not-found screen with quick recovery navigation.
- **Direct WhatsApp Enquiry Flow**: Generates pre-filled WhatsApp chat messages with requested room type, move-in date, and resident inquiries.
- **Owner Setup Checklist**: Collapsible top banner allowing the hostel owner to review pending production details at a glance.

---

## 🛠️ Required Owner Placeholders to Replace Before Production

All parameters are centrally managed in a single file:  
`src/config/hostelConfig.ts`

| Item | Current Value (Placeholder) | Owner Action Required |
| :--- | :--- | :--- |
| **Phone Number** | `+91 77029 69683` | ✅ Configured |
| **WhatsApp Number** | `917702969683` | ✅ Configured (+91 77029 69683) |
| **Email Address** | `ganeshmenshostel@example.com` | Update with hostel's official email address |
| **Physical Address** | `Plot No. 42, 2nd Main Road...` | Enter real street, door number, area, city, and pincode |
| **Landmark** | `Opposite Metro Station...` | Specify popular local landmark for residents |
| **Google Maps Embed** | Demo iframe URL | Paste real Google Maps embed iframe link for pinpoint GPS directions |
| **Room Rent & Deposit** | Single (₹8.5k–11k), 2-Share (₹6k–7.5k), 3-Share (₹4.8k–5.8k), 4-Share (₹4k–4.8k) | Replace with verified monthly tariffs and security deposit |
| **Optional Facilities** | Food, Washing Machine, Power Backup, Bike Parking, Kitchen Access | Set `isConfirmed: true` or `false` based on verified on-site availability |
| **Property Photographs** | Sample curated Unsplash interior & exterior photos | Place real photos of Ganesh Mens Hostel in `/public/images` or CDN |

---

## 📋 The 23 Facilities Catalog

1. **High-Speed Wi-Fi** — Standard Confirmed
2. **24/7 Water Availability** — Subject to actual municipal/borewell supply
3. **Hot Water Facility** — Standard Confirmed (Geysers installed)
4. **Clean & Comfortable Beds** — Standard Confirmed
5. **Cot, Mattress, Pillow & Storage** — Standard Confirmed
6. **Regular Cleaning of Common Areas** — Daily routine
7. **Housekeeping as per Policy** — Standard Confirmed
8. **CCTV Surveillance in Common Areas** — Active 24/7
9. **Secure Entry & Visitor Policy** — Strict resident safety rule
10. **Good Ventilation & Lighting** — Standard Confirmed
11. **Attached or Shared Bathrooms** — As per room type chosen
12. **Washing Machine / Laundry Service** — *Optional / Subject to manager confirmation*
13. **Purified RO Drinking Water** — Standard Confirmed
14. **Power Backup (Inverter/Generator)** — *Optional / Subject to confirmation*
15. **Study-Friendly Environment** — Silent hours observed from 11 PM
16. **Common Area for Relaxation** — Standard Confirmed
17. **Food / Meal Service** — *Optional / Subject to food package selection*
18. **Two-Wheeler Parking** — *Optional / Subject to vehicle slot availability*
19. **Waste Management & Hygiene** — Standard Confirmed
20. **Maintenance & Repair Support** — Prompt on-call electrician/plumber
21. **Dedicated Dining Area** — *Optional / Building layout confirmation*
22. **Refrigerator / Kitchen Access** — *Optional / Subject to confirmation*
23. **Nearby Transport, Shops & Hospitals** — Prime neighborhood connectivity

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v20+ recommended)
- npm (v10+)

### Commands
```bash
# 1. Navigate to the project directory
cd "C:\Users\91770\.gemini\antigravity\scratch\ganesh-mens-hostel"

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server with Hot Module Reloading (HMR)
npm run dev

# 4. Build optimized production bundle
npm run build

# 5. Preview the production build locally
npm run preview
```

By default, the Vite preview runs on:
`http://localhost:5173/`

---

## 📱 Mobile Responsiveness & Accessibility

- **Responsive Viewports**: Seamlessly adapted for mobile phones (320px+), tablets (768px+), laptops, and large desktop screens (1440px+).
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce` CSS media queries.
- **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, and ARIA roles for screen reader accessibility.
- **Form Validation**: Clean validation messages, loading states, and prevention of duplicate submissions.

---

## 📄 License & Ownership
Created for **Ganesh Mens Hostel**. All branding, layout designs, and components are ready for production deployment.
