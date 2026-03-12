import { Globe, Award, Calendar, Cpu } from "lucide-react";
import abdulHameed from "@/assets/abdul-hameed.png";

const features = [
  { icon: "globe", title: "Global Accreditation", desc: "UK & international certifications recognised by top employers worldwide." },
  { icon: "award", title: "Expert Facilitators", desc: "Learn from active practitioners — CMOs, CFOs and industry leaders." },
  { icon: "calendar", title: "Flexible Scheduling", desc: "Blended learning built around working professionals — evenings & weekends." },
  { icon: "cpu", title: "AI-Powered Learning", desc: "Proprietary platforms for online content delivery and student support." },
];

const partnerLogos = [
  { name: "DTBS", src: "/p1.png" },
  { name: "Seden Associates", src: "/p2.png" },
  { name: "Beloved Brands", src: "/p3.png" },
  { name: "VCare Academy", src: "/p4.png" },
  { name: "OTIC Group", src: "/p5.png" },
  { name: "ClimateHub", src: "/p6.png" },
  { name: "eNESST", src: "/p7.png" },
  { name: "Eaton Business School", src: "/p8.png" },
  { name: "University of Saint Joseph", src: "/p9.png" },
];

const duplicatedPartnerLogos = [...partnerLogos, ...partnerLogos];

const WhyBasewood = () => {
  return (
    <>
      <section className="py-20 bg-[#EEF2F8] border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-[7%] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
          {/* Left */}
          <div className="flex flex-col h-full">
            <div className="border-b-2 border-navy/50 pb-6 mb-10">
              <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Why Basewood</p>
              <h2 className="font-display text-[clamp(32px,3.2vw,48px)] font-bold text-navy leading-tight tracking-tight">
                Where Professionals Grow Into Leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-black/5 rounded-2xl overflow-hidden flex-1 bg-white">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`group relative p-7 pl-9 bg-white transition-all border-black/5 overflow-hidden ${
                    i < 2 ? "border-b" : ""
                  } ${
                    i % 2 === 0 ? "border-r" : ""
                  } hover:bg-secondary/70 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(15,118,110,0.12)]`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-1 bg-teal-dark/0 transition-colors duration-200 group-hover:bg-teal-dark/70"
                  />
                  <div className="mb-3">
                    {f.icon === "globe" && <Globe className="w-6 h-6 text-teal-dark" />}
                    {f.icon === "award" && <Award className="w-6 h-6 text-teal-dark" />}
                    {f.icon === "calendar" && <Calendar className="w-6 h-6 text-teal-dark" />}
                    {f.icon === "cpu" && <Cpu className="w-6 h-6 text-teal-dark" />}
                  </div>
                  <h4 className="text-[14px] font-bold text-navy mb-1.5 uppercase tracking-[0.04em]">{f.title}</h4>
                  <p className="text-[13px] text-[#6B7280] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — testimonial */}
          <div className="flex flex-col h-full">
            <div className="border-b-2 border-navy/50 pb-6 mb-10">
              <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Alumni Voice</p>
              <h2 className="font-display text-[clamp(32px,3.2vw,48px)] font-bold text-navy leading-tight tracking-tight">
                What Our Graduates Say
              </h2>
            </div>

            <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-[0_18px_40px_rgba(15,23,42,0.08)] flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-[64px] h-[64px] rounded-full overflow-hidden border-2 border-[#EEF2F8]">
                  <img src={abdulHameed} alt="Abdul Hameed" className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E3A5F] text-sm">Abdul Hameed, MCIM</div>
                  <div className="text-[11px] uppercase tracking-[0.08em] text-[#6B7280]">
                    Chief Marketing Officer · Metro Cement
                  </div>
                </div>
              </div>
              <div className="border-l-4 border-[#2DD4BF] pl-6">
                <p className="font-display text-[17px] leading-relaxed text-[#1A2E50] italic">
                  The blended programme coupled with experienced world-class facilitators provided me with professional marketing and strategic skills that resonate deeply with my daily work.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 border border-black/5 divide-x divide-black/5 bg-[#F0F4FA] rounded-3xl overflow-hidden mt-6">
              {[
                { num: "25+", label: "C-Suite Alumni" },
                { num: "9+", label: "Strategic Partners" },
                { num: "6", label: "Professional Bodies" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-6 text-center hover:bg-white transition-colors"
                >
                  <div className="font-display text-[38px] font-black text-navy leading-none">{s.num}</div>
                  <div className="text-[11px] text-[#6B7280] mt-1 uppercase tracking-[0.08em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-teal-dark font-semibold">Our Strategic Partners</p>
            <div className="flex-1 h-px bg-black/10" />
          </div>

          <div className="relative overflow-hidden border border-black/5 rounded-[32px] bg-[#F0F4FA] px-4 py-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F0F4FA] via-white/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F0F4FA] via-white/70 to-transparent" />

            <div className="flex w-max items-center gap-10 animate-partners-marquee">
              {duplicatedPartnerLogos.map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className="min-w-[220px]">
                  <div className="group bg-white rounded-3xl border border-black/5 shadow-[0_8px_28px_rgba(13,27,75,0.08)] px-6 py-5 h-[140px] flex items-center justify-center transition-all duration-200 hover:-translate-y-1">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-[70px] w-auto object-contain grayscale opacity-70 transition duration-200 group-hover:grayscale-0 group-hover:opacity-100"
                      loading={idx < partnerLogos.length ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyBasewood;
