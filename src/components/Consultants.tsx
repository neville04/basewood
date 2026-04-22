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

type Consultant = { name: string; title: string; details: string; org: string; img: string };

const consultants: Consultant[] = [
  { name: "Dr Cleo Amanyire", title: "Supply Chain Expert", details: "", org: "", img: cleoAmanyire },
  { name: "Deepa Shah", title: "Consultant", details: "Sustainability Transformation in Global Marketing", org: "", img: deepaShah },
  { name: "John Ssenkeezi", title: "DipM, MCIM", details: "Seasoned Digital and Growth Marketing Specialist. President of the Uganda Digital Society", org: "Digital Supervisor at NSSF", img: johnSsenkeezi },
  { name: "Lydia Tusiime", title: "DipM", details: "Manager Business Development, Institute of Certified Public Accountants of Uganda (ICPAU)", org: "", img: lydiaTusiime },
  { name: "Francis Mutebi", title: "Member of ACCA", details: "FCCA since 2008", org: "", img: francisMutebi },
  { name: "Hillary Baguma", title: "DipM", details: "Brand Builder, Marketing Professional and Sustainability Advocate", org: "Brand Manager at Uganda Breweries Ltd", img: hillaryBaguma },
  { name: "Kayongo Daniel", title: "DipM, MCIM", details: "Brand Management Strategist and Digital Marketing Expert", org: "Brand Manager at Kansai Plascon Uganda", img: kayongoDaniel },
  { name: "James Ochen", title: "Leadership and Sales Expert", details: "Corporate Investment Banking – DFCU Bank", org: "", img: jamesOchen },
  { name: "John Paul Okwi", title: "Chartered Marketer", details: "Board Member of Uganda Marketers' Society", org: "Events and Sponsorship Manager at MTN-Uganda", img: johnPaulOkwi },
  { name: "Shailender Singh Saharan", title: "DipM, MCIM", details: "A seasoned professional in International Marketing and Business Development", org: "", img: shailenderSaharan },
];

const Consultants = () => (
  <section className="py-20 bg-slate-50 border-y border-slate-200">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">Industry Experts</p>
        <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
          Our Experienced <br />Consultants
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {consultants.map((c) => (
          <div key={c.name} className="group bg-white border border-slate-200 hover:border-primary transition-all flex flex-col">
            <div className="aspect-square overflow-hidden">
              <img src={c.img} alt={c.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-black text-primary leading-tight mb-1 uppercase tracking-tight">{c.name}</h3>
              <p className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2">{c.title}</p>
              {c.details && <p className="text-[11px] text-slate-500 leading-snug line-clamp-3 mb-1">{c.details}</p>}
              {c.org && <p className="text-[10px] text-slate-400 italic leading-snug line-clamp-2">{c.org}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href="/basewood-company-profile.pdf"
          download="Basewood_Company_Profile.pdf"
          className="inline-flex items-center gap-3 bg-primary hover:bg-secondary hover:text-primary text-white font-black text-xs uppercase tracking-widest px-10 py-5 transition-all no-underline shadow-lg"
        >
          <Download className="w-4 h-4" />
          Find more here
        </a>
      </div>
    </div>
  </section>
);

export default Consultants;
