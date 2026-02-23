import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] h-[68px] px-[6%] flex items-center justify-between bg-background/[0.97] backdrop-blur-[14px] border-b border-border transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_28px_rgba(15,30,92,0.07)]" : ""
      }`}
    >
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-[34px] h-[34px] bg-navy rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-[5px] left-[5px] border-l-[12px] border-l-transparent border-b-[24px] border-b-teal opacity-90" />
        </div>
        <span className="font-bold text-base text-navy tracking-tight">
          BASE<span className="text-teal-dark">WOOD</span>
        </span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        <li><a href="/#about" className="no-underline text-muted-foreground text-sm font-medium hover:text-navy transition-colors">About</a></li>
        <li><a href="/#programs" className="no-underline text-muted-foreground text-sm font-medium hover:text-navy transition-colors">Programs</a></li>
        <li><a href="/#certifications" className="no-underline text-muted-foreground text-sm font-medium hover:text-navy transition-colors">Certifications</a></li>
        <li><a href="/#team" className="no-underline text-muted-foreground text-sm font-medium hover:text-navy transition-colors">Our Team</a></li>
        <li><a href="/#alumni" className="no-underline text-muted-foreground text-sm font-medium hover:text-navy transition-colors">Alumni</a></li>
        <li>
          <a
            href="/enroll"
            className="no-underline bg-navy text-primary-foreground px-5 py-2 rounded-[7px] font-semibold text-sm hover:bg-teal-dark transition-colors"
          >
            Enroll Now
          </a>
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
          <a href="/#about" onClick={() => setMobileOpen(false)} className="text-muted-foreground font-medium">About</a>
          <a href="/#programs" onClick={() => setMobileOpen(false)} className="text-muted-foreground font-medium">Programs</a>
          <a href="/#certifications" onClick={() => setMobileOpen(false)} className="text-muted-foreground font-medium">Certifications</a>
          <a href="/#team" onClick={() => setMobileOpen(false)} className="text-muted-foreground font-medium">Our Team</a>
          <a href="/#alumni" onClick={() => setMobileOpen(false)} className="text-muted-foreground font-medium">Alumni</a>
          <a href="/enroll" onClick={() => setMobileOpen(false)} className="bg-navy text-primary-foreground px-5 py-2 rounded-[7px] font-semibold text-sm text-center">Enroll Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
