import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import basewoodLogo from "@/assets/basewood-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top info bar */}
      <div className="bg-navy-deep text-primary-foreground/70 text-[12px] px-[6%] py-2 hidden md:block">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span>📍 Plot 106, Kanjokya Street, Kampala</span>
            <span>✉️ <a href="mailto:info@basewoodconsult.ac.ug" className="text-teal hover:text-white transition-colors no-underline">info@basewoodconsult.ac.ug</a></span>
          </div>
          <div className="flex items-center gap-6">
            <span>📞 +256 744 488 316</span>
            <a
              href="https://wa.me/256773099672"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-whatsapp hover:text-white transition-colors no-underline font-medium"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 left-0 right-0 z-[200] h-[68px] px-[6%] flex items-center justify-between bg-background/[0.98] backdrop-blur-[14px] border-b border-border transition-shadow duration-300 ${
          scrolled ? "shadow-[0_4px_28px_rgba(15,30,92,0.10)]" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src={basewoodLogo} alt="Basewood Logo" className="h-[38px] w-auto" />
          <div className="flex flex-col leading-none">
            <span className="text-[17px] font-bold tracking-tight text-navy uppercase leading-tight">Basewood</span>
            <span className="text-[9px] font-medium text-muted-foreground tracking-[0.12em] uppercase">Institute</span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`no-underline text-sm font-medium transition-colors px-4 py-2 rounded-md ${
                  isActive(link.href)
                    ? "text-navy font-semibold bg-navy/[0.06]"
                    : "text-muted-foreground hover:text-navy hover:bg-navy/[0.04]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="ml-2">
            <Link
              to="/enroll"
              className="no-underline bg-navy text-primary-foreground px-5 py-2.5 rounded-[8px] font-semibold text-sm hover:bg-teal-dark transition-colors"
            >
              Enroll Now
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-navy transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="absolute top-[68px] left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-1 md:hidden shadow-lg">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium no-underline px-3 py-2.5 rounded-md ${
                  isActive(link.href) ? "text-navy bg-navy/[0.06]" : "text-muted-foreground hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/enroll"
              onClick={() => setMobileOpen(false)}
              className="bg-navy text-primary-foreground px-5 py-2.5 rounded-[8px] font-semibold text-sm text-center no-underline mt-2"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
