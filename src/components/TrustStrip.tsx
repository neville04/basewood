const companies = [
  "MTN Uganda", "NSSF", "Uganda Airlines", "UCC", "Coca-Cola",
  "Kiira Motors", "Nation Media", "Centenary Bank", "Jumia",
];

const TrustStrip = () => (
  <div className="bg-cream border-b border-border px-[7%] py-5">
    <div className="max-w-[1200px] mx-auto flex items-center gap-7">
      <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-mono whitespace-nowrap flex-shrink-0">
        Alumni at
      </span>
      <div className="w-px h-7 bg-border flex-shrink-0" />
      <div className="flex gap-9 items-center overflow-hidden flex-wrap">
        {companies.map((c, i) => (
          <span key={c} className="flex items-center gap-9">
            {i > 0 && <span className="w-[3px] h-[3px] bg-navy rounded-full opacity-20 flex-shrink-0" />}
            <span className="text-[13px] font-semibold text-navy whitespace-nowrap opacity-55 hover:opacity-100 transition-opacity cursor-default">
              {c}
            </span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
