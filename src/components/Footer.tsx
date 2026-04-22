import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { CONTACT_INFO, PROFESSIONAL_COURSES } from "@/constants";
import basewoodLogo from "@/assets/basewood-logo.png";

const Footer = () => (
  <footer className="bg-primary text-white pt-20 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* About */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-8 no-underline">
            <div className="bg-white p-2">
              <img src={basewoodLogo} alt="Basewood" className="h-8 w-8 object-contain" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">BASEWOOD</span>
          </Link>
          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            Uganda's premier Center for Professional Courses. Empowering individuals and
            organisations through globally accredited training and consultancy.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-black uppercase tracking-widest mb-8 border-b-2 border-secondary inline-block pb-1 text-white">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter text-slate-300">
            <li><Link to="/about" className="hover:text-secondary transition-colors no-underline">Our Profile</Link></li>
            <li><Link to="/team" className="hover:text-secondary transition-colors no-underline">Our Directors</Link></li>
            <li><Link to="/programs" className="hover:text-secondary transition-colors no-underline">Programmes</Link></li>
            <li><Link to="/contact" className="hover:text-secondary transition-colors no-underline">Work With Us</Link></li>
            <li><Link to="/enroll" className="hover:text-secondary transition-colors no-underline">Apply Online</Link></li>
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h4 className="text-lg font-black uppercase tracking-widest mb-8 border-b-2 border-secondary inline-block pb-1 text-white">
            Programmes
          </h4>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-tighter text-slate-300">
            {PROFESSIONAL_COURSES.map(course => (
              <li key={course.name}>
                <Link to="/programs" className="hover:text-secondary transition-colors no-underline">
                  {course.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-lg font-black uppercase tracking-widest mb-8 border-b-2 border-secondary inline-block pb-1 text-white">
            Connect With Us
          </h4>
          <ul className="space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="h-6 w-6 text-secondary flex-shrink-0" />
              <span className="text-slate-300 leading-tight">{CONTACT_INFO.address}</span>
            </li>
            <li className="flex gap-4">
              <Phone className="h-6 w-6 text-secondary flex-shrink-0" />
              <div className="flex flex-col gap-1">
                {CONTACT_INFO.phones.slice(0, 2).map(p => (
                  <span key={p} className="text-slate-300 font-bold">{p}</span>
                ))}
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="h-6 w-6 text-secondary flex-shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-300 font-bold no-underline hover:text-secondary">{CONTACT_INFO.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 text-center">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} BASEWOOD CONSULT UGANDA LIMITED. ALL RIGHTS RESERVED.
          <span className="mx-4 text-white/20">|</span>
          CENTER FOR PROFESSIONAL COURSES · KAMPALA, UGANDA
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
