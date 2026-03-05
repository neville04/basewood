import { useState } from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "acca",
    name: "ACCA",
    subtitle: "Accounting & Finance",
    org: "Association of Chartered Certified Accountants",
    badge: "Most Popular",
    img: "/acca.jpg",
  },
  {
    id: "cpa",
    name: "CPA Uganda",
    subtitle: "Certified Public Accountant",
    org: "Institute of Certified Public Accountants of Uganda",
    badge: "Recognised Provider",
    img: "/cpa.jpg",
  },
  {
    id: "cilt",
    name: "CILT",
    subtitle: "Logistics & Transport",
    org: "Chartered Institute of Logistics & Transport",
    badge: null,
    img: "/logistics.jpg",
  },
];

const morePrograms = [
  { id: "cim", name: "CIM", subtitle: "Chartered Institute of Marketing", tag: "UK Accredited" },
  { id: "cips", name: "CIPS", subtitle: "Chartered Institute of Procurement & Supply", tag: "Levels 4–6" },
  { id: "frm", name: "FRM", subtitle: "Financial Risk Manager — GARP", tag: "Professional" },
];

const Programs = () => {
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <section id="programs" className="py-16 bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto px-[7%]">
        {/* Header */}
        <div className="border-b-2 border-navy pb-5 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Our Programs</p>
            <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-navy leading-tight tracking-tight">
              Professional Certification Courses
            </h2>
          </div>
          <Link to="/programs" className="text-[13px] font-semibold text-teal-dark no-underline hover:underline whitespace-nowrap">
            View all programs →
          </Link>
        </div>

        {/* Program Cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-border mb-8">
          {programs.map((prog) => (
            <Link
              key={prog.id}
              to="/programs"
              className="border-b border-r border-border bg-background hover:bg-secondary transition-colors no-underline group flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden h-[200px]">
                <img
                  src={prog.img}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="font-display text-[22px] font-bold text-navy leading-tight">{prog.name}</div>
                    <div className="text-[12px] text-teal-dark font-semibold uppercase tracking-[0.08em] mt-0.5">{prog.subtitle}</div>
                  </div>
                  {prog.badge && (
                    <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] bg-navy text-white px-2 py-1 mt-1">
                      {prog.badge}
                    </span>
                  )}
                </div>
                <p className="text-[12px] text-muted-foreground mb-5 leading-relaxed flex-1">{prog.org}</p>
                <div className="text-[12px] font-bold uppercase tracking-[0.08em] text-navy/40 group-hover:text-navy transition-colors">
                  View Program →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Programs accordion */}
        <div className="border border-border mb-8">
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex items-center justify-between w-full px-6 py-4 bg-secondary hover:bg-border/60 transition-colors text-left"
          >
            <div>
              <span className="font-semibold text-navy text-[14px] uppercase tracking-[0.06em]">More Professional Programs</span>
              <span className="ml-3 text-[11px] text-muted-foreground font-medium">CIM · CIPS · FRM</span>
            </div>
            <span className={`text-navy font-bold text-lg transition-transform duration-200 ${moreOpen ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${moreOpen ? "max-h-[300px]" : "max-h-0"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-border">
              {morePrograms.map((prog) => (
                <Link
                  key={prog.id}
                  to="/programs"
                  className="px-6 py-5 border-b md:border-b-0 border-r border-border bg-background hover:bg-secondary transition-colors no-underline group last:border-r-0"
                >
                  <div className="font-display text-[20px] font-bold text-navy mb-0.5 group-hover:text-teal-dark transition-colors">{prog.name}</div>
                  <div className="text-[12px] text-muted-foreground mb-3">{prog.subtitle}</div>
                  <span className="inline-block text-[10px] uppercase tracking-[0.1em] font-semibold text-teal-dark border border-teal-dark/40 px-2 py-0.5">{prog.tag}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-navy p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal font-semibold mb-1">Not sure where to start?</p>
            <p className="font-display text-[22px] font-bold text-white leading-tight">
              Speak with an Enrollment Advisor Today
            </p>
            <p className="text-sm text-white/60 mt-1">We'll match you to the right program based on your career goals.</p>
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
      </div>
    </section>
  );
};

export default Programs;
