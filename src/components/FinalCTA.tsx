const FinalCTA = () => {
  return (
    <section className="py-16 px-[7%] bg-navy border-b border-primary-foreground/10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8 border-b border-primary-foreground/15 pb-10 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal font-semibold mb-1">Start Today</p>
            <h2 className="font-display text-[clamp(26px,3.2vw,44px)] font-bold text-primary-foreground leading-tight tracking-tight mb-2">
              Ready to Advance Your Career?
            </h2>
            <p className="text-[14px] text-primary-foreground/55 leading-relaxed max-w-[500px]">
              Speak with our enrollment team today. We'll help you choose the right program, understand the schedule, and plan your path to certification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="/enroll"
              className="px-7 py-3 bg-teal-dark text-white font-bold text-sm uppercase tracking-[0.06em] no-underline hover:bg-teal transition-colors text-center"
            >
              Apply Now
            </a>
            <a
              href="https://wa.me/256773099672"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 border-2 border-primary-foreground/30 text-primary-foreground font-bold text-sm uppercase tracking-[0.06em] no-underline hover:border-teal hover:text-teal transition-colors text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-primary-foreground/10">
          <a
            href="mailto:info@basewoodconsult.ac.ug"
            className="flex items-start gap-4 p-7 border-r border-primary-foreground/10 no-underline hover:bg-primary-foreground/5 transition-colors"
          >
            <span className="text-teal text-2xl mt-0.5">✉</span>
            <div>
              <div className="text-primary-foreground font-bold text-sm uppercase tracking-[0.06em] mb-1">Email Us</div>
              <div className="text-primary-foreground/50 text-[13px]">info@basewoodconsult.ac.ug</div>
            </div>
          </a>

          <a
            href="https://wa.me/256773099672"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-7 border-r border-primary-foreground/10 no-underline hover:bg-primary-foreground/5 transition-colors"
          >
            <span className="text-teal text-2xl mt-0.5">💬</span>
            <div>
              <div className="text-primary-foreground font-bold text-sm uppercase tracking-[0.06em] mb-1">WhatsApp</div>
              <div className="text-primary-foreground/50 text-[13px]">+256 773 099 672</div>
            </div>
          </a>

          <a
            href="tel:+256744488316"
            className="flex items-start gap-4 p-7 no-underline hover:bg-primary-foreground/5 transition-colors"
          >
            <span className="text-teal text-2xl mt-0.5">📞</span>
            <div>
              <div className="text-primary-foreground font-bold text-sm uppercase tracking-[0.06em] mb-1">Call Us</div>
              <div className="text-primary-foreground/50 text-[13px]">+256 744 488 316</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
