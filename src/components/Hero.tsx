import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import carousel1 from "@/assets/hero-carousel-1.jpg";
import carousel2 from "@/assets/hero-carousel-2.jpg";
import carousel3 from "@/assets/hero-carousel-3.jpg";

const slides = [
  {
    img: carousel1,
    label: "Leadership & Finance",
    caption: "Training working professionals for global certification.",
  },
  {
    img: carousel2,
    label: "Recognition & Achievement",
    caption: "Celebrating alumni who lead across East Africa.",
  },
  {
    img: carousel3,
    label: "Graduation & Excellence",
    caption: "Joining a community of 1,000+ certified professionals.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-navy" style={{ minHeight: "92vh" }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        poster={carousel1}
      >
        <source
          src="https://videos.pexels.com/video-files/3255246/3255246-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/75" />

      {/* Carousel images — right side panel (desktop) */}
      <div className="absolute inset-y-0 right-0 w-[42%] hidden lg:block overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            {/* Gradient blend to left */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent" />
          </div>
        ))}
        {/* Caption overlay bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-navy/80 to-transparent">
          <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-teal mb-1">
            {slides[current].label}
          </div>
          <div className="text-[13px] text-white/70">{slides[current].caption}</div>
        </div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 max-w-[1200px] mx-auto px-[7%] flex flex-col justify-center"
        style={{ minHeight: "92vh" }}
      >
        <div className="max-w-[580px] py-20">
          <div className="inline-block bg-teal-dark text-white text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 mb-6">
            2025 Intake — Now Open
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
          <div className="flex gap-10 flex-wrap pt-8 border-t border-white/15">
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
                onClick={() => setCurrent(i)}
                className="w-6 h-[3px] transition-all duration-300"
                style={{
                  backgroundColor: i === current ? "hsl(var(--teal))" : "hsl(var(--teal) / 0.3)",
                }}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
