const logos = [
  { name: "MTN Uganda", src: "/MTN.png" },
  { name: "Uganda Communications Commission", src: "/UCC.png" },
  { name: "Jumia Uganda", src: "/jumia.png" },
  { name: "Nation Media Group", src: "/NMG.png" },
  { name: "Uganda Airlines", src: "/UG.png" },
  { name: "Kiira Motors", src: "/Kiira.png" },
  { name: "NSSF", src: "/NSSF.png" },
  { name: "Centenary Bank", src: "/Centenary.png" },
];

const marqueeLogos = [...logos, ...logos];

const TrustStrip = () => (
  <section className="relative border-t border-black/5 bg-[#F3F6FB] py-20">
    <div className="max-w-[1200px] mx-auto px-[7%]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-teal-dark mb-1">Trusted Career Destinations</p>
          <h3 className="font-display text-[clamp(22px,3vw,34px)] text-navy leading-tight">
            Our alumni drive impact inside Africa's boldest organisations
          </h3>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F3F6FB] via-[#F3F6FB]/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#F3F6FB] via-[#F3F6FB]/90 to-transparent" />

        <div className="flex w-max items-center gap-10 animate-trust-marquee justify-center">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center justify-center rounded-2xl border border-white/80 bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] px-8 py-6 h-24 min-w-[200px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 w-auto max-w-[160px] object-contain"
                loading={idx < logos.length ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustStrip;
