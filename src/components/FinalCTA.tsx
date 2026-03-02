import { useReveal } from "@/hooks/useReveal";

const FinalCTA = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-[100px] px-[7%] bg-navy relative overflow-hidden">
      {/* Pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-[20%] w-[300px] h-[300px] rounded-full bg-teal/[0.07] blur-[80px] pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto relative z-[1] transition-all duration-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="text-center mb-14">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-3">Start Today</div>
          <h2 className="font-display text-[clamp(36px,4vw,58px)] font-bold text-primary-foreground leading-[1.1] tracking-tight mb-4">
            Ready to Advance Your <em className="italic text-teal">Career?</em>
          </h2>
          <p className="text-[15px] text-primary-foreground/50 leading-relaxed font-light max-w-[500px] mx-auto">
            Speak with our enrollment team today. We'll help you choose the right program, understand the schedule, and plan your path to certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[700px] mx-auto">
          <a
            href="mailto:info@basewoodconsult.ac.ug"
            className="flex flex-col items-center gap-3 bg-primary-foreground/[0.06] border border-primary-foreground/[0.12] hover:border-teal/50 hover:bg-primary-foreground/[0.1] px-6 py-7 rounded-2xl no-underline transition-all group"
          >
            <span className="text-2xl">✉️</span>
            <span className="text-primary-foreground font-semibold text-sm">Apply by Email</span>
            <span className="text-primary-foreground/40 text-xs text-center">info@basewoodconsult.ac.ug</span>
          </a>

          <a
            href="https://wa.me/256773099672"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-whatsapp/20 border border-whatsapp/30 hover:bg-whatsapp/30 hover:border-whatsapp/50 px-6 py-7 rounded-2xl no-underline transition-all group"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="hsl(var(--whatsapp))"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            <span className="text-primary-foreground font-semibold text-sm">WhatsApp Us</span>
            <span className="text-primary-foreground/40 text-xs">+256 773 099 672</span>
          </a>

          <a
            href="tel:+256773099672"
            className="flex flex-col items-center gap-3 bg-primary-foreground/[0.06] border border-primary-foreground/[0.12] hover:border-teal/50 hover:bg-primary-foreground/[0.1] px-6 py-7 rounded-2xl no-underline transition-all group"
          >
            <span className="text-2xl">📞</span>
            <span className="text-primary-foreground font-semibold text-sm">Call Us</span>
            <span className="text-primary-foreground/40 text-xs">+256 773 099 672</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
