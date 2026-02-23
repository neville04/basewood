import { useReveal } from "@/hooks/useReveal";

const alumni = [
  { name: "Hon Nyombi Tembo", position: "Managing Director", company: "UCC" },
  { name: "Mercy Sande Ainomugisah", position: "CEO & MD", company: "Vision Fund" },
  { name: "Moses Luyima", position: "Commercial Director", company: "Coca-Cola Ethiopia" },
  { name: "Geofrey Ssajjabi", position: "Chief Commercial Officer", company: "NSSF" },
  { name: "Maria Katumba", position: "Chief Marketing Officer", company: "Jumia" },
  { name: "Danze Edwin", position: "Chief Marketing Officer", company: "Next Media" },
  { name: "Sandrah Rhodah Namutebi", position: "Head of Marketing", company: "Uganda Airlines" },
  { name: "Kagolo Marvin", position: "Manager Marketing & Corporate Affairs", company: "Civil Aviation Authority" },
  { name: "Hajjarah Batuuka", position: "Head of Marketing", company: "Nation Media" },
  { name: "Abdul Hameed", position: "Chief Marketing Officer", company: "Metro Cement" },
];

const AlumniTable = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="alumni" className="py-20 px-[7%] bg-background">
      <div className="max-w-[1200px] mx-auto" ref={ref}>
        <div className={`flex items-end justify-between mb-9 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal-dark mb-2.5">CIM Alumni</div>
            <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-navy leading-[1.12] tracking-tight">
              Our Graduates Are<br /><em className="italic text-teal-dark">Everywhere</em>
            </h2>
          </div>
          <a href="#contact" className="text-[13px] font-semibold text-navy no-underline inline-flex items-center gap-1.5 hover:gap-2.5 hover:text-teal-dark transition-all">
            Join them →
          </a>
        </div>

        <div className={`overflow-x-auto transition-all duration-500 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground pb-3 text-left border-b border-border font-medium w-10">#</th>
                <th className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground pb-3 text-left border-b border-border font-medium">Name</th>
                <th className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground pb-3 text-left border-b border-border font-medium hidden md:table-cell">Position</th>
                <th className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground pb-3 text-left border-b border-border font-medium">Company</th>
              </tr>
            </thead>
            <tbody>
              {alumni.map((a, i) => (
                <tr key={a.name} className="group hover:bg-cream transition-colors">
                  <td className="py-3 text-xs text-muted-foreground font-mono border-b border-border group-hover:pl-2.5 group-hover:rounded-l-lg transition-all">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="py-3 text-sm font-medium text-navy border-b border-border">{a.name}</td>
                  <td className="py-3 text-sm text-muted-foreground border-b border-border hidden md:table-cell">{a.position}</td>
                  <td className="py-3 text-[13px] font-semibold text-navy border-b border-border group-hover:pr-2.5 group-hover:rounded-r-lg transition-all">{a.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AlumniTable;
