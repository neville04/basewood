import { useCounter } from "@/hooks/useCounter";
import { useReveal } from "@/hooks/useReveal";
import heroStudent from "@/assets/hero-student.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const { ref, visible } = useReveal(0.3);

  const alumni = useCounter(1000, 2000, visible);
  const certs = useCounter(6, 2000, visible);
  const courses = useCounter(25, 2000, visible);

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-navy-deep">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Teal accent gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-mid/40 blur-[80px] pointer-events-none" />

      <div ref={ref} className="relative z-10 w-full max-w-[1200px] mx-auto px-[7%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
        {/* Left text */}
        <div>
          {/* Tag */}
          <div className={`inline-flex items-center gap-2 border border-teal/30 bg-teal/10 px-4 py-1.5 rounded-full mb-7 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse-dot" />
            <span className="text-teal text-[11px] font-semibold tracking-[0.14em] uppercase font-mono">2025 Intake — Now Open</span>
          </div>

          <h1 className={`font-display text-[clamp(38px,5vw,66px)] font-bold text-primary-foreground leading-[1.08] tracking-tight mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Advance Your Career.<br />
            Earn Global<br />
            <span className="text-teal italic">Certifications.</span>
          </h1>

          <p className={`text-base text-primary-foreground/60 leading-relaxed max-w-[480px] mb-9 font-light transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            Uganda's premier Center for Professional Courses — partnered with CIM, ACCA, CIPS, CPA & CILT. Join 1,000+ alumni now leading across East Africa.
          </p>

          <div className={`flex gap-3 flex-wrap mb-14 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <a
              href="#programs"
              className="bg-teal text-navy px-8 py-3.5 rounded-full font-bold text-sm no-underline shadow-[0_4px_22px_rgba(46,196,182,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(46,196,182,0.4)] transition-all flex items-center gap-2"
            >
              Explore Programs →
            </a>
            <Link
              to="/enroll"
              className="bg-primary-foreground/[0.08] border border-primary-foreground/20 text-primary-foreground px-8 py-3.5 rounded-full font-medium text-sm no-underline hover:bg-primary-foreground/[0.14] hover:border-primary-foreground/30 transition-all"
            >
              Enroll Now
            </Link>
          </div>

          {/* Stats */}
          <div className={`flex gap-8 flex-wrap pt-10 border-t border-primary-foreground/[0.1] transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            {[
              { value: alumni, suffix: "+", label: "Alumni" },
              { value: certs, suffix: "+", label: "Certifications" },
              { value: courses, suffix: "+", label: "Short Courses" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[36px] font-bold text-primary-foreground leading-none">
                  {s.value >= 100 ? s.value.toLocaleString() : s.value}
                  <span className="text-teal">{s.suffix}</span>
                </div>
                <div className="text-[12px] text-primary-foreground/45 mt-1 font-mono tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero image */}
        <div className={`hidden lg:flex justify-center items-end relative transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-[2] pointer-events-none" />
          <div className="absolute -top-6 -right-6 w-[240px] h-[300px] rounded-[24px] border border-teal/20 bg-teal/5" />
          <div className="absolute -bottom-4 -left-4 w-[160px] h-[200px] rounded-[18px] bg-primary-foreground/[0.04] border border-primary-foreground/[0.08]" />
          <img
            src={heroStudent}
            alt="Professional student at Basewood Institute"
            className="relative z-[1] w-[420px] h-auto rounded-[28px] object-cover shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
