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
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Our Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-[68px] px-[6%] flex items-center justify-between bg-background/[0.97] backdrop-blur-[14px] border-b border-border transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_28px_rgba(15,30,92,0.07)]" : ""
      }`}
    >
      <Link to="/" className="flex items-center gap-2 no-underline">
        <img src={basewoodLogo} alt="Basewood Logo" className="h-[42px] w-auto min-w-[180px]" />
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className={`no-underline text-sm font-medium transition-colors ${
                isActive(link.href) ? "text-navy font-semibold" : "text-muted-foreground hover:text-navy"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/enroll"
            className="no-underline bg-navy text-primary-foreground px-5 py-2 rounded-[7px] font-semibold text-sm hover:bg-teal-dark transition-colors"
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
        <span className="block w-5 h-0.5 bg-navy" />
        <span className="block w-5 h-0.5 bg-navy" />
        <span className="block w-5 h-0.5 bg-navy" />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[68px] left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-lg">
          {links.map((link) => (
            <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className="text-muted-foreground font-medium no-underline">
              {link.label}
            </Link>
          ))}
          <Link to="/enroll" onClick={() => setMobileOpen(false)} className="bg-navy text-primary-foreground px-5 py-2 rounded-[7px] font-semibold text-sm text-center no-underline">
            Enroll Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
