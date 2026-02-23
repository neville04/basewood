import { useEffect, useState, useCallback } from "react";
import { useCounter } from "@/hooks/useCounter";
import { useReveal } from "@/hooks/useReveal";

const slides = [
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=80",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [formSent, setFormSent] = useState(false);
  const { ref, visible } = useReveal(0.3);

  const alumni = useCounter(1000, 2000, visible);
  const certs = useCounter(6, 2000, visible);
  const courses = useCounter(25, 2000, visible);

  const goSlide = useCallback((n: number) => setCurrent(n), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = () => {
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3500);
  };

  return (
    <section className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Slide backgrounds */}
      {slides.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-in-out animate-slowzoom ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}

      {/* Creative overlay — warm cinematic gradient instead of heavy navy */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(228,73%,13%,0.72)] via-[hsl(220,50%,18%,0.55)] to-[hsl(168,76%,20%,0.35)]" />
      {/* Subtle mesh accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_80%,hsl(168,76%,49%,0.10),transparent),radial-gradient(ellipse_60%_50%_at_80%_20%,hsl(228,73%,40%,0.12),transparent)]" />

      {/* Content */}
      <div ref={ref} className="relative z-10 px-[7%] w-full grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-20 items-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/[0.28] px-3.5 py-1 rounded-full mb-6 animate-fade-up">
            <div className="w-[7px] h-[7px] bg-teal rounded-full animate-pulse-dot" />
            <span className="text-teal text-[11px] font-medium tracking-[0.1em] uppercase font-mono">
              2025 Intake — Now Open
            </span>
          </div>

          <h1 className="font-display text-[clamp(42px,5.2vw,72px)] font-semibold text-primary-foreground leading-[1.08] tracking-tight mb-5 animate-fade-up">
            Advance Your Career.<br />
            Earn <em className="italic text-teal">Global</em><br />
            Certifications.
          </h1>

          <p className="text-base text-primary-foreground/60 leading-relaxed max-w-[500px] mb-10 font-light animate-fade-up-delay-1">
            Uganda's premier Center for Professional Courses — partnered with CIM, ACCA, CIPS, CPA & CILT. Join 1,000+ alumni now leading across East Africa.
          </p>

          <div className="flex gap-3 flex-wrap mb-14 animate-fade-up-delay-2">
            <a
              href="#programs"
              className="bg-teal text-navy px-[30px] py-3.5 rounded-[7px] font-bold text-sm no-underline shadow-[0_4px_22px_rgba(45,212,191,0.32)] hover:-translate-y-0.5 hover:shadow-[0_8px_36px_rgba(45,212,191,0.42)] transition-all"
            >
              Explore Programs
            </a>
            <a
              href="#contact"
              className="bg-transparent text-primary-foreground px-[30px] py-3.5 rounded-[7px] font-medium text-sm no-underline border border-primary-foreground/[0.22] hover:bg-primary-foreground/[0.07] hover:border-primary-foreground/40 transition-all"
            >
              Talk to an Advisor
            </a>
          </div>

          <div className="flex gap-9 animate-fade-up-delay-3">
            {[
              { value: alumni, suffix: "+", label: "Alumni" },
              { value: certs, suffix: "+", label: "Certifications" },
              { value: courses, suffix: "+", label: "Short Courses" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[34px] font-bold text-primary-foreground leading-none">
                  {s.value >= 100 ? s.value.toLocaleString() : s.value}
                  <span className="text-teal">{s.suffix}</span>
                </div>
                <div className="text-[10px] text-primary-foreground/[0.38] mt-1 uppercase tracking-[0.1em] font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment Card */}
        <div className="hidden lg:block bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-[34px] backdrop-blur-[12px] relative overflow-hidden animate-slide-left">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal to-transparent" />
          <div className="text-[10px] uppercase tracking-[0.14em] text-teal font-mono mb-4">Quick Enrollment</div>
          <div className="font-display text-[22px] font-semibold text-primary-foreground mb-5 leading-tight">
            Find Your Perfect Program
          </div>

          {[
            { label: "I am a", options: ["Working Professional", "Recent Graduate", "Corporate Organisation", "Student"] },
            { label: "Interested In", options: ["CIM — Chartered Marketing", "ACCA — Accounting & Finance", "CIPS — Procurement & Supply", "CPA — Certified Public Accountant", "CILT — Logistics & Transport", "Short Courses"] },
          ].map((field) => (
            <div key={field.label} className="mb-3">
              <label className="block text-[11px] text-primary-foreground/40 mb-1 font-medium uppercase tracking-[0.06em]">
                {field.label}
              </label>
              <select className="w-full p-[11px] bg-primary-foreground/[0.06] border border-primary-foreground/[0.13] rounded-lg text-primary-foreground text-sm outline-none focus:border-teal transition-colors appearance-none">
                {field.options.map((o) => (
                  <option key={o} className="bg-navy">{o}</option>
                ))}
              </select>
            </div>
          ))}

          <div className="mb-3">
            <label className="block text-[11px] text-primary-foreground/40 mb-1 font-medium uppercase tracking-[0.06em]">Full Name</label>
            <input type="text" placeholder="e.g. John Ssemakula" className="w-full p-[11px] bg-primary-foreground/[0.06] border border-primary-foreground/[0.13] rounded-lg text-primary-foreground text-sm outline-none focus:border-teal transition-colors placeholder:text-primary-foreground/25" />
          </div>
          <div className="mb-3">
            <label className="block text-[11px] text-primary-foreground/40 mb-1 font-medium uppercase tracking-[0.06em]">Phone / WhatsApp</label>
            <input type="tel" placeholder="+256 7xx xxx xxx" className="w-full p-[11px] bg-primary-foreground/[0.06] border border-primary-foreground/[0.13] rounded-lg text-primary-foreground text-sm outline-none focus:border-teal transition-colors placeholder:text-primary-foreground/25" />
          </div>

          <button
            onClick={handleSubmit}
            className={`w-full p-3 rounded-lg font-bold text-sm cursor-pointer mt-1.5 transition-all hover:opacity-90 hover:-translate-y-px ${
              formSent ? "bg-teal-dark text-primary-foreground" : "bg-teal text-navy"
            }`}
          >
            {formSent ? "✓ Request Sent! We'll contact you shortly." : "Get Course Details →"}
          </button>
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-7 right-[7%] z-10 flex gap-[7px] items-center">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goSlide(i)}
            className={`h-[2px] rounded-[2px] cursor-pointer transition-all duration-300 ${
              i === current ? "bg-teal w-9" : "bg-primary-foreground/[0.22] w-[22px]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
