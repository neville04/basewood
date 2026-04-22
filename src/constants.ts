// Centralised local data — structured to fit the institutional component library.
// Edit this file to update content; components consume it directly.

export const CONTACT_INFO = {
  name: "Basewood Consult Uganda Limited",
  address: "Plot 106, Kanjokya Street, Kampala, Uganda",
  phones: ["+256 744 488 316", "+256 769 013 080", "+256 773 099 672 (WhatsApp)"],
  email: "info@basewoodconsult.ac.ug",
  website: "www.basewoodconsult.ac.ug",
  whatsapp: "256773099672",
};

export type ProfessionalCourse = {
  name: string;          // short abbreviation
  fullName: string;      // long form
  tag: string;           // accreditation tag
  img: string;           // public-folder image
};

export const PROFESSIONAL_COURSES: ProfessionalCourse[] = [
  { name: "ACCA",       fullName: "Association of Chartered Certified Accountants",       tag: "Approved Learning Partner", img: "/acca.png" },
  { name: "CPA Uganda", fullName: "Institute of Certified Public Accountants of Uganda",  tag: "Recognised Tuition Provider", img: "/cpa.png" },
  { name: "CILT",       fullName: "Chartered Institute of Logistics & Transport",         tag: "Accredited Study Centre", img: "/logistics.png" },
  { name: "CIM",        fullName: "Chartered Institute of Marketing",                     tag: "UK Accredited", img: "/marketing.jpg" },
  { name: "CIPS",       fullName: "Chartered Institute of Procurement & Supply",          tag: "Levels 4 – 6", img: "/procurement.jpg" },
  { name: "FRM",        fullName: "Financial Risk Manager — GARP",                        tag: "Professional Certification", img: "/financial%20risk.jpg" },
];

export const SHORT_COURSES: Record<string, string[]> = {
  "FINANCE": [
    "IFRS — Financial Instruments",
    "IPSAS — Public Sector Accounting",
    "Finance for Non-Finance Managers",
    "Internal Control Systems",
  ],
  "DIGITAL MARKETING": [
    "AI Powered Marketing",
    "Social Media Marketing & Management",
    "Search Engine Optimization",
    "Mastering Digital Customer Experience",
  ],
  "CONVENTIONAL MARKETING": [
    "Strategic Brand Management",
    "Campaign Planning & Execution",
  ],
  "SUPPLY CHAIN MANAGEMENT": [
    "Sustainability & Circular Economy",
  ],
  "SALES AND DISTRIBUTION": [
    "Sales Leadership & Team Management",
  ],
};

export const PARTNERS: string[] = [
  "MTN Uganda",
  "Uganda Communications Commission",
  "Jumia Uganda",
  "Nation Media Group",
  "Uganda Airlines",
  "Kiira Motors",
  "NSSF",
  "Centenary Bank",
];

export const PARTNER_LOGOS: Record<string, string> = {
  "MTN Uganda": "/MTN.png",
  "Uganda Communications Commission": "/UCC.png",
  "Jumia Uganda": "/jumia.png",
  "Nation Media Group": "/NMG.png",
  "Uganda Airlines": "/UG.png",
  "Kiira Motors": "/Kiira.png",
  "NSSF": "/NSSF.png",
  "Centenary Bank": "/Centenary.png",
};

export type FullCircleStep = {
  number: string;
  title: string;
  desc: string;
};

export const FULL_CIRCLE_APPROACH: FullCircleStep[] = [
  { number: "01", title: "Diagnose",       desc: "We assess your career goals or organisational needs to recommend the right pathway." },
  { number: "02", title: "Design",         desc: "We tailor a learning plan — blending professional certifications, short courses, and consultancy." },
  { number: "03", title: "Deliver",        desc: "Expert-led training, online and in-person, scheduled around working professionals." },
  { number: "04", title: "Develop",        desc: "Continuous mentorship, alumni network access, and post-certification career support." },
];
