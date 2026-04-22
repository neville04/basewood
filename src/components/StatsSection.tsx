const stats = [
  { value: "1,000+", label: "Certified Alumni", sub: "Across East Africa & beyond" },
  { value: "25+", label: "C-Suite Alumni", sub: "CMOs, CFOs, MDs & Directors" },
  { value: "5", label: "Global Certifications", sub: "CIM · ACCA · CIPS · CPA · CILT" },
  { value: "9+", label: "Strategic Partners", sub: "Local & international organisations" },
];

const StatsSection = () => (
  <section className="bg-primary py-20 border-t-4 border-secondary">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className={`p-10 text-center ${idx > 0 ? "border-t sm:border-t-0 sm:border-l border-white/10" : ""}`}
          >
            <div className="font-black text-5xl md:text-6xl text-secondary leading-none mb-4">
              {stat.value}
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white font-black mb-2">
              {stat.label}
            </div>
            <div className="text-xs text-white/60 leading-relaxed">{stat.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
