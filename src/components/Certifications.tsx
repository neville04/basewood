const certs = [
  { abbr: "CIM", name: "Chartered Institute of Marketing", logo: "/CIM.png" },
  { abbr: "ACCA", name: "Association of Chartered Certified Accountants", logo: "/acca.png" },
  { abbr: "CPA", name: "Certified Public Accountants Uganda", logo: "/cpa.png" },
  { abbr: "CIPS", name: "Chartered Institute of Procurement & Supply", logo: "/CIPS.png" },
  { abbr: "CILT", name: "Chartered Institute of Logistics & Transport", logo: "/logistics.png" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-[7%] bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-b-2 border-navy/60 pb-6 mb-12">
          <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Our Accreditations</p>
          <h2 className="font-display text-[clamp(32px,3.2vw,46px)] font-bold text-navy leading-tight tracking-tight">
            Internationally Recognised Qualifications
          </h2>
          <p className="text-[14px] text-[#6B7280] mt-3 max-w-[520px]">
            Every course is delivered in partnership with globally accredited professional bodies.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {certs.map((c, i) => (
            <div
              key={c.abbr}
              className="flex flex-col items-center justify-center bg-white py-7 px-4 text-center gap-3 rounded-2xl border border-black/5 shadow-[0_10px_28px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-200"
            >
              <div className="h-20 flex items-center justify-center w-full">
                <img src={c.logo} alt={c.abbr} className="h-full w-auto object-contain" loading={i < 3 ? "eager" : "lazy"} />
              </div>
              <div className="text-[11px] text-[#6B7280] leading-snug">
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
