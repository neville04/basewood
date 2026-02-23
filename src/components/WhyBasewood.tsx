import { useReveal } from "@/hooks/useReveal";
import { useEffect, useState, useRef } from "react";
import { Globe, Award, Calendar, Cpu } from "lucide-react";

const features = [
  { icon: "globe", title: "Global Accreditation", desc: "UK & international certifications recognised by top employers worldwide." },
  { icon: "award", title: "Expert Facilitators", desc: "Learn from active practitioners — CMOs, CFOs and industry leaders." },
  { icon: "calendar", title: "Flexible Scheduling", desc: "Blended learning built around working professionals — evenings & weekends." },
  { icon: "cpu", title: "AI-Powered Learning", desc: "Proprietary AI platforms for online content delivery and student support." },
];

const FloatingOrb = ({ delay, size, x, y }: { delay: number; size: number; x: string; y: string }) => (
  <div
    className="absolute rounded-full blur-[60px] opacity-0 animate-[orbFloat_8s_ease-in-out_infinite]"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      background: `radial-gradient(circle, hsl(168 76% 49% / 0.18), hsl(228 73% 21% / 0.08))`,
      animationDelay: `${delay}s`,
    }}
  />
);

const AnimatedCounter = ({ target, suffix, visible }: { target: number; suffix: string; visible: boolean }) => {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;
    let start = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [visible, target]);

  return (
    <span>
      {count}<span className="text-teal-dark">{suffix}</span>
    </span>
  );
};

const WhyBasewood = () => {
  const { ref, visible } = useReveal();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-[100px] px-[7%] bg-cream relative overflow-hidden">
      {/* Animated background orbs */}
      <FloatingOrb delay={0} size={300} x="5%" y="10%" />
      <FloatingOrb delay={2.5} size={200} x="75%" y="60%" />
      <FloatingOrb delay={5} size={250} x="50%" y="-5%" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[20%] w-px h-full bg-gradient-to-b from-transparent via-teal/[0.06] to-transparent animate-[gridPulse_6s_ease-in-out_infinite]" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-gradient-to-b from-transparent via-navy/[0.04] to-transparent animate-[gridPulse_6s_ease-in-out_infinite_2s]" />
        <div className="absolute top-0 left-[80%] w-px h-full bg-gradient-to-b from-transparent via-teal/[0.06] to-transparent animate-[gridPulse_6s_ease-in-out_infinite_4s]" />
        <div className="absolute left-0 top-[30%] h-px w-full bg-gradient-to-r from-transparent via-navy/[0.04] to-transparent animate-[gridPulse_6s_ease-in-out_infinite_1s]" />
        <div className="absolute left-0 top-[70%] h-px w-full bg-gradient-to-r from-transparent via-teal/[0.06] to-transparent animate-[gridPulse_6s_ease-in-out_infinite_3s]" />
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[90px] items-center relative z-[1]" ref={ref}>
        {/* Left */}
        <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-dark mb-2.5 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-teal-dark animate-[expandLine_1.2s_ease-out_forwards]" />
            Why Basewood
          </div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-navy leading-[1.12] tracking-tight">
            Where Professionals<br /><em className="italic text-teal-dark">Grow</em> Into Leaders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`bg-background/80 backdrop-blur-sm p-5 rounded-xl border border-border relative overflow-hidden group cursor-pointer transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                } ${hoveredCard === i ? "shadow-[0_20px_50px_rgba(15,30,92,0.12)] -translate-y-2 border-teal/30" : "hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,30,92,0.08)]"}`}
                style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow effect on hover */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-teal/10 blur-2xl transition-opacity duration-500 ${hoveredCard === i ? "opacity-100" : "opacity-0"}`} />
                
                <span className={`mb-2.5 block transition-transform duration-300 ${hoveredCard === i ? "scale-110" : ""}`}>
                  {f.icon === "globe" && <Globe className="w-7 h-7 text-teal-dark" />}
                  {f.icon === "award" && <Award className="w-7 h-7 text-teal-dark" />}
                  {f.icon === "calendar" && <Calendar className="w-7 h-7 text-teal-dark" />}
                  {f.icon === "cpu" && <Cpu className="w-7 h-7 text-teal-dark" />}
                </span>
                <h4 className="text-sm font-semibold text-navy mb-1 relative z-[1]">{f.title}</h4>
                <p className="text-[13px] text-muted-foreground leading-relaxed relative z-[1]">{f.desc}</p>
                
                {/* Animated bottom accent bar */}
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-teal to-teal-dark transition-all duration-500 ${hoveredCard === i ? "w-full" : "w-0"}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="bg-navy rounded-2xl p-[38px] text-primary-foreground relative overflow-hidden group">
            {/* Animated shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal/[0.04] to-transparent animate-[shimmer_4s_ease-in-out_infinite] pointer-events-none" />
            
            <span className="absolute -top-6 right-4 font-display text-[160px] text-teal/[0.07] leading-none pointer-events-none animate-[breathe_5s_ease-in-out_infinite]">"</span>
            <p className="font-display text-[19px] leading-relaxed text-primary-foreground/[0.88] italic mb-6 relative z-[1]">
              "The blended programme coupled with experienced world-class facilitators provided me with professional marketing and strategic skills that resonate deeply with my daily work."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-teal to-navy-light flex items-center justify-center font-display text-[19px] text-primary-foreground font-semibold flex-shrink-0 animate-[breathe_5s_ease-in-out_infinite_1s]">
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
              { num: 25, suffix: "+", label: "C-Suite Alumni" },
              { num: 9, suffix: "+", label: "Strategic Partners" },
              { num: 6, suffix: "", label: "Professional Bodies" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`bg-background/80 backdrop-blur-sm rounded-[10px] p-4 text-center border border-border hover:border-teal/20 hover:shadow-[0_8px_30px_rgba(45,212,191,0.08)] transition-all duration-300 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: visible ? `${400 + i * 100}ms` : "0ms" }}
              >
                <div className="font-display text-[30px] font-bold text-navy leading-none">
                  <AnimatedCounter target={s.num} suffix={s.suffix} visible={visible} />
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
