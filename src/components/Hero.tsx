import { useEffect, useState, useCallback } from "react";
import { useCounter } from "@/hooks/useCounter";
import { useReveal } from "@/hooks/useReveal";
import heroStudent from "@/assets/hero-student.png";

const Hero = () => {
  const [formSent, setFormSent] = useState(false);
  const { ref, visible } = useReveal(0.3);

  const alumni = useCounter(1000, 2000, visible);
  const certs = useCounter(6, 2000, visible);
  const courses = useCounter(25, 2000, visible);

  const handleSubmit = () => {
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3500);
  };

  return (
    <section
      className="relative min-h-[700px] lg:min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #e0f2fe 0%, #f0f9ff 20%, #ffffff 40%, #e0f2fe 60%, #f8fafc 80%, #dbeafe 100%)",
        backgroundSize: "300% 300%",
        animation: "awsShift 12s ease-in-out infinite alternate",
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.07] blur-[80px]" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[60px]" />
      <div className="absolute top-[20%] right-[30%] w-3 h-3 rounded-full bg-accent animate-pulse-dot" />
      <div className="absolute top-[60%] right-[15%] w-2 h-2 rounded-full bg-primary/30 animate-pulse-dot" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div ref={ref} className="relative z-10 px-[7%] w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full mb-6 animate-fade-up">
            <div className="w-[7px] h-[7px] bg-accent rounded-full animate-pulse-dot" />
            <span className="text-accent-foreground text-[11px] font-medium tracking-[0.1em] uppercase font-mono">
              2025 Intake — Now Open
            </span>
          </div>

          <h1 className="font-display text-[clamp(38px,5vw,68px)] font-semibold text-foreground leading-[1.08] tracking-tight mb-5 animate-fade-up">
            Advance Your Career.<br />
            Earn Global<br />
            <em className="italic text-accent-foreground not-italic bg-gradient-to-r from-accent to-teal-dark bg-clip-text text-transparent">Certifications.</em>
          </h1>

          <p className="text-base text-muted-foreground leading-relaxed max-w-[480px] mb-8 font-light animate-fade-up-delay-1">
            Uganda's premier Center for Professional Courses — partnered with CIM, ACCA, CIPS, CPA & CILT. Join 1,000+ alumni now leading across East Africa.
          </p>

          <div className="flex gap-3 flex-wrap mb-12 animate-fade-up-delay-2">
            <a
              href="#programs"
              className="bg-accent text-accent-foreground px-7 py-3.5 rounded-full font-bold text-sm no-underline shadow-[0_4px_22px_hsl(var(--accent)/0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_36px_hsl(var(--accent)/0.4)] transition-all flex items-center gap-2"
            >
              Explore Programs
              <span className="text-lg">→</span>
            </a>
            <a
              href="#contact"
              className="bg-transparent text-foreground px-7 py-3.5 rounded-full font-medium text-sm no-underline border border-border hover:bg-muted hover:border-muted-foreground/20 transition-all flex items-center gap-2"
            >
              <span className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-foreground" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </span>
              How it Works
            </a>
          </div>

          {/* Stats inline */}
          <div className="flex gap-8 animate-fade-up-delay-3">
            {[
              { value: alumni, suffix: "+", label: "Alumni" },
              { value: certs, suffix: "+", label: "Certifications" },
              { value: courses, suffix: "+", label: "Short Courses" },
            ].map((s) => (
              <div key={s.label} className="flex items-baseline gap-1.5">
                <span className="font-display text-[32px] font-bold text-foreground leading-none">
                  {s.value >= 100 ? s.value.toLocaleString() : s.value}
                  <span className="text-accent">{s.suffix}</span>
                </span>
                <span className="text-[11px] text-muted-foreground leading-tight max-w-[60px]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero image with decorative accents */}
        <div className="hidden lg:flex justify-center items-center relative animate-slide-left">
          {/* Decorative geometric shapes behind image */}
          <div className="absolute -top-8 -right-4 w-[280px] h-[340px] rounded-[30px] bg-accent/15 rotate-6" />
          <div className="absolute -bottom-6 -left-4 w-[200px] h-[250px] rounded-[24px] bg-primary/10 -rotate-3" />

          <div className="relative z-[1]">
            <img
              src={heroStudent}
              alt="Professional student at Basewood Institute"
              className="w-[400px] h-auto rounded-[28px] object-cover shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
            />
            {/* Floating enrollment card */}
            <div className="absolute -bottom-6 -left-10 bg-background border border-border rounded-xl p-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm animate-fade-up-delay-2 max-w-[220px]">
              <div className="text-[10px] uppercase tracking-[0.12em] text-accent font-mono mb-1.5">Quick Enrollment</div>
              <div className="text-sm font-semibold text-foreground mb-2">Find Your Program</div>
              <button
                onClick={handleSubmit}
                className={`w-full p-2 rounded-lg font-bold text-xs cursor-pointer transition-all hover:opacity-90 ${
                  formSent ? "bg-teal-dark text-primary-foreground" : "bg-accent text-accent-foreground"
                }`}
              >
                {formSent ? "✓ Sent!" : "Get Details →"}
              </button>
            </div>

            {/* Floating badge top-right */}
            <div className="absolute -top-3 -right-6 bg-background border border-border rounded-xl px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] animate-fade-up flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-lg">🎓</div>
              <div>
                <div className="text-[10px] text-muted-foreground">Global</div>
                <div className="text-xs font-bold text-foreground">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
