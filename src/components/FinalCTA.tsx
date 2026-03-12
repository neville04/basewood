const FinalCTA = () => {
  return (
    <section className="py-20 px-[7%] bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 border-b border-black/5 pb-12 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-2">Start Today</p>
            <h2 className="font-display text-[clamp(32px,3.6vw,48px)] font-bold text-navy leading-tight tracking-tight mb-3">
              Ready to Advance Your Career?
            </h2>
            <p className="text-[15px] text-[#6B7280] leading-relaxed max-w-[520px]">
              Speak with our enrollment team today. We'll help you choose the right program, understand the schedule, and plan your path to certification.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="/enroll"
              className="px-8 py-3 bg-[#2DD4BF] text-[#1A2E50] font-bold text-sm uppercase tracking-[0.06em] no-underline rounded-full text-center shadow-[0_18px_30px_rgba(2,32,71,0.18)] transition-all duration-200 hover:-translate-y-0.5"
            >
              Apply Now
            </a>
            <a
              href="https://wa.me/256773099672"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[#2DD4BF] text-[#1E3A5F] font-bold text-sm uppercase tracking-[0.06em] no-underline rounded-full text-center transition-all duration-200 hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-black/5 rounded-2xl overflow-hidden">
          <a
            href="mailto:info@basewoodconsult.ac.ug"
            className="flex items-start gap-4 p-8 border-b md:border-b-0 md:border-r border-black/5 no-underline hover:bg-secondary transition-colors"
          >
            <span className="text-[#2DD4BF] text-2xl mt-0.5">✉</span>
            <div>
              <div className="text-navy font-bold text-sm uppercase tracking-[0.06em] mb-1">Email Us</div>
              <div className="text-[#6B7280] text-[13px]">info@basewoodconsult.ac.ug</div>
            </div>
          </a>

          <a
            href="https://wa.me/256773099672"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 p-8 border-b md:border-b-0 md:border-r border-black/5 no-underline hover:bg-secondary transition-colors"
          >
            <span className="text-[#2DD4BF] text-2xl mt-0.5">💬</span>
            <div>
              <div className="text-navy font-bold text-sm uppercase tracking-[0.06em] mb-1">WhatsApp</div>
              <div className="text-[#6B7280] text-[13px]">+256 773 099 672</div>
            </div>
          </a>

          <a
            href="tel:+256744488316"
            className="flex items-start gap-4 p-8 no-underline hover:bg-secondary transition-colors"
          >
            <span className="text-[#2DD4BF] text-2xl mt-0.5">📞</span>
            <div>
              <div className="text-navy font-bold text-sm uppercase tracking-[0.06em] mb-1">Call Us</div>
              <div className="text-[#6B7280] text-[13px]">+256 744 488 316</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
