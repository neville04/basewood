import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    img: "/studying1.jpg",
    label: "Immersive Study Pods",
    caption: "Late-night cohorts mastering CIM and CIPS deliverables.",
  },
  {
    img: "/studying2.jpg",
    label: "Executive Workshops",
    caption: "Hands-on simulations for finance and logistics leaders.",
  },
  {
    img: "/studying3.jpg",
    label: "Peer-to-Peer Coaching",
    caption: "Collaborative learning that keeps alumni connected.",
  },
];

const loopSlides = [slides[slides.length - 1], ...slides, slides[0]];

const Hero = () => {
  const [index, setIndex] = useState(1);
  const [current, setCurrent] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const normalized = ((index - 1 + slides.length) % slides.length + slides.length) % slides.length;
    setCurrent(normalized);
  }, [index]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      const id = requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitionEnabled]);

  const handleTransitionEnd = () => {
    if (index === loopSlides.length - 1) {
      setIsTransitionEnabled(false);
      setIndex(1);
    } else if (index === 0) {
      setIsTransitionEnabled(false);
      setIndex(loopSlides.length - 2);
    }
  };

  return (
    <section className="relative overflow-hidden bg-black" style={{ minHeight: "92vh" }}>
      {/* Background carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="h-full w-full flex flex-col"
          style={{
            transform: `translateY(-${index * 100}%)`,
            transition: isTransitionEnabled ? "transform 7.5s cubic-bezier(0.45, 0, 0.55, 1)" : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {loopSlides.map((slide, idx) => {
            const isPriority = idx === 1;
            return (
              <div key={`${slide.img}-${idx}`} className="h-full w-full flex-shrink-0 relative">
                <img
                  src={slide.img}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                  loading={isPriority ? "eager" : "lazy"}
                  decoding="async"
                  data-priority={isPriority ? "true" : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.12),transparent_55%)]" />

      {/* Content */}
      <div
        className="relative z-10 max-w-[1200px] mx-auto px-[7%] flex flex-col justify-center"
        style={{ minHeight: "92vh" }}
      >
        <div className="max-w-[580px] py-20">
          <div className="inline-block bg-teal-dark text-white text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 mb-6">
            2026 Intake — Now Open
          </div>

          <h1 className="font-display text-[clamp(36px,4.5vw,64px)] font-bold text-white leading-[1.08] tracking-tight mb-6">
            Advance Your Career.<br />
            Earn Global<br />
            <span style={{ color: "hsl(var(--teal))" }}>Certifications.</span>
          </h1>

          <p className="text-[15px] text-white/65 leading-relaxed max-w-[480px] mb-10">
            Uganda's premier Center for Professional Courses — partnered with CIM, ACCA, CIPS, CPA &amp; CILT.
            Join 1,000+ alumni leading across East Africa.
          </p>

          <div className="flex gap-3 flex-wrap mb-14">
            <a
              href="#programs"
              className="bg-teal-dark text-white px-8 py-3.5 font-bold text-sm uppercase tracking-[0.06em] no-underline hover:bg-teal transition-colors"
            >
              Explore Programs
            </a>
            <Link
              to="/enroll"
              className="border-2 border-white/40 text-white px-8 py-3.5 font-bold text-sm uppercase tracking-[0.06em] no-underline hover:border-white transition-colors"
            >
              Enroll Now
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-10 flex-wrap pt-8 border-t border-white/25">
            {[
              { value: "1,000+", label: "Alumni" },
              { value: "6+", label: "Certifications" },
              { value: "25+", label: "Short Courses" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-[34px] font-bold text-white leading-none">{s.value}</div>
                <div className="text-[11px] text-white/45 mt-1 uppercase tracking-[0.1em]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Carousel dots */}
          <div className="flex gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIsTransitionEnabled(true);
                  setIndex(i + 1);
                }}
                className="w-6 h-[3px] transition-all duration-300"
                style={{
                  backgroundColor: i === current ? "hsl(var(--teal))" : "hsl(var(--teal) / 0.3)",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="mt-6 text-[11px] uppercase tracking-[0.14em] text-white/70">
            {slides[current].label} — <span className="text-white/60 normal-case tracking-normal text-[13px]">{slides[current].caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
