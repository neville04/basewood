import { useReveal } from "@/hooks/useReveal";

const FinalCTA = () => {
  const { ref, visible } = useReveal();

  return (
    <section id="contact" className="py-[90px] px-[7%] bg-cream">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto bg-navy rounded-[20px] p-[72px] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-[60px] items-center relative overflow-hidden transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <div className="absolute -right-[60px] -top-[60px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.09),transparent_70%)]" />
        <div className="relative z-[1]">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-2.5">Start Today</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-primary-foreground leading-[1.12] tracking-tight">
            Ready to Advance<br />Your <em className="italic text-teal">Career?</em>
          </h2>
          <p className="text-[15px] text-primary-foreground/[0.48] leading-relaxed font-light mt-3.5">
            Speak with our enrollment team today. We'll help you choose the right program, understand the schedule, and plan your path to certification.
          </p>
        </div>
        <div className="flex flex-col gap-3 flex-shrink-0 relative z-[1]">
          <a href="mailto:info@basewoodconsult.ac.ug" className="bg-background text-navy px-8 py-4 rounded-lg font-bold text-sm no-underline text-center whitespace-nowrap hover:-translate-y-0.5 transition-transform">
            Apply Now
          </a>
          <a
            href="https://wa.me/256773099672"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 bg-whatsapp text-primary-foreground rounded-lg no-underline font-semibold text-sm whitespace-nowrap hover:opacity-90 transition-opacity"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp Us
          </a>
          <a href="tel:+256773099672" className="bg-transparent text-primary-foreground/60 px-8 py-3.5 rounded-lg font-medium text-sm no-underline border border-primary-foreground/[0.18] text-center whitespace-nowrap hover:border-primary-foreground/[0.42] hover:text-primary-foreground transition-all">
            Call: +256 773 099 672
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
