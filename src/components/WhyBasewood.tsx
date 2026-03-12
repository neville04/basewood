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
      <section className="py-16 bg-secondary border-b border-border">
        <div className="max-w-[1200px] mx-auto px-[7%] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-stretch">
          {/* Left */}
          <div className="flex flex-col h-full">
            <div className="border-b-2 border-navy pb-5 mb-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Why Basewood</p>
              <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-navy leading-tight tracking-tight">
                Where Professionals Grow Into Leaders
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border flex-1">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`group relative p-6 pl-8 bg-background transition-all border-border overflow-hidden ${
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
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — testimonial */}
          <div className="flex flex-col h-full">
            <div className="border-b-2 border-navy pb-5 mb-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Alumni Voice</p>
              <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-navy leading-tight tracking-tight">
                What Our Graduates Say
              </h2>
            </div>

            <div className="bg-navy overflow-hidden grid grid-cols-1 sm:grid-cols-[1fr_1.2fr] flex-1">
              <div className="h-[200px] sm:h-auto">
                <img src={abdulHameed} alt="Abdul Hameed" className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-7 flex flex-col justify-center relative">
                <span
                  aria-hidden="true"
                  className="absolute -top-4 left-6 text-6xl text-teal-dark/30 font-display"
                >
                  “
                </span>
                <p className="font-display text-[16px] leading-relaxed text-primary-foreground/85 italic mb-5 pt-4">
                  The blended programme coupled with experienced world-class facilitators provided me with professional marketing and strategic skills that resonate deeply with my daily work.
                </p>
                <div>
                  <div className="font-bold text-sm text-primary-foreground">Abdul Hameed, MCIM</div>
                  <div className="text-xs text-primary-foreground/50 mt-0.5">Chief Marketing Officer — Metro Cement</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 border border-border border-t-0 divide-x divide-border">
              {[
                { num: "25+", label: "C-Suite Alumni" },
                { num: "9+", label: "Strategic Partners" },
                { num: "6", label: "Professional Bodies" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-background p-6 text-center hover:bg-secondary transition-colors"
                >
                  <div className="font-display text-[36px] font-black text-teal-dark leading-none">{s.num}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-[0.08em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-teal-dark font-semibold">Our Strategic Partners</p>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="relative overflow-hidden border border-border/70 rounded-[32px] bg-gradient-to-r from-cream/40 via-white to-cream/40 px-4 py-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/60 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/60 to-transparent" />

            <div className="flex w-max items-center gap-8 animate-partners-marquee">
              {duplicatedPartnerLogos.map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className="min-w-[200px]">
                  <div className="bg-white rounded-3xl border border-border/60 shadow-[0_18px_40px_rgba(15,118,110,0.08)] px-6 py-4 h-[140px] flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="h-[90px] w-auto object-contain"
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
