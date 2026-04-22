import johnMwesigwa from "@/assets/team/john-mwesigwa.jpg";
import bruceNtege from "@/assets/team/bruce-ntege.jpg";
import michealLule from "@/assets/team/micheal-lule.jpg";
import georgeKawemba from "@/assets/team/george-kawemba.jpg";
import erricsonEloru from "@/assets/team/erricson-eloru.jpg";
import mukwayaGodfrey from "@/assets/team/mukwaya-godfrey.jpg";
import ssebuggwawoDenis from "@/assets/team/ssebuggwawo-denis.jpg";
import norahNsubuga from "@/assets/team/norah-nsubuga.jpg";

const team = [
  { name: "Micheal Lule Joseph", role: "Principal & Head of Consultancy", quals: "MCIM", badge: "Principal", img: michealLule, bio: "A seasoned marketing and consultancy leader transforming organisations across East Africa." },
  { name: "John S. Mwesigwa", role: "Head of Professional Programs", quals: "FCIM — Fellow", badge: "CIM", img: johnMwesigwa },
  { name: "Bruce Keith Ntege", role: "Head of ACCA", quals: "FACCA · CPA", badge: "ACCA", img: bruceNtege },
  { name: "George Kawemba", role: "Growth & Strategic Partner", quals: "", badge: "Strategy", img: georgeKawemba },
  { name: "Erricson Eloru", role: "Head of Supply Chain Management", quals: "MCIPS · MCILT", badge: "Supply Chain", img: erricsonEloru },
  { name: "Mukwaya Godfrey", role: "Head of Short Courses", quals: "MCIM", badge: "Short Courses", img: mukwayaGodfrey },
  { name: "Ssebuggwawo Denis", role: "Head of CPA & Internal Auditor", quals: "CPA", badge: "CPA", img: ssebuggwawoDenis },
  { name: "Norah Nakintu Nsubuga", role: "Administration", quals: "Student Liaison", badge: "Admin", img: norahNsubuga },
];

const Team = () => (
  <section id="team" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">Our People</p>
        <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
          Led by Practitioners, <br />Not Just Professors
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {team.map((m) => (
          <div key={m.name} className="group bg-white border border-slate-200 hover:border-primary transition-all flex flex-col">
            <div className="aspect-square overflow-hidden relative">
              <img src={m.img} alt={m.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
              <span className="absolute top-3 left-3 bg-secondary text-primary px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                {m.badge}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-base font-black text-primary leading-tight mb-1 uppercase tracking-tight">{m.name}</h3>
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1">{m.role}</p>
              {m.quals && <p className="text-[10px] text-slate-500 font-mono">{m.quals}</p>}
              {m.bio && <p className="text-xs text-slate-500 mt-3 line-clamp-3 leading-relaxed">{m.bio}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
