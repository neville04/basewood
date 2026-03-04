import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import basewoodLogo from "@/assets/basewood-logo.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
      {/* Top bar — logo left, quick links right */}
      <div className="bg-background border-b border-border px-[6%] py-4 hidden md:block">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 no-underline">
            <img src={basewoodLogo} alt="Basewood Logo" className="h-[56px] w-auto" />
            <div className="flex flex-col leading-none border-l border-border pl-3">
              <span className="text-[20px] font-bold tracking-tight text-navy uppercase leading-tight font-display">Basewood</span>
              <span className="text-[10px] font-medium text-muted-foreground tracking-[0.14em] uppercase mt-0.5">Institute</span>
            </div>
          </Link>

          {/* Quick action links */}
          <div className="flex items-center divide-x divide-border text-[13px]">
            {[
              { label: "Apply Now", href: "/enroll" },
              { label: "FAQs", href: "/contact" },
              { label: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="no-underline text-navy font-semibold px-5 py-1 hover:text-teal-dark transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav — navy background, centered links */}
      <nav className="sticky top-0 left-0 right-0 z-[200] bg-navy border-b-4 border-teal-dark">
        <div className="max-w-[1200px] mx-auto px-[6%] flex items-center justify-between">
          {/* Mobile logo */}
          <Link to="/" className="md:hidden flex items-center gap-2 no-underline py-3">
            <img src={basewoodLogo} alt="Basewood Logo" className="h-9 w-auto brightness-0 invert" />
            <span className="text-[15px] font-bold text-primary-foreground uppercase tracking-tight">Basewood</span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`no-underline text-[13px] font-semibold uppercase tracking-[0.06em] px-5 py-5 block transition-colors border-b-4 -mb-[4px] ${
                    isActive(link.href)
                      ? "text-teal border-teal"
                      : "text-primary-foreground/80 hover:text-white border-transparent hover:border-teal/50"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Enroll CTA */}
          <div className="hidden md:block">
            <Link
              to="/enroll"
              className="no-underline bg-teal-dark text-white px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.06em] hover:bg-teal transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 py-3"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-primary-foreground transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-primary-foreground transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-primary-foreground transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="bg-navy-deep border-t border-primary-foreground/10 p-4 flex flex-col md:hidden">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-[13px] font-semibold uppercase tracking-[0.06em] no-underline px-3 py-3 border-b border-primary-foreground/10 ${
                  isActive(link.href) ? "text-teal" : "text-primary-foreground/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/enroll"
              onClick={() => setMobileOpen(false)}
              className="bg-teal-dark text-white px-5 py-3 font-bold text-sm uppercase tracking-[0.06em] text-center no-underline mt-3"
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
