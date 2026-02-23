import { useReveal } from "@/hooks/useReveal";

const features = [
  { icon: "🎓", title: "Global Accreditation", desc: "UK & international certifications recognised by top employers worldwide." },
  { icon: "🏆", title: "Expert Facilitators", desc: "Learn from active practitioners — CMOs, CFOs and industry leaders." },
  { icon: "📅", title: "Flexible Scheduling", desc: "Blended learning built around working professionals — evenings & weekends." },
  { icon: "🤖", title: "AI-Powered Learning", desc: "Proprietary AI platforms for online content delivery and student support." },
];

const WhyBasewood = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-[100px] px-[7%] bg-cream relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center" ref={ref}>
        {/* Left */}
        <div className={`transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-dark mb-2.5">Why Basewood</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-navy leading-[1.12] tracking-tight">
            Where Professionals<br /><em className="italic text-teal-dark">Grow</em> Into Leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
            {features.map((f) => (
              <div key={f.title} className="bg-background p-5 rounded-xl border border-border hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,30,92,0.08)] transition-all duration-250">
                <span className="text-[26px] mb-2.5 block">{f.icon}</span>
                <h4 className="text-sm font-semibold text-navy mb-1">{f.title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className={`transition-all duration-500 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="bg-navy rounded-2xl p-[38px] text-primary-foreground relative overflow-hidden">
            <span className="absolute -top-6 right-4 font-display text-[160px] text-teal/[0.07] leading-none pointer-events-none">"</span>
            <p className="font-display text-[19px] leading-relaxed text-primary-foreground/[0.88] italic mb-6 relative z-[1]">
              "The blended programme coupled with experienced world-class facilitators provided me with professional marketing and strategic skills that resonate deeply with my daily work."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-teal to-navy-light flex items-center justify-center font-display text-[19px] text-primary-foreground font-semibold flex-shrink-0">
                A
              </div>
              <div>
                <div className="font-semibold text-sm text-primary-foreground">Abdul Hameed, MCIM</div>
                <div className="text-xs text-primary-foreground/45 mt-0.5">Chief Marketing Officer — Metro Cement</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3.5 mt-4">
            {[
              { num: "25", suffix: "+", label: "C-Suite Alumni" },
              { num: "9", suffix: "+", label: "Strategic Partners" },
              { num: "6", suffix: "", label: "Professional Bodies" },
            ].map((s) => (
              <div key={s.label} className="bg-background rounded-[10px] p-4 text-center border border-border">
                <div className="font-display text-[30px] font-bold text-navy leading-none">
                  {s.num}<span className="text-teal-dark">{s.suffix}</span>
                </div>
                <div className="text-[11px] text-muted-foreground mt-1 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBasewood;
