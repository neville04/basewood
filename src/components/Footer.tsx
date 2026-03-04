import { Link } from "react-router-dom";
import basewoodLogo from "@/assets/basewood-logo.png";

const footerCols = [
  {
    title: "Programs",
    links: [
      { label: "CIM Marketing", href: "/programs" },
      { label: "ACCA Finance", href: "/programs" },
      { label: "CPA Uganda", href: "/programs" },
      { label: "CIPS Supply Chain", href: "/programs" },
      { label: "CILT Logistics", href: "/programs" },
      { label: "Short Courses", href: "/programs" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "Enroll Now", href: "/enroll" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-navy-deep text-primary-foreground/50">
    <div className="max-w-[1200px] mx-auto px-[7%] pt-14 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1.6fr] gap-10 pb-10 border-b border-primary-foreground/10 mb-8">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 no-underline mb-5">
            <img src={basewoodLogo} alt="Basewood Logo" className="h-[44px] w-auto brightness-0 invert opacity-90" />
            <div className="flex flex-col leading-none border-l border-primary-foreground/20 pl-3">
              <span className="font-bold text-[17px] text-primary-foreground tracking-tight uppercase leading-tight">Basewood</span>
              <span className="text-[10px] text-primary-foreground/40 tracking-[0.12em] uppercase mt-0.5">Institute</span>
            </div>
          </Link>
          <p className="text-[13px] leading-[1.8] text-primary-foreground/40 max-w-[260px] mb-5">
            Uganda's premier Center for Professional Courses. Empowering individuals and organisations through globally accredited training and consultancy.
          </p>
          <div className="text-[12px] text-primary-foreground/35 space-y-1">
            <p>📍 Plot 106, Kanjokya Street, Kampala</p>
            <p>📞 +256 744 488 316</p>
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[11px] font-bold text-primary-foreground uppercase tracking-[0.14em] mb-5 pb-2 border-b border-primary-foreground/10">
              {col.title}
            </h5>
            <ul className="list-none space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[13px] text-primary-foreground/40 no-underline hover:text-primary-foreground/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h5 className="text-[11px] font-bold text-primary-foreground uppercase tracking-[0.14em] mb-5 pb-2 border-b border-primary-foreground/10">
            Contact Us
          </h5>
          <div className="space-y-2.5 text-[13px] text-primary-foreground/40">
            <p>+256 744 488 316</p>
            <p>+256 769 013 080</p>
            <p>+256 773 099 672 (WhatsApp)</p>
            <a href="mailto:info@basewoodconsult.ac.ug" className="block text-primary-foreground/40 no-underline hover:text-primary-foreground/80 transition-colors">
              info@basewoodconsult.ac.ug
            </a>
            <a href="https://www.basewoodconsult.ac.ug" target="_blank" rel="noopener noreferrer" className="block text-primary-foreground/40 no-underline hover:text-primary-foreground/80 transition-colors">
              www.basewoodconsult.ac.ug
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-[12px] gap-2">
        <span className="text-primary-foreground/25">© 2025 Basewood Consult Uganda Limited. All rights reserved.</span>
        <span className="text-primary-foreground/25">Center for Professional Courses · Kampala, Uganda</span>
      </div>
    </div>
  </footer>
);

export default Footer;
