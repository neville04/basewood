import { Globe, Award, Calendar, Cpu } from "lucide-react";
import abdulHameed from "@/assets/abdul-hameed.png";

const features = [
  { icon: "globe", title: "Global Accreditation", desc: "UK & international certifications recognised by top employers worldwide." },
  { icon: "award", title: "Expert Facilitators", desc: "Learn from active practitioners — CMOs, CFOs and industry leaders." },
  { icon: "calendar", title: "Flexible Scheduling", desc: "Blended learning built around working professionals — evenings & weekends." },
  { icon: "cpu", title: "AI-Powered Learning", desc: "Proprietary platforms for online content delivery and student support." },
];

const WhyBasewood = () => {
  return (
    <section className="py-16 bg-secondary border-b border-border">
      <div className="max-w-[1200px] mx-auto px-[7%] grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div>
          <div className="border-b-2 border-navy pb-5 mb-8">
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Why Basewood</p>
            <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-navy leading-tight tracking-tight">
              Where Professionals Grow Into Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`p-6 bg-background hover:bg-secondary transition-colors border-border ${
                  i < 2 ? "border-b" : ""
                } ${i % 2 === 0 ? "border-r" : ""}`}
              >
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
        <div>
          <div className="border-b-2 border-navy pb-5 mb-8">
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Alumni Voice</p>
            <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-navy leading-tight tracking-tight">
              What Our Graduates Say
            </h2>
          </div>

          <div className="bg-navy overflow-hidden grid grid-cols-1 sm:grid-cols-[1fr_1.2fr]">
            <div className="h-[200px] sm:h-auto">
              <img src={abdulHameed} alt="Abdul Hameed" className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-7 flex flex-col justify-center">
              <p className="font-display text-[16px] leading-relaxed text-primary-foreground/85 italic mb-5">
                "The blended programme coupled with experienced world-class facilitators provided me with professional marketing and strategic skills that resonate deeply with my daily work."
              </p>
              <div>
                <div className="font-bold text-sm text-primary-foreground">Abdul Hameed, MCIM</div>
                <div className="text-xs text-primary-foreground/50 mt-0.5">Chief Marketing Officer — Metro Cement</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-0 border border-border border-t-0">
            {[
              { num: "25+", label: "C-Suite Alumni" },
              { num: "9+", label: "Strategic Partners" },
              { num: "6", label: "Professional Bodies" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`bg-background p-6 text-center hover:bg-secondary transition-colors ${i < 2 ? "border-r border-border" : ""}`}
              >
                <div className="font-display text-[28px] font-bold text-navy leading-none">{s.num}</div>
                <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-[0.08em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBasewood;
