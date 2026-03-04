const companies = [
  "MTN Uganda", "NSSF", "Uganda Airlines", "UCC", "Coca-Cola",
  "Kiira Motors", "Nation Media", "Centenary Bank", "Jumia",
];

const TrustStrip = () => (
  <div className="bg-secondary border-b border-border py-4 px-[7%]">
    <div className="max-w-[1200px] mx-auto flex items-center gap-6 flex-wrap">
      <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground font-semibold whitespace-nowrap flex-shrink-0">
        Our Alumni Work At:
      </span>
      <div className="w-px h-4 bg-border flex-shrink-0 hidden sm:block" />
      <div className="flex items-center gap-6 flex-wrap">
        {companies.map((c) => (
          <span key={c} className="text-[13px] font-semibold text-navy/60 whitespace-nowrap">
            {c}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default TrustStrip;
