import heroStudent from "@/assets/hero-student.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-navy py-16 border-b border-primary-foreground/10">
      <div className="max-w-[1200px] mx-auto px-[7%] grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
        {/* Left text */}
        <div>
          <div className="inline-block bg-teal-dark text-white text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 mb-6">
            2025 Intake — Now Open
          </div>

          <h1 className="font-display text-[clamp(34px,4.5vw,60px)] font-bold text-primary-foreground leading-[1.1] tracking-tight mb-5">
            Advance Your Career.<br />
            Earn Global<br />
            <span className="text-teal">Certifications.</span>
          </h1>

          <p className="text-[15px] text-primary-foreground/65 leading-relaxed max-w-[500px] mb-8">
            Uganda's premier Center for Professional Courses — partnered with CIM, ACCA, CIPS, CPA &amp; CILT. Join 1,000+ alumni now leading across East Africa.
          </p>

          <div className="flex gap-3 flex-wrap mb-12">
            <a
              href="#programs"
              className="bg-teal-dark text-white px-7 py-3 font-bold text-sm uppercase tracking-[0.06em] no-underline hover:bg-teal transition-colors"
            >
              Explore Programs
            </a>
            <Link
              to="/enroll"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3 font-bold text-sm uppercase tracking-[0.06em] no-underline hover:border-teal hover:text-teal transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 flex-wrap pt-8 border-t border-primary-foreground/15">
            {[
              { value: "1,000+", label: "Alumni" },
              { value: "6+", label: "Certifications" },
              { value: "25+", label: "Short Courses" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[32px] font-bold text-primary-foreground leading-none">
                  {s.value}
                </div>
                <div className="text-[12px] text-primary-foreground/45 mt-1 uppercase tracking-[0.1em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero image */}
        <div className="hidden lg:block">
          <img
            src={heroStudent}
            alt="Professional student at Basewood Institute"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
