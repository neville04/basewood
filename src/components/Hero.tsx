import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-navy overflow-hidden" style={{ minHeight: "92vh" }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        poster="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/3255246/3255246-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[7%] flex flex-col justify-center" style={{ minHeight: "92vh" }}>
        <div className="max-w-[640px] py-20">
          <div className="inline-block bg-teal-dark text-white text-[11px] font-bold uppercase tracking-[0.12em] px-3 py-1.5 mb-6">
            2025 Intake — Now Open
          </div>

          <h1 className="font-display text-[clamp(36px,5vw,68px)] font-bold text-white leading-[1.08] tracking-tight mb-6">
            Advance Your Career.<br />
            Earn Global<br />
            <span className="text-teal">Certifications.</span>
          </h1>

          <p className="text-[16px] text-white/70 leading-relaxed max-w-[520px] mb-10">
            Uganda's premier Center for Professional Courses — partnered with CIM, ACCA, CIPS, CPA &amp; CILT. Join 1,000+ alumni now leading across East Africa.
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
                <div className="font-display text-[36px] font-bold text-white leading-none">
                  {s.value}
                </div>
                <div className="text-[12px] text-white/45 mt-1 uppercase tracking-[0.1em]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
