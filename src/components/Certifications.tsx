const certs = [
  { abbr: "CIM", name: "Chartered Institute of Marketing", logo: "/CIM.png" },
  { abbr: "ACCA", name: "Association of Chartered Certified Accountants", logo: "/acca.png" },
  { abbr: "CPA", name: "Certified Public Accountants Uganda", logo: "/cpa.png" },
  { abbr: "CIPS", name: "Chartered Institute of Procurement & Supply", logo: "/CIPS.png" },
  { abbr: "CILT", name: "Chartered Institute of Logistics & Transport", logo: "/logistics.png" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-[7%] bg-background border-b border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-b-2 border-navy pb-5 mb-10">
          <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Our Accreditations</p>
          <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-navy leading-tight tracking-tight">
            Internationally Recognised Qualifications
          </h2>
          <p className="text-[14px] text-muted-foreground mt-2 max-w-[500px]">
            Every course is delivered in partnership with globally accredited professional bodies.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {certs.map((c, i) => (
            <div
              key={c.abbr}
              className="flex flex-col items-center justify-center bg-background py-6 px-4 text-center gap-3 rounded-xl border border-border hover:bg-cream transition-colors"
            >
              <div className="h-20 flex items-center justify-center w-full">
                <img src={c.logo} alt={c.abbr} className="h-full w-auto object-contain" loading={i < 3 ? "eager" : "lazy"} />
              </div>
              <div className="text-[11px] text-muted-foreground leading-snug">
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
