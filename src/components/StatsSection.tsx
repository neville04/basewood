import { useReveal } from "@/hooks/useReveal";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { target: 1000, suffix: "+", barWidth: 92, label: "Certified Alumni", sub: "Across East Africa & beyond" },
  { target: 25, suffix: "+", barWidth: 78, label: "Alumni in C-Suite Roles", sub: "CMOs, CFOs, MDs & Directors" },
  { target: 6, suffix: "", barWidth: 60, label: "Global Certifications", sub: "CIM · ACCA · CIPS · CPA · CILT · CISCM" },
  { target: 9, suffix: "+", barWidth: 50, label: "Strategic Partners", sub: "Local & international organisations" },
];

const StatBlock = ({ stat, visible, delay }: { stat: typeof stats[0]; visible: boolean; delay: number }) => {
  const value = useCounter(stat.target, 2000, visible);

  return (
    <div
      className={`p-[44px_36px] bg-primary-foreground/[0.02] border-r border-primary-foreground/[0.07] last:border-r-0 hover:bg-primary-foreground/[0.05] transition-all duration-300 relative overflow-hidden`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-transparent transition-transform duration-500 origin-left ${visible ? "scale-x-100" : "scale-x-0"}`} />
      <div className="font-display text-[clamp(52px,6vw,80px)] font-bold text-primary-foreground leading-none mb-4 tracking-tight">
        {value >= 100 ? value.toLocaleString() : value}
        {stat.suffix && <span className="text-teal">{stat.suffix}</span>}
      </div>
      <div className="w-full h-[2px] bg-primary-foreground/[0.08] rounded-[2px] mb-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal to-teal-dark rounded-[2px] transition-all duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: visible ? `${stat.barWidth}%` : "0%" }}
        />
      </div>
      <div className="text-[15px] font-semibold text-primary-foreground mb-1">{stat.label}</div>
      <div className="text-xs text-primary-foreground/35 font-mono tracking-[0.02em] leading-relaxed">{stat.sub}</div>
    </div>
  );
};

const StatsSection = () => {
  const { ref, visible } = useReveal(0.2);

  return (
    <section className="py-[110px] px-[7%] bg-navy relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(80px,14vw,180px)] font-bold text-primary-foreground/[0.025] whitespace-nowrap pointer-events-none tracking-[0.1em] select-none">
        BASEWOOD
      </div>
      <div className="max-w-[1200px] mx-auto relative z-[1]" ref={ref}>
        <div className={`mb-16 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-2.5">Impact by the Numbers</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-primary-foreground leading-[1.12] tracking-tight">
            A Track Record<br />of <em className="italic text-teal-dark">Excellence</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] border border-primary-foreground/[0.07] rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <StatBlock key={stat.label} stat={stat} visible={visible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
