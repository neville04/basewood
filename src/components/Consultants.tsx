import { useReveal } from "@/hooks/useReveal";
import cleoAmanyire from "@/assets/consultants/cleo-amanyire.jpg";
import deepaShah from "@/assets/consultants/deepa-shah.jpg";
import johnSsenkeezi from "@/assets/consultants/john-ssenkeezi.jpg";
import lydiaTusiime from "@/assets/consultants/lydia-tusiime.jpg";
import francisMutebi from "@/assets/consultants/francis-mutebi.jpg";
import hillaryBaguma from "@/assets/consultants/hillary-baguma.jpg";
import kayongoDaniel from "@/assets/consultants/kayongo-daniel.jpg";
import jamesOchen from "@/assets/consultants/james-ochen.jpg";
import johnPaulOkwi from "@/assets/consultants/john-paul-okwi.jpg";
import shailenderSaharan from "@/assets/consultants/shailender-saharan.jpg";

const consultants = [
  { name: "Dr Cleo Amanyire", title: "Supply Chain Expert", quals: "", desc: "", img: cleoAmanyire },
  {
    name: "Hillary Baguma",
    title: "DipM. Brand Builder, Marketing Professional.",
    quals: "Sustainability Advocate. Brand ambassador at Uganda Breweries Ltd.",
    desc: "",
    img: deepaShah,
  },
  {
    name: "Lydia Tusiime",
    title: "Seasoned Digital and Growth Marketing Specialist",
    quals: "DipM, MCIM",
    desc: "President of the Uganda Digital Society · Digital Supervisor at NSSF",
    img: johnSsenkeezi,
  },
  {
    name: "John Ssenkeezi",
    title: "Manager Business Development",
    quals: "DipM",
    desc: "Institute of Certified Public Accountants of Uganda — ICPAU",
    img: lydiaTusiime,
  },
  {
    name: "Francis Mutebi",
    title: "Member of Association of Chartered Certified Accountants",
    quals: "FCCA (since 2008)",
    desc: "",
    img: francisMutebi,
  },
  {
    name: "Hillary Baguma",
    title: "Brand Builder, Marketing Professional and Sustainability Advocate",
    quals: "DipM",
    desc: "Brand Manager at Uganda Breweries Ltd",
    img: hillaryBaguma,
  },
  {
    name: "Kayongo Daniel",
    title: "Brand Management Strategist and Digital Marketing Expert",
    quals: "DipM, MCIM",
    desc: "Brand Manager at Kansai Plascon Uganda",
    img: kayongoDaniel,
  },
  {
    name: "James Ochen",
    title: "Leadership and Sales Expert",
    quals: "",
    desc: "Corporate Investment Banking — DFCU Bank",
    img: jamesOchen,
  },
  {
    name: "John Paul Okwi",
    title: "Chartered Marketer",
    quals: "",
    desc: "Board Member of Uganda Marketers' Society · Events and Sponsorship Manager at MTN-Uganda",
    img: johnPaulOkwi,
  },
  {
    name: "Shailender Singh Saharan",
    title: "Seasoned professional in International Marketing and Business Development",
    quals: "DipM, MCIM",
    desc: "",
    img: shailenderSaharan,
  },
];

const Consultants = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-[100px] px-[7%] bg-transparent" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`mb-12 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-2.5">Industry Experts</div>
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
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="w-full aspect-square overflow-hidden">
                <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4 text-center">
                <div className="font-display text-sm font-semibold text-primary-foreground mb-1">{c.name}</div>
                <div className="text-[11px] text-teal font-medium mb-1 line-clamp-2">{c.title}</div>
                {c.quals && <div className="text-[10px] text-primary-foreground/50 font-mono">{c.quals}</div>}
                {c.desc && (
                  <div className="text-[10px] text-primary-foreground/40 mt-1 leading-snug line-clamp-2">{c.desc}</div>
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
