const footerCols = [
  {
    title: "Programs",
    links: ["CIM Marketing", "ACCA Finance", "CPA Uganda", "CIPS Supply Chain", "CILT Logistics", "Short Courses"],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Consultancy", "AI Solutions", "Events", "Alumni"],
  },
];

const Footer = () => (
  <footer className="bg-navy-deep px-[7%] pt-[60px] pb-7 text-primary-foreground/50">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-14 pb-12 border-b border-primary-foreground/[0.07] mb-7">
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div className="w-[34px] h-[34px] bg-navy rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-[5px] left-[5px] border-l-[12px] border-l-transparent border-b-[24px] border-b-teal opacity-90" />
            </div>
            <span className="font-bold text-base text-primary-foreground tracking-tight">
              BASE<span className="text-teal-dark">WOOD</span>
            </span>
          </a>
          <p className="text-[13px] leading-relaxed mt-4 text-primary-foreground/[0.38] max-w-[270px]">
            Uganda's premier Center for Professional Courses. Empowering individuals and organisations through globally accredited training and consultancy.
          </p>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[11px] font-semibold text-primary-foreground uppercase tracking-[0.1em] font-mono mb-[18px]">
              {col.title}
            </h5>
            <ul className="list-none space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-primary-foreground/[0.38] no-underline hover:text-teal transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h5 className="text-[11px] font-semibold text-primary-foreground uppercase tracking-[0.1em] font-mono mb-[18px]">
            Contact
          </h5>
          <div className="space-y-[7px] text-[13px] text-primary-foreground/[0.38] leading-relaxed">
            <p>📍 Plot 106, Kanjokya Street, Kampala</p>
            <p>📞 03932 544 445 / 0200 900 993</p>
            <p>📱 +256 773 099 672</p>
            <p>✉️ info@basewoodconsult.ac.ug</p>
            <p>🌐 www.basewoodconsult.ac.ug</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-xs gap-2">
        <span className="text-primary-foreground/[0.22]">© 2025 Basewood Institute. All rights reserved.</span>
        <span className="text-primary-foreground/[0.22]">
          Built for <a href="#" className="text-teal no-underline">Basewood Center for Professional Courses</a>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
