const certs = [
  { abbr: "CIM", name: "Chartered Institute of Marketing" },
  { abbr: "ACCA", name: "Chartered Certified Accountants" },
  { abbr: "CPA", name: "Certified Public Accountants Uganda" },
  { abbr: "CIPS", name: "Procurement & Supply" },
  { abbr: "CILT", name: "Logistics & Transport" },
  { abbr: "CISCM", name: "Sales & Customer Service Mgmt" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-border">
          {certs.map((c, i) => (
            <div
              key={c.abbr}
              className={`p-7 text-center bg-background hover:bg-navy group transition-colors cursor-pointer border-border ${
                i % 6 !== 5 ? "border-r" : ""
              }`}
            >
              <div className="font-display text-[26px] font-bold text-navy group-hover:text-white transition-colors mb-2">
                {c.abbr}
              </div>
              <div className="text-[11px] text-muted-foreground group-hover:text-primary-foreground/60 transition-colors leading-snug">
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
