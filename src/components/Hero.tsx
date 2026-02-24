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
        background: "linear-gradient(160deg, #93c5fd 0%, #bae6fd 15%, #c4b5fd 28%, #ddd6fe 42%, #ede9fe 55%, #f0f9ff 70%, #f5f3ff 85%, #ffffff 100%)",
        backgroundSize: "400% 400%",
        animation: "awsShift 10s ease-in-out infinite alternate",
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
              href="/enroll"
              className="bg-transparent text-foreground px-7 py-3.5 rounded-full font-medium text-sm no-underline border border-border hover:bg-muted hover:border-muted-foreground/20 transition-all flex items-center gap-2"
            >
              Enroll Now →
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
