import { useState } from "react";

const programs = [
  {
    name: "ACCA — Accounting & Finance",
    org: "Association of Chartered Certified Accountants",
    pills: ["Applied Knowledge", "Applied Skills", "Strategic Professional", "CBE Centre"],
    badge: "Most Popular",
  },
  {
    name: "CPA Uganda",
    org: "Institute of Certified Public Accountants of Uganda",
    pills: ["Level I", "Level II", "Level III", "Level IV"],
    badge: "Recognised Provider",
  },
  {
    name: "CILT — Logistics & Transport",
    org: "Chartered Institute of Logistics & Transport",
    pills: ["International Diploma", "International Certificate", "Short Courses"],
    badge: null,
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

const morePrograms = [
  { name: "CIM — Marketing", org: "Chartered Institute of Marketing — UK Accredited", pills: ["Diploma", "Postgraduate", "Blended"] },
  { name: "CIPS — Procurement & Supply", org: "Chartered Institute of Procurement & Supply", pills: ["Level 4", "Level 5", "Level 6"] },
  { name: "FRM — Financial Risk Manager", org: "Global Association of Risk Professionals (GARP)", pills: ["Professional"] },
];

const Programs = () => {
  const [scOpen, setScOpen] = useState(false);
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
          <a href="/programs" className="text-[13px] font-semibold text-teal-dark no-underline hover:underline whitespace-nowrap">
            View all programs →
          </a>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {programs.map((prog) => (
            <div
              key={prog.name}
              className="bg-background border border-border hover:border-navy transition-colors p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-[18px] font-bold text-navy leading-tight">{prog.name}</h3>
                {prog.badge && (
                  <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-[0.08em] bg-navy text-white px-2 py-1">
                    {prog.badge}
                  </span>
                )}
              </div>

              <p className="text-[12px] text-muted-foreground mb-4 leading-relaxed">{prog.org}</p>

              <div className="flex gap-1.5 flex-wrap mb-6">
                {prog.pills.map((p) => (
                  <span key={p} className="text-[11px] text-navy/70 bg-secondary border border-border px-2 py-0.5 font-medium">
                    {p}
                  </span>
                ))}
              </div>

              <a
                href="/enroll"
                className="inline-block px-5 py-2.5 bg-navy text-white text-[12px] font-bold uppercase tracking-[0.06em] no-underline hover:bg-teal-dark transition-colors"
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>

        {/* More Programs accordion */}
        <div className="border border-border mb-4">
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex items-center justify-between w-full px-6 py-4 bg-secondary hover:bg-border/60 transition-colors text-left"
          >
            <div>
              <span className="font-semibold text-navy text-[14px] uppercase tracking-[0.06em]">More Professional Programs</span>
              <span className="ml-3 text-[11px] text-muted-foreground font-medium">CIM · CIPS · FRM</span>
            </div>
            <span className={`text-navy font-bold text-lg transition-transform ${moreOpen ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${moreOpen ? "max-h-[400px]" : "max-h-0"}`}>
            {morePrograms.map((prog) => (
              <div key={prog.name} className="px-6 py-4 border-t border-border bg-background">
                <div className="font-display text-[16px] font-bold text-navy mb-0.5">{prog.name}</div>
                <div className="text-[12px] text-muted-foreground mb-2">{prog.org}</div>
                <div className="flex gap-1.5 flex-wrap">
                  {prog.pills.map((p) => (
                    <span key={p} className="text-[11px] text-navy/70 bg-secondary border border-border px-2 py-0.5">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Short Courses accordion */}
        <div className="border border-border mb-8">
          <button
            onClick={() => setScOpen(!scOpen)}
            className="flex items-center justify-between w-full px-6 py-4 bg-secondary hover:bg-border/60 transition-colors text-left"
          >
            <div>
              <span className="font-semibold text-navy text-[14px] uppercase tracking-[0.06em]">Short Courses & Executive Programs</span>
              <span className="ml-3 text-[11px] text-muted-foreground font-medium">25+ Courses · 6 Categories</span>
            </div>
            <span className={`text-navy font-bold text-lg transition-transform ${scOpen ? "rotate-45" : ""}`}>+</span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${scOpen ? "max-h-[600px]" : "max-h-0"}`}>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-border">
              {shortCourses.map((sc, i) => (
                <div key={sc.name} className={`p-4 border-border bg-background hover:bg-secondary transition-colors ${i % 4 !== 3 ? "border-r" : ""} border-b`}>
                  <div className="text-[10px] font-bold text-teal-dark uppercase tracking-[0.1em] mb-1">{sc.cat}</div>
                  <div className="text-[13px] font-medium text-navy leading-snug">{sc.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="bg-secondary border border-border p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold mb-1">Not sure where to start?</p>
            <p className="font-display text-[22px] font-bold text-navy leading-tight">
              Speak with an Enrollment Advisor Today
            </p>
            <p className="text-sm text-muted-foreground mt-1">We'll match you to the right program based on your career goals.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="/enroll" className="px-6 py-3 bg-navy text-white font-bold text-sm uppercase tracking-[0.06em] no-underline hover:bg-teal-dark transition-colors">
              Enroll Now
            </a>
            <a href="https://wa.me/256773099672" className="px-6 py-3 border-2 border-navy text-navy font-bold text-sm uppercase tracking-[0.06em] no-underline hover:bg-navy hover:text-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
