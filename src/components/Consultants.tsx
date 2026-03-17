import { useReveal } from "@/hooks/useReveal";
import { Download } from "lucide-react";
import cleoAmanyire from "@/assets/consultants/cleo-amanyire.jpg";
import deepaShah from "@/assets/consultants/deepa-shah.jpg";
import johnSsenkeezi from "@/assets/consultants/john-ssenkeezi.jpg";
import francisMutebi from "@/assets/consultants/francis-mutebi.jpg";
import hillaryBaguma from "@/assets/consultants/hillary-baguma.jpg";
import kayongoDaniel from "@/assets/consultants/kayongo-daniel.jpg";
import lydiaTusiime from "@/assets/consultants/lydia-tusiime.jpg";
import jamesOchen from "@/assets/consultants/james-ochen1.jpg";
import johnPaulOkwi from "@/assets/consultants/johnpaul-okwi.jpg";
import shailenderSaharan from "@/assets/consultants/shailender-saharan.jpg";

type Consultant = {
  name: string;
  title: string;
  details: string;
  org: string;
  img: string | null;
};

const consultants: Consultant[] = [
  // ── Row 1 (image 1) ────────────────────────────────────────────────────────
  {
    name: "Dr Cleo Amanyire",
    title: "Supply Chain Expert",
    details: "",
    org: "",
    img: cleoAmanyire,
  },
  {
    name: "Deepa Shah",
    title: "Consultant",
    details: "Sustainability Transformation in Global Marketing",
    org: "",
    img: deepaShah,
  },
  {
    name: "John Ssenkeezi",
    title: "DipM, MCIM",
    details: "Seasoned Digital and Growth Marketing Specialist. President of the Uganda Digital Society",
    org: "Digital Supervisor at NSSF",
    img: johnSsenkeezi,
  },
  {
    name: "Lydia Tusiime",
    title: "DipM",
    details: "Manager Business Development, Institute of Certified Public Accountants of Uganda (ICPAU)",
    org: "",
    img: lydiaTusiime,
  },
  {
    name: "Francis Mutebi",
    title: "Member of Association of Chartered Certified Accountants",
    details: "FCCA since 2008",
    org: "",
    img: francisMutebi,
  },
  // ── Row 2 (image 1) ────────────────────────────────────────────────────────
  {
    name: "Hillary Baguma",
    title: "DipM",
    details: "Brand Builder, Marketing Professional and Sustainability Advocate",
    org: "Brand Manager at Uganda Breweries Ltd",
    img: hillaryBaguma,
  },
  {
    name: "Kayongo Daniel",
    title: "DipM, MCIM",
    details: "Brand Management Strategist and Digital Marketing Expert",
    org: "Brand Manager at Kansai Plascon Uganda",
    img: kayongoDaniel,
  },
  {
    name: "James Ochen",
    title: "Leadership and Sales Expert",
    details: "Corporate Investment Banking – DFCU Bank",
    org: "",
    img: jamesOchen,
  },
  {
    name: "John Paul Okwi",
    title: "Chartered Marketer",
    details: "Board Member of Uganda Marketers' Society",
    org: "Events and Sponsorship Manager at MTN-Uganda",
    img: johnPaulOkwi,
  },
  {
    name: "Shailender Singh Saharan",
    title: "DipM, MCIM",
    details: "A seasoned professional in International Marketing and Business Development",
    org: "",
    img: shailenderSaharan,
  },
];

/** Avatar placeholder when no photo is available */
function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div className="w-full h-full flex items-center justify-center bg-navy-light/30">
      <span className="font-display text-2xl font-bold text-teal/80">{initials}</span>
    </div>
  );
}

const Consultants = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-[100px] px-[7%] bg-transparent" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`mb-12 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-2.5">
            Industry Experts
          </div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-primary-foreground leading-[1.12] tracking-tight">
            Our Experienced <em className="italic text-teal">Consultants</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {consultants.map((c, i) => (
            <div
              key={c.name}
              className={`bg-navy rounded-xl overflow-hidden border border-navy-light/20 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-[280ms] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="w-full aspect-square overflow-hidden">
                {c.img ? (
                  <img
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <AvatarPlaceholder name={c.name} />
                )}
              </div>
              <div className="p-3 text-center">
                <div className="font-display text-sm font-semibold text-primary-foreground mb-1 leading-tight">
                  {c.name}
                </div>
                <div className="text-[11px] text-teal font-medium mb-1 line-clamp-2 leading-snug">
                  {c.title}
                </div>
                {c.details && (
                  <div className="text-[10px] text-primary-foreground/55 font-mono leading-snug line-clamp-3 mb-1">
                    {c.details}
                  </div>
                )}
                {c.org && (
                  <div className="text-[10px] text-primary-foreground/40 leading-snug line-clamp-2 italic">
                    {c.org}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultants;
