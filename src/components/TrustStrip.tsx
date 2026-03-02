const companies = [
  "MTN Uganda", "NSSF", "Uganda Airlines", "UCC", "Coca-Cola",
  "Kiira Motors", "Nation Media", "Centenary Bank", "Jumia",
];

const TrustStrip = () => (
  <div className="bg-navy border-b border-primary-foreground/[0.07] px-[7%] py-4 overflow-hidden">
    <div className="max-w-[1200px] mx-auto flex items-center gap-6">
      <span className="text-[10px] uppercase tracking-[0.18em] text-teal font-mono whitespace-nowrap flex-shrink-0 z-10 pr-4">
        Alumni at
      </span>
      <div className="w-px h-6 bg-primary-foreground/[0.15] flex-shrink-0" />
      <div className="relative overflow-hidden flex-1">
        <div className="flex animate-scroll-left">
          {[...companies, ...companies].map((c, i) => (
            <span key={`${c}-${i}`} className="flex items-center gap-8 flex-shrink-0 mx-4">
              <span className="w-[3px] h-[3px] bg-teal rounded-full opacity-40 flex-shrink-0" />
              <span className="text-[13px] font-semibold text-primary-foreground/50 whitespace-nowrap">
                {c}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default TrustStrip;
