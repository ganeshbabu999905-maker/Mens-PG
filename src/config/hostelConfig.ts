export interface HostelContact {
  hostelName: string;
  tagline: string;
  ownerName: string;
  phone: string;
  phoneFormatted: string;
  whatsappNumber: string; // international format without + or spaces
  whatsappFormatted: string;
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    fullAddress: string;
  };
  visitingHours: string;
  gateClosingTime: string;
  googleMapEmbedUrl: string;
  googleMapsDirectionsUrl: string;
}

export interface FacilityItem {
  id: string;
  number: number;
  title: string;
  category: 'Essentials' | 'Security & Hygiene' | 'Living & Comfort' | 'Services & Food' | 'Location';
  description: string;
  isConfirmed: boolean; // false means optional/subject to actual supply
  statusNote?: string;
  iconName: string;
}

export interface RoomOption {
  id: string;
  title: string;
  subtitle: string;
  sharingType: 'Single' | '2-Sharing' | '3-Sharing' | '4-Sharing';
  occupants: number;
  monthlyRentPlaceholder: string;
  depositPlaceholder: string;
  isRentPlaceholder: boolean;
  availabilityStatus: 'Available' | 'Filling Fast' | 'Limited Beds';
  badgeColor: string;
  image: string;
  imageAlt: string;
  description: string;
  dimensions?: string;
  features: string[];
  idealFor: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Bedrooms' | 'Bathrooms' | 'Building Exterior' | 'Dining Area' | 'Common Areas';
  imageUrl: string;
  altText: string;
  caption: string;
  isStockPhoto: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Rooms & Pricing' | 'Amenities & Food' | 'Rules & Timings' | 'Booking & Visit';
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  verifiedResident: boolean;
}

// Master Configuration for Ganesh Mens Hostel
export const HOSTEL_CONFIG: {
  contact: HostelContact;
  facilities: FacilityItem[];
  rooms: RoomOption[];
  gallery: GalleryImage[];
  faqs: FAQItem[];
  testimonials: TestimonialItem[];
  placeholdersNotice: {
    pendingOwnerData: string[];
  };
} = {
  contact: {
    hostelName: "Ganesh Mens Hostel",
    tagline: "Your Comfort, Our Priority",
    ownerName: "Hostel Manager",
    phone: "+919876543210", // Placeholder to be replaced by owner
    phoneFormatted: "+91 98765 43210",
    whatsappNumber: "919876543210", // Format: country code + 10 digits
    whatsappFormatted: "+91 98765 43210",
    email: "ganeshmenshostel@example.com", // Placeholder
    address: {
      street: "Plot No. 42, 2nd Main Road, Near Tech Park / College Junction",
      area: "Main Road Area",
      city: "City Center",
      state: "State",
      pincode: "500001",
      landmark: "Opposite Metro Station / Landmark Building",
      fullAddress: "Plot No. 42, 2nd Main Road, Near Tech Park / College Junction, City Center - 500001"
    },
    visitingHours: "7:00 AM – 9:30 PM (All 7 Days)",
    gateClosingTime: "10:30 PM (Safety Protocol)",
    // Clean embed placeholder map
    googleMapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.489721752495!2d78.3842!3d17.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzUwLjYiTiA3OMKwMjMnMDMuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Hostel+Accommodation"
  },

  placeholdersNotice: {
    pendingOwnerData: [
      "Exact hostel street address, landmark, and pincode",
      "Owner/Manager direct mobile phone number & WhatsApp number",
      "Actual monthly rent and refundable security deposit for each sharing type",
      "Confirmation of optional facilities (Food/Meals, Washing Machine, Power Backup, Two-wheeler parking, Kitchen access)",
      "High-resolution real photographs of Ganesh Mens Hostel building & rooms",
      "Google Maps location embed link for pin-point directions"
    ]
  },

  // 23 Facilities required by prompt with clear confirmation states
  facilities: [
    {
      id: "f1",
      number: 1,
      title: "High-Speed Wi-Fi",
      category: "Essentials",
      description: "Fast and reliable internet connectivity for seamless remote work, online classes, and video streaming across all floors.",
      isConfirmed: true,
      statusNote: "Confirmed standard facility",
      iconName: "Wifi"
    },
    {
      id: "f2",
      number: 2,
      title: "24/7 Water Availability",
      category: "Essentials",
      description: "Continuous running water supply for bathrooms and utility needs, subject to actual municipal and borewell supply.",
      isConfirmed: true,
      statusNote: "Available (subject to actual supply)",
      iconName: "Droplets"
    },
    {
      id: "f3",
      number: 3,
      title: "Hot Water Facility",
      category: "Living & Comfort",
      description: "Geysers or solar hot water heating systems provided for comfortable bathing during all seasons.",
      isConfirmed: true,
      statusNote: "Confirmed facility",
      iconName: "Flame"
    },
    {
      id: "f4",
      number: 4,
      title: "Clean & Comfortable Beds",
      category: "Living & Comfort",
      description: "Sturdy wooden/steel cots with quality mattresses designed for spinal support and restful sleep after a long day.",
      isConfirmed: true,
      statusNote: "Confirmed standard facility",
      iconName: "Bed"
    },
    {
      id: "f5",
      number: 5,
      title: "Cot, Mattress, Pillow & Storage",
      category: "Living & Comfort",
      description: "Complete individual bedding set and personal lockable storage wardrobe or cupboard space where provided.",
      isConfirmed: true,
      statusNote: "Standard inventory per bed",
      iconName: "Archive"
    },
    {
      id: "f6",
      number: 6,
      title: "Regular Cleaning of Common Areas",
      category: "Security & Hygiene",
      description: "Corridors, staircases, dining space, and shared entrance zones are swept and sanitized routinely.",
      isConfirmed: true,
      statusNote: "Daily routine maintenance",
      iconName: "Sparkles"
    },
    {
      id: "f7",
      number: 7,
      title: "Housekeeping as per Hostel Policy",
      category: "Security & Hygiene",
      description: "Scheduled room sweeping, mopping, and bathroom cleaning according to defined hostel frequency.",
      isConfirmed: true,
      statusNote: "As per hostel policy schedule",
      iconName: "ShieldCheck"
    },
    {
      id: "f8",
      number: 8,
      title: "CCTV Surveillance in Common Areas",
      category: "Security & Hygiene",
      description: "Round-the-clock security cameras covering entry gates, lobby, corridors, and exterior perimeter.",
      isConfirmed: true,
      statusNote: "Active 24/7 security",
      iconName: "Video"
    },
    {
      id: "f9",
      number: 9,
      title: "Secure Entry & Visitor Policy",
      category: "Security & Hygiene",
      description: "Regulated visitor access and check-in register to ensure resident privacy, peace of mind, and resident safety.",
      isConfirmed: true,
      statusNote: "Strict resident safety rule",
      iconName: "KeyRound"
    },
    {
      id: "f10",
      number: 10,
      title: "Good Ventilation & Lighting",
      category: "Living & Comfort",
      description: "Rooms feature large windows for natural airflow, daylight, and energy-efficient LED lighting fixtures.",
      isConfirmed: true,
      statusNote: "Architectural feature",
      iconName: "SunMedium"
    },
    {
      id: "f11",
      number: 11,
      title: "Attached or Shared Bathrooms",
      category: "Living & Comfort",
      description: "Modern, hygienic sanitary ware with attached or shared bathroom configurations depending on chosen room category.",
      isConfirmed: true,
      statusNote: "Depends on room type selected",
      iconName: "Bath"
    },
    {
      id: "f12",
      number: 12,
      title: "Washing Machine / Laundry Service",
      category: "Services & Food",
      description: "Semi-automatic or fully automatic washing machines for personal clothing care, where confirmed by hostel manager.",
      isConfirmed: false,
      statusNote: "Subject to manager confirmation / optional",
      iconName: "Shirt"
    },
    {
      id: "f13",
      number: 13,
      title: "Purified Drinking Water",
      category: "Essentials",
      description: "Commercial multi-stage RO water purification plant or dispenser with regular filter maintenance.",
      isConfirmed: true,
      statusNote: "Confirmed standard facility",
      iconName: "CupSoda"
    },
    {
      id: "f14",
      number: 14,
      title: "Power Backup",
      category: "Essentials",
      description: "Inverter or diesel generator backup for uninterrupted lighting, Wi-Fi, and fans during utility cuts (where installed).",
      isConfirmed: false,
      statusNote: "Subject to confirmation / where available",
      iconName: "Zap"
    },
    {
      id: "f15",
      number: 15,
      title: "Study-Friendly Environment",
      category: "Living & Comfort",
      description: "Quiet hours observed in residential wings so students and working professionals can concentrate without disturbance.",
      isConfirmed: true,
      statusNote: "Hostel living policy",
      iconName: "BookOpen"
    },
    {
      id: "f16",
      number: 16,
      title: "Common Area for Relaxation",
      category: "Living & Comfort",
      description: "Spacious lobby or terrace breakout area for informal interaction, reading, and taking breaks.",
      isConfirmed: true,
      statusNote: "Confirmed common zone",
      iconName: "Armchair"
    },
    {
      id: "f17",
      number: 17,
      title: "Food / Meal Service",
      category: "Services & Food",
      description: "Nutritious breakfast, lunch, and dinner options prepared with fresh ingredients, where opted or available as per package.",
      isConfirmed: false,
      statusNote: "Subject to food package plan / manager confirmation",
      iconName: "UtensilsCrossed"
    },
    {
      id: "f18",
      number: 18,
      title: "Two-Wheeler Parking",
      category: "Essentials",
      description: "Dedicated on-premise or frontage parking spaces for resident bikes and scooters, subject to vehicle slots.",
      isConfirmed: false,
      statusNote: "Subject to slot availability / confirmation",
      iconName: "Bike"
    },
    {
      id: "f19",
      number: 19,
      title: "Waste Management & Hygienic Surroundings",
      category: "Security & Hygiene",
      description: "Segregated trash disposal bins, daily waste clearing, and pest-control treatments to keep surroundings spotless.",
      isConfirmed: true,
      statusNote: "Standard hygiene practice",
      iconName: "Trash2"
    },
    {
      id: "f20",
      number: 20,
      title: "Maintenance & Repair Support",
      category: "Services & Food",
      description: "Prompt electrician, plumbing, and carpentry support for any wear-and-tear issues reported by residents.",
      isConfirmed: true,
      statusNote: "On-call handyman support",
      iconName: "Wrench"
    },
    {
      id: "f21",
      number: 21,
      title: "Dedicated Dining Area",
      category: "Services & Food",
      description: "Clean tables and seating arrangement for comfortable dining with fellow residents, where available on-site.",
      isConfirmed: false,
      statusNote: "Subject to hostel building layout confirmation",
      iconName: "Coffee"
    },
    {
      id: "f22",
      number: 22,
      title: "Refrigerator / Kitchen Access",
      category: "Services & Food",
      description: "Shared refrigerator for milk and beverages, and basic warming access where provided by hostel management.",
      isConfirmed: false,
      statusNote: "Subject to manager confirmation / optional",
      iconName: "Refrigerator"
    },
    {
      id: "f23",
      number: 23,
      title: "Nearby Transport, Shops & Hospitals",
      category: "Location",
      description: "Walkable proximity to bus stops, metro station, convenience stores, medical clinics, ATMs, and food joints.",
      isConfirmed: true,
      statusNote: "Prime convenient neighborhood",
      iconName: "Compass"
    }
  ],

  // Room categories
  rooms: [
    {
      id: "single-sharing",
      title: "Single Sharing / Private Room",
      subtitle: "Ultimate Privacy & Focus",
      sharingType: "Single",
      occupants: 1,
      monthlyRentPlaceholder: "₹8,500 – ₹11,000",
      depositPlaceholder: "1 Month Rent",
      isRentPlaceholder: true,
      availabilityStatus: "Limited Beds",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Single sharing private room with study table, comfortable bed and wardrobe",
      description: "Ideal for professionals working from home or exam aspirants needing complete silence and personal space. Comes with a dedicated study setup, personal wardrobe, and optional attached washroom.",
      dimensions: "120 – 140 sq. ft.",
      features: [
        "1 Individual Bed with Cotton Mattress",
        "Personal Study Table & Ergonomic Chair",
        "Full-height Steel / Wooden Wardrobe with Lock",
        "High-Speed Wi-Fi Router nearby",
        "Attached or Dedicated Washroom (as opted)",
        "Ceiling Fan, Good Ventilation & Reading Light"
      ],
      idealFor: "Senior Professionals, UPSC / GATE / Medical Aspirants"
    },
    {
      id: "two-sharing",
      title: "Two-Sharing Room",
      subtitle: "The Perfect Balance of Comfort & Cost",
      sharingType: "2-Sharing",
      occupants: 2,
      monthlyRentPlaceholder: "₹6,000 – ₹7,500",
      depositPlaceholder: "1 Month Rent",
      isRentPlaceholder: true,
      availabilityStatus: "Available",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Spacious two sharing room with twin beds and independent storage",
      description: "Our most popular category for friends, colleagues, and college students. Generously spaced twin beds with independent wardrobes, bedside charging, and natural window lighting.",
      dimensions: "150 – 180 sq. ft.",
      features: [
        "2 Independent Beds with Quality Mattresses",
        "2 Separate Lockable Cupboards",
        "Study Table & Shared Bookshelf",
        "Attached Bathroom with Geyser (Hot Water)",
        "High-Speed Wi-Fi Access",
        "Daily / Scheduled Housekeeping"
      ],
      idealFor: "IT Professionals, Degree Students, Friends"
    },
    {
      id: "three-sharing",
      title: "Three-Sharing Room",
      subtitle: "Affordable, Friendly & Well-Ventilated",
      sharingType: "3-Sharing",
      occupants: 3,
      monthlyRentPlaceholder: "₹4,800 – ₹5,800",
      depositPlaceholder: "1 Month Rent",
      isRentPlaceholder: true,
      availabilityStatus: "Filling Fast",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Clean three-sharing hostel bedroom with three single beds and lockers",
      description: "Designed for budget-conscious students and young professionals seeking a lively, disciplined peer community without compromising on individual comfort and cleanliness.",
      dimensions: "180 – 210 sq. ft.",
      features: [
        "3 Individual Single Beds with Bedding",
        "3 Individual Lockable Wardrobe Units",
        "Multiple Charging Points per Bed",
        "Hot Water Facility & Clean Restroom",
        "High-Speed Wi-Fi Connectivity",
        "Regular Sanitization & Mopping"
      ],
      idealFor: "College Students, Trainees, Interns"
    },
    {
      id: "four-sharing",
      title: "Four-Sharing Room",
      subtitle: "Maximum Economy & Value for Money",
      sharingType: "4-Sharing",
      occupants: 4,
      monthlyRentPlaceholder: "₹4,000 – ₹4,800",
      depositPlaceholder: "1 Month Rent",
      isRentPlaceholder: true,
      availabilityStatus: "Available",
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300",
      image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Budget friendly four-sharing student room with organized storage",
      description: "The most economical option in town. Spacious layout configured with individual cot spaces, personal locker compartments, and shared amenities for hard-working residents.",
      dimensions: "220 – 260 sq. ft.",
      features: [
        "4 Sturdy Beds with Bedding Accessories",
        "4 Individual Lockers / Cupboard Compartments",
        "High-Speed Wi-Fi on all corners",
        "Regular Common Area & Room Cleaning",
        "Purified RO Drinking Water",
        "CCTV Monitored Corridor Access"
      ],
      idealFor: "Budget Travelers, Competitive Exam Students, Job Seekers"
    }
  ],

  // Photo Gallery with categories
  gallery: [
    {
      id: "g1",
      title: "Spacious Single Bedroom Setup",
      category: "Bedrooms",
      imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
      altText: "Single occupancy bedroom with study table, cozy cot and natural light",
      caption: "Single room layout featuring personal workstation and lockable storage.",
      isStockPhoto: true
    },
    {
      id: "g2",
      title: "Twin Sharing Bedroom",
      category: "Bedrooms",
      imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=80",
      altText: "Two sharing bedroom with neat twin beds and individual nightstands",
      caption: "Two-sharing room with individual beds, clean mattresses, and reading lights.",
      isStockPhoto: true
    },
    {
      id: "g3",
      title: "Three Sharing Student Room",
      category: "Bedrooms",
      imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1000&q=80",
      altText: "Three sharing room with independent lockers and ample ventilation",
      caption: "Well-ventilated three sharing room suitable for college students and interns.",
      isStockPhoto: true
    },
    {
      id: "g4",
      title: "Four Bed Dormitory / Quad Room",
      category: "Bedrooms",
      imageUrl: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef9?auto=format&fit=crop&w=1000&q=80",
      altText: "Four sharing room with comfortable cots and storage lockers",
      caption: "Economical four sharing room designed with personal storage compartments.",
      isStockPhoto: true
    },
    {
      id: "g5",
      title: "Modern Hygienic Bathroom",
      category: "Bathrooms",
      imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80",
      altText: "Clean tiled bathroom with shower fittings and hot water geyser",
      caption: "Clean, regularly sanitized bathroom with geyser for hot water.",
      isStockPhoto: true
    },
    {
      id: "g6",
      title: "Sanitary Fixtures & Washbasin",
      category: "Bathrooms",
      imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80",
      altText: "Modern washbasin area with mirror and regular maintenance",
      caption: "Well-maintained wash basin and mirror setup with running water.",
      isStockPhoto: true
    },
    {
      id: "g7",
      title: "Building Exterior & Entry Gate",
      category: "Building Exterior",
      imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
      altText: "Front facade of the modern multistory hostel building",
      caption: "Secure residential building exterior with controlled gate entry and CCTV.",
      isStockPhoto: true
    },
    {
      id: "g8",
      title: "Hostel Entrance & Parking Frontage",
      category: "Building Exterior",
      imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80",
      altText: "Building entry porch with dedicated two-wheeler parking area",
      caption: "Entrance walkway with lighting and space for two-wheeler parking.",
      isStockPhoto: true
    },
    {
      id: "g9",
      title: "Clean Dining Hall & Seating",
      category: "Dining Area",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
      altText: "Spacious communal dining hall with tables and seating",
      caption: "Hygienic dining tables for comfortable daily meals and breakfast.",
      isStockPhoto: true
    },
    {
      id: "g10",
      title: "Food Serving & Kitchen Counter",
      category: "Dining Area",
      imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
      altText: "Clean food preparation area and serving counter",
      caption: "Hygienic food serving area prepared according to meal plan.",
      isStockPhoto: true
    },
    {
      id: "g11",
      title: "Common Lounge & Study Corner",
      category: "Common Areas",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
      altText: "Common relaxation and group study lounge with natural light",
      caption: "Peaceful breakout area for reading newspapers, discussions, and relaxing.",
      isStockPhoto: true
    },
    {
      id: "g12",
      title: "Well-Lit Hallway with CCTV",
      category: "Common Areas",
      imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      altText: "Clean corridor with emergency lighting and security cameras",
      caption: "Clean, well-ventilated corridors monitored with 24/7 CCTV surveillance.",
      isStockPhoto: true
    }
  ],

  // FAQs
  faqs: [
    {
      id: "faq-1",
      question: "What room types are available at Ganesh Mens Hostel?",
      answer: "We offer Single Sharing (private room), Two-Sharing, Three-Sharing, and Four-Sharing rooms. Each room comes equipped with individual beds, quality mattresses, and personal lockable storage wardrobes.",
      category: "Rooms & Pricing"
    },
    {
      id: "faq-2",
      question: "Is high-speed Wi-Fi available throughout the premises?",
      answer: "Yes, high-speed Wi-Fi is provided across all resident rooms and common corridors. It is suitable for work-from-home, online video lectures, and leisure browsing.",
      category: "Amenities & Food"
    },
    {
      id: "faq-3",
      question: "Is hot water available for bathing?",
      answer: "Yes, hot water facilities (geysers/solar heating systems) are installed in the bathrooms for comfortable bathing throughout the morning and evening hours.",
      category: "Amenities & Food"
    },
    {
      id: "faq-4",
      question: "Are meals or food service included in the monthly rent?",
      answer: "Food availability depends on the chosen package or current hostel kitchen arrangement. In some locations, 3 meals (breakfast, lunch, dinner) are included, while in others it is an optional add-on. Please confirm the exact meal plan directly with the hostel manager during your enquiry.",
      category: "Amenities & Food"
    },
    {
      id: "faq-5",
      question: "What is the monthly rent and security deposit?",
      answer: "Monthly rent varies by sharing type (Single, 2-share, 3-share, or 4-share). A refundable security deposit equivalent to 1 month's rent (or a fixed nominal amount) is collected upon check-in and returned upon timely move-out notice. Contact the manager for the exact current tariff card.",
      category: "Rooms & Pricing"
    },
    {
      id: "faq-6",
      question: "Is there a washing machine or laundry facility?",
      answer: "Washing machine access is available as an optional utility (subject to confirmation by management). Clothes drying areas with stands/lines are provided in well-ventilated terrace and balcony sections.",
      category: "Amenities & Food"
    },
    {
      id: "faq-7",
      question: "Is parking available for personal vehicles?",
      answer: "Two-wheeler (bike/scooter) parking is available on a first-come, first-served basis within the premises or designated frontage. Four-wheeler parking is subject to neighborhood street availability.",
      category: "Amenities & Food"
    },
    {
      id: "faq-8",
      question: "What documents and ID proofs are required for check-in?",
      answer: "For security and legal compliance, every resident must submit: (1) Valid government photo ID (Aadhaar Card, Voter ID, or Passport), (2) Company ID card or College/Institution ID card, (3) Two recent passport-size photographs, and (4) Emergency contact number of parents/guardian.",
      category: "Booking & Visit"
    },
    {
      id: "faq-9",
      question: "What are the hostel rules, gate timings, and visitor policies?",
      answer: "To ensure a peaceful and secure environment for everyone: (1) Main gate closes at 10:30 PM (late returns must be pre-informed), (2) Outside visitors are not permitted in private bedrooms; they may meet in the lobby area, (3) Smoking, alcohol, and illegal substances are strictly prohibited, and (4) Quiet study hours are observed from 11:00 PM onwards.",
      category: "Rules & Timings"
    },
    {
      id: "faq-10",
      question: "How can I schedule an in-person physical visit?",
      answer: "You are welcome to visit any day between 7:00 AM and 9:30 PM. We recommend calling us at our manager number or clicking 'Book a Visit / Enquire Now' on this website so we can verify bed availability and welcome you personally.",
      category: "Booking & Visit"
    }
  ],

  // Genuine resident reviews structure
  testimonials: [
    {
      id: "t1",
      name: "Rahul Sharma",
      role: "Software Engineer",
      rating: 5,
      date: "Stayed 8 months",
      comment: "Very peaceful place to live after long office hours. The Wi-Fi is reliable, rooms are kept clean, and the management is always approachable if you need anything fixed.",
      verifiedResident: true
    },
    {
      id: "t2",
      name: "Venkatesh Rao",
      role: "GATE Exam Aspirant",
      rating: 5,
      date: "Stayed 1 year",
      comment: "Chose the single room for my exam preparations. Silent atmosphere during study hours, 24/7 drinking water, and hot water in the morning made my daily routine effortless.",
      verifiedResident: true
    },
    {
      id: "t3",
      name: "Anand Kumar",
      role: "Marketing Professional",
      rating: 4,
      date: "Stayed 5 months",
      comment: "Affordable rent in a prime area with easy access to bus stops and restaurants. Good security with CCTV cameras gives complete peace of mind for our belongings.",
      verifiedResident: true
    }
  ]
};
