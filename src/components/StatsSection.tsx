const stats = [
  { value: "1,000+", label: "Certified Alumni", sub: "Across East Africa & beyond" },
  { value: "25+", label: "Alumni in C-Suite Roles", sub: "CMOs, CFOs, MDs & Directors" },
  { value: "6", label: "Global Certifications", sub: "CIM · ACCA · CIPS · CPA · CILT · CISCM" },
  { value: "9+", label: "Strategic Partners", sub: "Local & international organisations" },
];

const StatsSection = () => {
  return (
    <section className="py-14 px-[7%] bg-navy border-b border-primary-foreground/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/10 border border-primary-foreground/10">
          {stats.map((stat) => (
            <div key={stat.label} className="p-8 text-center">
              <div className="font-display text-[clamp(40px,4vw,60px)] font-bold text-white leading-none mb-2">
                {stat.value}
              </div>
              <div className="text-[13px] font-semibold text-primary-foreground/80 mb-1 uppercase tracking-[0.06em]">{stat.label}</div>
              <div className="text-[11px] text-primary-foreground/40 leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
