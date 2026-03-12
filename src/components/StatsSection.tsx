const stats = [
  { value: "1,000+", label: "Certified Alumni", sub: "Across East Africa & beyond" },
  { value: "25+", label: "C-Suite Alumni", sub: "CMOs, CFOs, MDs & Directors" },
  { value: "5", label: "Global Certifications", sub: "CIM · ACCA · CIPS · CPA · CILT" },
  { value: "9+", label: "Strategic Partners", sub: "Local & international organisations" },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-[7%] bg-[#0D1B4B]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`p-10 text-center ${idx > 0 ? "border-t sm:border-t-0 sm:border-l border-white/15" : ""}`}
            >
              <div className="font-display text-[clamp(42px,4vw,64px)] font-semibold text-white leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-[12px] uppercase tracking-[0.28em] text-white/60 mb-2">{stat.label}</div>
              <div className="text-[13px] text-white/70 leading-relaxed">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
