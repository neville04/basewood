import { useState } from "react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "acca",
    name: "ACCA",
    subtitle: "Accounting & Finance",
    org: "Association of Chartered Certified Accountants",
    badge: "Most Popular",
    img: "/acca.png",
    accent: "#C8102E",
  },
  {
    id: "cpa",
    name: "CPA Uganda",
    subtitle: "Certified Public Accountant",
    org: "Institute of Certified Public Accountants of Uganda",
    badge: "Recognised Provider",
    img: "/cpa.png",
    accent: "#F5B514",
  },
  {
    id: "cilt",
    name: "CILT",
    subtitle: "Logistics & Transport",
    org: "Chartered Institute of Logistics & Transport",
    badge: null,
    img: "/logistics.png",
    accent: "#8B5CF6",
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
    <section id="programs" className="py-20 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-[7%]">
        <div className="border-b-2 border-navy/60 pb-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Our Programs</p>
            <h2 className="font-display text-[clamp(32px,3.4vw,48px)] font-bold text-navy leading-tight tracking-tight">
              Professional Certification Courses
            </h2>
          </div>
          <Link to="/programs" className="text-[13px] font-semibold text-teal-dark no-underline hover:underline whitespace-nowrap">
            View all programs →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {programs.map((prog) => (
            <Link
              key={prog.id}
              to="/programs"
              className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-[0_18px_35px_rgba(13,27,75,0.08)] no-underline group flex flex-col transition-transform duration-300 hover:-translate-y-1"
              style={{ borderTopWidth: "6px", borderTopColor: prog.accent }}
            >
              <div className="overflow-hidden h-[200px]">
                <img
                  src={prog.img}
                  alt={prog.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <div className="font-display text-[24px] font-semibold text-navy leading-tight">{prog.name}</div>
                    <div className="text-[12px] text-teal-dark font-semibold uppercase tracking-[0.08em] mt-0.5">{prog.subtitle}</div>
                  </div>
                  {prog.badge && (
                    <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] bg-navy text-white px-2 py-1 mt-1 rounded-full">
                      {prog.badge}
                    </span>
                  )}
                </div>
                <p className="text-[13px] text-[#6B7280] mb-5 leading-relaxed flex-1">{prog.org}</p>
                <div className="text-[12px] font-semibold uppercase tracking-[0.1em] text-[#2DD4BF] group-hover:underline transition-colors flex items-center gap-1">
                  View Program →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="border border-black/5 rounded-2xl overflow-hidden shadow-[0_12px_30px_rgba(15,23,42,0.06)] mb-12">
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex items-center justify-between w-full px-6 py-5 bg-secondary hover:bg-white transition-colors text-left"
          >
            <div>
              <span className="font-semibold text-navy text-[14px] uppercase tracking-[0.06em]">More Professional Programs</span>
              <span className="ml-3 text-[11px] text-muted-foreground font-medium">CIM · CIPS · FRM</span>
            </div>
            <span className={`text-navy font-bold text-lg transition-transform duration-200 ${moreOpen ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${moreOpen ? "max-h-[320px]" : "max-h-0"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-black/5 bg-white">
              {morePrograms.map((prog) => (
                <Link
                  key={prog.id}
                  to="/programs"
                  className="px-6 py-5 border-b md:border-b-0 border-r border-black/5 bg-white hover:bg-secondary transition-colors no-underline group last:border-r-0"
                >
                  <div className="font-display text-[22px] font-bold text-navy mb-0.5 group-hover:text-teal-dark transition-colors">{prog.name}</div>
                  <div className="text-[13px] text-[#6B7280] mb-3">{prog.subtitle}</div>
                  <span className="inline-block text-[10px] uppercase tracking-[0.1em] font-semibold text-teal-dark border border-teal-dark/40 px-2 py-0.5">
                    {prog.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#EEF2F8] border border-black/5 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-2">Not sure where to start?</p>
            <p className="font-display text-[26px] font-bold text-navy leading-tight">Speak with an Enrollment Advisor Today</p>
            <p className="text-sm text-[#6B7280] mt-2">We'll match you to the right program based on your career goals.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              to="/enroll"
              className="px-8 py-3 bg-[#2DD4BF] text-white font-bold text-sm uppercase tracking-[0.06em] no-underline rounded-full text-center shadow-[0_12px_28px_rgba(32,54,89,0.18)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/256773099672"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#2DD4BF] text-[#1E3A5F] font-bold text-sm uppercase tracking-[0.06em] no-underline rounded-full text-center transition-all duration-200 hover:-translate-y-0.5 hover:bg-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
