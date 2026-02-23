import { useReveal } from "@/hooks/useReveal";

const certs = [
  { abbr: "CIM", name: "Chartered Institute of Marketing" },
  { abbr: "ACCA", name: "Chartered Certified Accountants" },
  { abbr: "CPA", name: "Certified Public Accountants Uganda" },
  { abbr: "CIPS", name: "Procurement & Supply" },
  { abbr: "CILT", name: "Logistics & Transport" },
  { abbr: "CISCM", name: "Sales & Customer Service Mgmt" },
];

const Certifications = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="certifications" className="py-[90px] px-[7%] bg-background">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className={`text-center mb-14 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-dark mb-2.5">Our Accreditations</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-navy leading-[1.12] tracking-tight">
            Internationally <em className="italic text-teal-dark">Recognised</em> Qualifications
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed font-light max-w-[460px] mx-auto mt-3.5">
            Every course is delivered in partnership with globally accredited professional bodies.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {certs.map((c, i) => (
            <div
              key={c.abbr}
              className={`group bg-cream rounded-xl p-[26px_16px] text-center border border-border cursor-pointer transition-all duration-[280ms] hover:bg-navy hover:border-navy hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(15,30,92,0.15)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-[26px] font-bold text-navy group-hover:text-teal transition-colors mb-[7px]">
                {c.abbr}
              </div>
              <div className="text-[11px] text-muted-foreground leading-snug group-hover:text-primary-foreground/55 transition-colors">
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
