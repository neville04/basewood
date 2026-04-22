const certs = [
  { abbr: "CIM", name: "Chartered Institute of Marketing", logo: "/CIM.png" },
  { abbr: "ACCA", name: "Association of Chartered Certified Accountants", logo: "/acca.png" },
  { abbr: "CPA", name: "Certified Public Accountants Uganda", logo: "/cpa.png" },
  { abbr: "CIPS", name: "Chartered Institute of Procurement & Supply", logo: "/CIPS.png" },
  { abbr: "CILT", name: "Chartered Institute of Logistics & Transport", logo: "/logistics.png" },
];

const Certifications = () => (
  <section id="certifications" className="py-20 bg-slate-50 border-y border-slate-200">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">Our Accreditations</p>
        <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
          Internationally Recognised <br />Qualifications
        </h2>
        <p className="text-slate-600 mt-4 max-w-xl">
          Every course is delivered in partnership with globally accredited professional bodies.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 border-t border-l border-slate-200 bg-white">
        {certs.map((c) => (
          <div
            key={c.abbr}
            className="flex flex-col items-center justify-center text-center gap-3 p-7 border-r border-b border-slate-200 hover:bg-slate-50 transition-colors"
          >
            <div className="h-20 flex items-center justify-center">
              <img src={c.logo} alt={c.abbr} className="h-full w-auto object-contain" />
            </div>
            <div className="text-[10px] font-black text-slate-500 leading-snug uppercase tracking-widest">
              {c.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
