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

const AlumniTable = () => (
  <section id="alumni" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">CIM Alumni</p>
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
            Our Graduates <br />Are Everywhere
          </h2>
        </div>
        <a href="/enroll" className="hidden md:inline-flex text-[10px] font-black uppercase tracking-widest text-primary no-underline border-b-2 border-primary/10 pb-1 hover:border-primary transition-all">
          Join Them →
        </a>
      </div>

      <div className="overflow-x-auto border border-slate-200">
        <table className="w-full border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-[10px] uppercase tracking-widest font-black p-4 text-left w-12">#</th>
              <th className="text-[10px] uppercase tracking-widest font-black p-4 text-left">Name</th>
              <th className="text-[10px] uppercase tracking-widest font-black p-4 text-left hidden md:table-cell">Position</th>
              <th className="text-[10px] uppercase tracking-widest font-black p-4 text-left">Company</th>
            </tr>
          </thead>
          <tbody>
            {alumni.map((a, i) => (
              <tr key={a.name} className="border-t border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="p-4 text-xs text-slate-400 font-mono">{String(i + 1).padStart(2, "0")}</td>
                <td className="p-4 text-sm font-bold text-primary">{a.name}</td>
                <td className="p-4 text-sm text-slate-600 hidden md:table-cell">{a.position}</td>
                <td className="p-4 text-sm font-bold text-slate-700">{a.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default AlumniTable;
