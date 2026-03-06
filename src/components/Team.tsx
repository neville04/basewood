import { useReveal } from "@/hooks/useReveal";
import johnMwesigwa from "@/assets/team/john-mwesigwa.jpg";
import bruceNtege from "@/assets/team/bruce-ntege.jpg";
import michealLule from "@/assets/team/micheal-lule.jpg";
import georgeKawemba from "@/assets/team/george-kawemba.jpg";
import erricsonEloru from "@/assets/team/erricson-eloru.jpg";
import mukwayaGodfrey from "@/assets/team/mukwaya-godfrey.jpg";
import ssebuggwawoDenis from "@/assets/team/ssebuggwawo-denis.jpg";
import norahNsubuga from "@/assets/team/norah-nsubuga.jpg";

const team = [
  {
    name: "Micheal Lule Joseph",
    role: "Principal & Head of Consultancy",
    quals: "MCIM",
    badge: "Principal",
    img: michealLule,
    featured: true,
    bio: "A seasoned marketing and consultancy leader transforming organisations across East Africa. Micheal drives Basewood's academic excellence and strategic consultancy practice with decades of field experience.",
  },
  { name: "John S. Mwesigwa", role: "Head of Professional Programs", quals: "FCIM — Fellow", badge: "CIM", img: johnMwesigwa },
  { name: "Bruce Keith Ntege", role: "Head of ACCA", quals: "FACCA · CPA", badge: "ACCA", img: bruceNtege },
  { name: "George Kawemba", role: "Growth & Strategic Partner", quals: "", badge: "Strategy", img: georgeKawemba },
  { name: "Erricson Eloru", role: "Head of Supply Chain Management", quals: "MCIPS · MCILT", badge: "Supply Chain", img: erricsonEloru },
  { name: "Mukwaya Godfrey", role: "Head of Short Courses", quals: "MCIM", badge: "Short Courses", img: mukwayaGodfrey },
  { name: "Ssebuggwawo Denis", role: "Head of CPA & Internal Auditor", quals: "CPA", badge: "CPA", img: ssebuggwawoDenis },
  { name: "Norah Nakintu Nsubuga", role: "Administration", quals: "Student Liaison", badge: "Admin", img: norahNsubuga },
];

const Team = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="team" className="py-[100px] px-[7%] bg-transparent">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className={`mb-12 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-2.5">Our People</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-primary-foreground leading-[1.12] tracking-tight">
            Led by <em className="italic text-teal-dark">Practitioners</em>,<br />Not Just Professors
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`bg-navy rounded-xl overflow-hidden border border-navy-light/20 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-[280ms] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="w-full aspect-square overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top" />
              </div>
              <div className="p-4 text-center">
                <span className="inline-block text-[9px] font-mono font-semibold tracking-[0.08em] text-navy uppercase bg-teal/90 text-navy rounded px-2 py-[3px] mb-2">
                  {m.badge}
                </span>
                <div className="font-display text-sm font-semibold text-primary-foreground mb-1">{m.name}</div>
                <div className="text-[11px] text-teal font-medium mb-1 leading-snug">{m.role}</div>
                <div className="text-[10px] text-primary-foreground/50 font-mono">{m.quals}</div>
                {m.bio && (
                  <p className="text-[10px] text-primary-foreground/40 mt-2 leading-snug line-clamp-3">{m.bio}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
