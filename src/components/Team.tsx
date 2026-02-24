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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((m, i) => (
            <div
              key={m.name}
              className={`bg-background rounded-[14px] overflow-hidden border border-border cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_20px_52px_rgba(15,30,92,0.1)] transition-all duration-[280ms] ${
                m.featured ? "sm:col-span-2 grid sm:grid-cols-[220px_1fr]" : ""
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`bg-cover bg-center bg-top relative overflow-hidden ${
                  m.featured ? "aspect-auto h-full min-h-[220px]" : "w-full aspect-[3/4]"
                }`}
                style={{ backgroundImage: `url('${m.img}')` }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-gradient-to-t from-navy-deep/65 to-transparent" />
                <span className="absolute top-3 right-3 bg-teal text-navy text-[9px] font-mono font-bold px-2 py-[3px] rounded tracking-[0.06em] uppercase z-[2]">
                  {m.badge}
                </span>
              </div>
              <div className={`p-4 ${m.featured ? "p-[26px_28px] flex flex-col justify-center" : ""}`}>
                <div className={`font-display font-semibold text-navy mb-0.5 ${m.featured ? "text-2xl" : "text-[17px]"}`}>
                  {m.name}
                </div>
                <div className={`text-teal-dark font-medium ${m.featured ? "text-[13px] mb-2.5" : "text-xs mb-0.5"}`}>
                  {m.role}
                </div>
                <div className="text-[11px] text-muted-foreground font-mono">{m.quals}</div>
                {m.featured && m.bio && (
                  <>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mt-2.5 mb-4">{m.bio}</p>
                    <div className="flex gap-2">
                      <button className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-cream text-navy border border-border hover:bg-navy hover:text-primary-foreground transition-colors">LinkedIn</button>
                      <button className="px-3.5 py-1.5 rounded-md text-xs font-medium bg-cream text-navy border border-border hover:bg-navy hover:text-primary-foreground transition-colors">Email</button>
                    </div>
                  </>
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
