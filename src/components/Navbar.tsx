import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import basewoodLogo from "@/assets/basewood-logo.png";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PROGRAMS", href: "/programs" },
  { label: "OUR TEAM", href: "/team" },
  { label: "CONTACT", href: "/contact" },
];

const topNavItems = [
  { label: "Apply Now", href: "/enroll" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full flex flex-col items-center sticky top-0 z-[200]">
      {/* Top tier */}
      <div className="w-full bg-white border-b py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-end items-center gap-4 text-[13px] font-semibold text-slate-800">
          {topNavItems.map((item, i) => (
            <div key={item.label} className="flex items-center">
              <Link to={item.href} className="hover:text-primary transition-colors no-underline text-slate-700">
                {item.label}
              </Link>
              {i < topNavItems.length - 1 && <span className="mx-2 text-slate-300">|</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Main Bar */}
      <div className="w-full bg-white py-4 border-b">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 no-underline">
            <div className="bg-primary p-2">
              <img src={basewoodLogo} alt="Basewood" className="h-8 w-8 object-contain" data-priority="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-primary leading-none">BASEWOOD</span>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold border-t mt-1 pt-1 border-slate-200">
                Institute · Center for Professional Courses
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-[12px] font-bold no-underline transition-colors ${
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-primary hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/enroll"
              className="px-5 py-2.5 bg-secondary text-primary font-black uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-colors no-underline"
            >
              Enroll Now
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-white border-b p-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-bold text-primary py-2 border-b last:border-0 no-underline"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-4">
              {topNavItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xs font-semibold text-slate-500 py-1 no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/enroll"
              onClick={() => setIsMenuOpen(false)}
              className="bg-secondary text-primary px-5 py-3 font-black text-xs uppercase tracking-widest text-center no-underline mt-2"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
