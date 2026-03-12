import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import programsHero from "@/assets/programs-hero.jpg";

const programs = [
  {
    abbr: "ACCA",
    full: "Association of Chartered Certified Accountants",
    tag: "Approved Learning Partner",
    img: "/acca.png",
  },
  {
    abbr: "CPA Uganda",
    full: "Institute of Certified Public Accountants of Uganda",
    tag: "Recognised Tuition Provider",
    img: "/cpa.png",
  },
  {
    abbr: "CILT",
    full: "Chartered Institute of Logistics & Transport",
    tag: "Accredited Study Centre",
    img: "/logistics.png",
  },
  {
    abbr: "CIM",
    full: "Chartered Institute of Marketing",
    tag: "UK Accredited",
    img: "/marketing.jpg",
  },
  {
    abbr: "CIPS",
    full: "Chartered Institute of Procurement & Supply",
    tag: "Levels 4 – 6",
    img: "/procurement.jpg",
  },
  {
    abbr: "FRM",
    full: "Financial Risk Manager — GARP",
    tag: "Professional Certification",
    img: "/financial%20risk.jpg",
  },
];

const shortCourses = [
  { cat: "Finance", name: "IFRS — Financial Instruments" },
  { cat: "Finance", name: "IPSAS — Public Sector Accounting" },
  { cat: "Finance", name: "Finance for Non-Finance Managers" },
  { cat: "Finance", name: "Internal Control Systems" },
  { cat: "Digital", name: "AI Powered Marketing" },
  { cat: "Digital", name: "Social Media Marketing & Management" },
  { cat: "Digital", name: "Search Engine Optimization" },
  { cat: "Digital", name: "Mastering Digital Customer Experience" },
  { cat: "Marketing", name: "Strategic Brand Management" },
  { cat: "Marketing", name: "Campaign Planning & Execution" },
  { cat: "Supply Chain", name: "Sustainability & Circular Economy" },
  { cat: "Sales", name: "Sales Leadership & Team Management" },
];

const ProgramsPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero image banner */}
      <div className="relative overflow-hidden h-[260px] sm:h-[320px] lg:h-[420px]">
        <img
          src={programsHero}
          alt="Basewood Institute Programs"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy/72" />
        <div className="absolute inset-0 flex flex-col justify-end pb-10 pt-16 sm:pb-12 sm:pt-[100px]">
          <div className="max-w-[1200px] mx-auto px-[7%] w-full">
            <p className="text-[11px] uppercase tracking-[0.16em] font-semibold mb-2" style={{ color: "hsl(var(--teal))" }}>
              Basewood Institute
            </p>
            <h1 className="font-display text-[clamp(28px,3.5vw,48px)] font-bold text-white leading-tight mb-3">
              Professional Certification Programs
            </h1>
            <p className="text-white/60 text-[14px] max-w-[540px]">
              Internationally recognised qualifications — designed for working professionals across East Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Programs grid */}
      <section className="bg-background py-14 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <div className="border-b-2 border-navy pb-5 mb-10">
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Our Qualifications</p>
            <h2 className="font-display text-[clamp(22px,2.5vw,34px)] font-bold text-navy">
              Professional Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {programs.map((p) => (
              <Link
                key={p.abbr}
                to="/enroll"
                className="border-b border-r border-border bg-background hover:bg-secondary transition-colors no-underline group flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden h-[180px]">
                  <img
                    src={p.img}
                    alt={p.abbr}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-display text-[clamp(22px,2vw,28px)] font-bold text-navy mb-1 group-hover:text-teal-dark transition-colors">
                    {p.abbr}
                  </div>
                  <div className="text-[12px] text-muted-foreground leading-snug mb-4 flex-1">{p.full}</div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[10px] uppercase tracking-[0.1em] font-semibold text-teal-dark border border-teal-dark/40 px-2.5 py-1">
                      {p.tag}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-navy/40 group-hover:text-navy transition-colors">
                      Enroll →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="bg-secondary py-14 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <div className="border-b-2 border-navy pb-5 mb-10">
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Executive & Short Programs</p>
            <h2 className="font-display text-[clamp(22px,2.5vw,32px)] font-bold text-navy">Short Courses</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border bg-background">
            {shortCourses.map((sc) => (
              <Link
                key={sc.name}
                to="/enroll"
                className="border-b border-r border-border p-5 hover:bg-secondary transition-colors no-underline group"
              >
                <div className="text-[10px] font-bold text-teal-dark uppercase tracking-[0.1em] mb-1">{sc.cat}</div>
                <div className="text-[14px] font-medium text-navy leading-snug group-hover:text-teal-dark transition-colors">{sc.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="max-w-[1200px] mx-auto px-[7%] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold mb-1" style={{ color: "hsl(var(--teal))" }}>Not sure where to start?</p>
            <h3 className="font-display text-[clamp(20px,2.2vw,30px)] font-bold text-white">
              Speak with an Enrollment Advisor
            </h3>
            <p className="text-white/60 text-sm mt-1">We'll match you to the right program based on your career goals.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link to="/enroll" className="px-6 py-3 bg-white text-navy font-bold text-sm uppercase tracking-[0.06em] no-underline hover:bg-teal hover:text-white transition-colors">
              Enroll Now
            </Link>
            <a href="https://wa.me/256773099672" className="px-6 py-3 border-2 border-white/40 text-white font-bold text-sm uppercase tracking-[0.06em] no-underline hover:border-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </>
  );
};

export default ProgramsPage;
