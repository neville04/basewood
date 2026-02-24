import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const programs = [
  {
    name: "ACCA — Accounting & Finance",
    org: "Association of Chartered Certified Accountants",
    pills: ["Applied Knowledge", "Applied Skills", "Strategic Professional", "CBE Centre"],
    badge: "Most Popular",
    badgeType: "hot" as const,
    featured: true,
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80",
  },
  {
    name: "CPA Uganda",
    org: "Institute of Certified Public Accountants of Uganda",
    pills: ["Level I", "Level II", "Level III", "Level IV"],
    badge: "Recognised Provider",
    badgeType: "new" as const,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80",
  },
  {
    name: "CILT — Logistics & Transport",
    org: "Chartered Institute of Logistics & Transport",
    pills: ["International Diploma", "International Certificate", "Short Courses"],
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=200&q=80",
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
  const { ref, visible } = useReveal();

  return (
    <section
      id="programs"
      className="py-[100px] relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #c7b8ea 0%, #b8cef5 25%, #c2d8f8 45%, #d4e8fb 65%, #e8f4ff 82%, #f5f8ff 100%)",
        backgroundSize: "300% 300%",
        animation: "awsShift 12s ease-in-out infinite alternate",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-[7%] relative z-[1]" ref={ref}>
        {/* Header */}
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end mb-14 gap-10 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-purple-800 mb-2.5">Our Programs</div>
            <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-[#1a1a2e] leading-[1.12] tracking-tight">
              Professional Courses<br />Built for <em className="italic text-purple-700">Careers</em>
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3.5">
            <p className="text-[15px] text-[#1a1a2e]/60 leading-relaxed font-light lg:text-right max-w-[320px]">
              Internationally recognised qualifications — designed for working professionals. Evenings, weekends, blended.
            </p>
            <a href="/programs" className="text-[13px] font-semibold text-indigo-700 no-underline inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
              View all programs →
            </a>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {programs.map((prog, i) => (
            <div
              key={prog.name}
              className={`group bg-white/45 border border-white/75 backdrop-blur-[20px] rounded-[14px] p-7 shadow-[0_8px_32px_rgba(109,40,217,0.1)] cursor-pointer hover:shadow-[0_12px_40px_rgba(109,40,217,0.16)] transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-[52px] h-[52px] bg-cover bg-center rounded-[10px] overflow-hidden relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300 mb-4"
                style={{ backgroundImage: `url('${prog.img}')` }}
              >
                <div className="absolute inset-0 bg-navy/[0.16] group-hover:opacity-0 transition-opacity" />
              </div>

              <div className="flex items-center gap-2.5 flex-wrap mb-1">
                <div className="font-display text-xl font-semibold text-[#1a1a2e] group-hover:text-purple-700 transition-colors">
                  {prog.name}
                </div>
                {prog.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-mono tracking-[0.06em] uppercase ${
                      prog.badgeType === "hot"
                        ? "bg-teal-dark/10 text-teal-dark border border-teal-dark/[0.22]"
                        : "bg-purple-700/[0.08] text-purple-700 border border-purple-700/20"
                    }`}
                  >
                    {prog.badge}
                  </span>
                )}
              </div>

              <span className="text-[13px] text-[#1a1a2e]/[0.48] block mb-3">{prog.org}</span>

              <div className="flex gap-1.5 flex-wrap mb-5">
                {prog.pills.map((p) => (
                  <span key={p} className="text-[10px] text-[#1a1a2e]/60 bg-white/60 px-2 py-0.5 rounded-full font-mono tracking-[0.04em]">
                    {p}
                  </span>
                ))}
              </div>

              <a
                href="/enroll"
                className="px-5 py-2 bg-[#1a1a2e] text-primary-foreground rounded-[7px] text-[13px] font-semibold no-underline hover:bg-purple-700 transition-colors whitespace-nowrap inline-block"
              >
                Enroll Now →
              </a>
            </div>
          ))}
        </div>

        {/* Explore More Programs */}
        <div className={`mt-11 border border-indigo-500/[0.15] rounded-[14px] overflow-hidden transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex items-center justify-between w-full px-[26px] py-[18px] bg-white/45 backdrop-blur-[10px] border-b border-indigo-500/[0.12] cursor-pointer hover:bg-white/65 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] bg-[#1a1a2e] rounded-lg flex items-center justify-center text-[15px]">🎓</div>
              <div className="text-left">
                <div className="font-display text-[17px] font-semibold text-[#1a1a2e]">More Professional Programs</div>
                <div className="text-[10px] font-mono text-[#1a1a2e]/40 tracking-[0.06em] mt-0.5">CIM · CIPS · FRM</div>
              </div>
            </div>
            <div className="text-[12px] text-[#1a1a2e]/40 font-mono flex items-center gap-1.5">
              <span>Explore</span>
              <span className={`transition-transform duration-300 inline-block ${moreOpen ? "rotate-180" : ""}`}>↓</span>
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-[420ms] ease-in-out ${moreOpen ? "max-h-[500px]" : "max-h-0"}`}>
            {morePrograms.map((prog) => (
              <div key={prog.name} className="px-[26px] py-4 border-b border-indigo-500/10 last:border-b-0 hover:bg-white/50 transition-colors">
                <div className="font-display text-[16px] font-semibold text-[#1a1a2e] mb-1">{prog.name}</div>
                <div className="text-[12px] text-[#1a1a2e]/50 mb-2">{prog.org}</div>
                <div className="flex gap-1.5 flex-wrap">
                  {prog.pills.map((p) => (
                    <span key={p} className="text-[10px] text-[#1a1a2e]/60 bg-white/60 px-2 py-0.5 rounded-full font-mono tracking-[0.04em]">{p}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Short Courses */}
        <div className={`mt-11 border border-indigo-500/[0.15] rounded-[14px] overflow-hidden transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <button
            onClick={() => setScOpen(!scOpen)}
            className="flex items-center justify-between w-full px-[26px] py-[18px] bg-white/45 backdrop-blur-[10px] border-b border-indigo-500/[0.12] cursor-pointer hover:bg-white/65 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-[34px] h-[34px] bg-[#1a1a2e] rounded-lg flex items-center justify-center text-[15px]">📚</div>
              <div className="text-left">
                <div className="font-display text-[17px] font-semibold text-[#1a1a2e]">Short Courses & Executive Programs</div>
                <div className="text-[10px] font-mono text-[#1a1a2e]/40 tracking-[0.06em] mt-0.5">25+ COURSES · 6 CATEGORIES</div>
              </div>
            </div>
            <div className="text-[12px] text-[#1a1a2e]/40 font-mono flex items-center gap-1.5">
              <span>Explore</span>
              <span className={`transition-transform duration-300 inline-block ${scOpen ? "rotate-180" : ""}`}>↓</span>
            </div>
          </button>
          <div className={`grid grid-cols-2 lg:grid-cols-4 overflow-hidden transition-all duration-[420ms] ease-in-out ${scOpen ? "max-h-[700px]" : "max-h-0"}`}>
            {shortCourses.map((sc) => (
              <div key={sc.name} className="p-4 lg:px-[22px] border-r border-b border-indigo-500/10 last:border-r-0 hover:bg-white/50 transition-colors cursor-pointer">
                <div className="text-[10px] font-mono text-purple-700 uppercase tracking-[0.1em] mb-1">{sc.cat}</div>
                <div className="text-[13px] font-medium text-[#1a1a2e] leading-snug">{sc.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Strip */}
        <div className={`mt-11 bg-white/45 border border-white/75 backdrop-blur-[20px] rounded-[14px] p-9 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 shadow-[0_8px_32px_rgba(109,40,217,0.1)] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-purple-700 mb-2">Not sure where to start?</div>
            <div className="font-display text-[26px] font-semibold text-[#1a1a2e] leading-tight">
              Speak with an <em className="italic text-purple-700">Advisor</em> Today
            </div>
            <div className="mt-1.5 text-sm text-[#1a1a2e]/[0.52] font-light">We'll match you to the right program based on your career goals and schedule.</div>
          </div>
          <div className="flex gap-2.5 flex-shrink-0">
            <a href="/enroll" className="px-[26px] py-3 bg-[#1a1a2e] text-primary-foreground rounded-lg font-bold text-sm no-underline whitespace-nowrap hover:bg-purple-700 transition-colors shadow-[0_4px_16px_rgba(26,26,46,0.2)]">
              Enroll Now
            </a>
            <a href="https://wa.me/256773099672" className="px-[26px] py-3 bg-transparent text-[#1a1a2e]/60 rounded-lg font-medium text-sm no-underline border border-[#1a1a2e]/25 whitespace-nowrap hover:border-purple-700 hover:text-[#1a1a2e] transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
