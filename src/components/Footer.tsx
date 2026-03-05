import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Programs",
    links: [
      { label: "CIM Marketing", href: "/programs/cim" },
      { label: "ACCA Finance", href: "/programs/acca" },
      { label: "CPA Uganda", href: "/programs/cpa" },
      { label: "CIPS Supply Chain", href: "/programs/cips" },
      { label: "CILT Logistics", href: "/programs/cilt" },
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
  <footer className="bg-navy text-white/50" style={{ borderTop: "4px solid hsl(var(--teal-dark))" }}>
    <div className="max-w-[1200px] mx-auto px-[7%] pt-14 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1.6fr] gap-10 pb-10 border-b border-white/10 mb-8">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 no-underline mb-5">
            {/* Text-based logo fallback that always shows */}
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-[22px] text-white tracking-widest uppercase leading-tight">BASEWOOD</span>
              <span className="text-[10px] text-white/50 tracking-[0.18em] uppercase mt-0.5 font-medium">Institute · Center for Professional Courses</span>
            </div>
          </Link>
          <p className="text-[13px] leading-[1.8] text-white/40 max-w-[260px] mb-5">
            Uganda's premier Center for Professional Courses. Empowering individuals and organisations through globally accredited training and consultancy.
          </p>
          <div className="text-[12px] text-white/35 space-y-1">
            <p>Plot 106, Kanjokya Street, Kampala</p>
            <p>+256 744 488 316</p>
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h5 className="text-[11px] font-bold text-white uppercase tracking-[0.14em] mb-5 pb-2 border-b border-white/10">
              {col.title}
            </h5>
            <ul className="list-none space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[13px] text-white/40 no-underline hover:text-white/80 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h5 className="text-[11px] font-bold text-white uppercase tracking-[0.14em] mb-5 pb-2 border-b border-white/10">
            Contact Us
          </h5>
          <div className="space-y-2.5 text-[13px] text-white/40">
            <p>+256 744 488 316</p>
            <p>+256 769 013 080</p>
            <p>+256 773 099 672 (WhatsApp)</p>
            <a href="mailto:info@basewoodconsult.ac.ug" className="block text-white/40 no-underline hover:text-white/80 transition-colors">
              info@basewoodconsult.ac.ug
            </a>
            <a href="https://www.basewoodconsult.ac.ug" target="_blank" rel="noopener noreferrer" className="block text-white/40 no-underline hover:text-white/80 transition-colors">
              www.basewoodconsult.ac.ug
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center text-[12px] gap-2">
        <span className="text-white/25">© 2025 Basewood Consult Uganda Limited. All rights reserved.</span>
        <span className="text-white/25">Center for Professional Courses · Kampala, Uganda</span>
      </div>
    </div>
  </footer>
);

export default Footer;
