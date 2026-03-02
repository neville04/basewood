import { useReveal } from "@/hooks/useReveal";
import abdulHameedImg from "@/assets/abdul-hameed-new.png";

const testimonials = [
  {
    name: "Natasha Nyonyozi",
    role: "Accountant · Miss World Uganda 2024–25",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
    text: "At Basewood Institute, integrity in the accounting profession is instilled and this drives compliance which is of great help in my career.",
  },
  {
    name: "Abdul Hameed (MCIM)",
    role: "Chief Marketing Officer — METRO CEMENT",
    img: abdulHameedImg,
    text: "The blended approach programme coupled with experienced world class facilitators provided me with a lot of professional marketing and strategic skills that are very relevant and resonates well with my daily work and organisation's strategic intent.",
  },
];

const Testimonials = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-[100px] px-[7%] bg-navy-deep relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-teal/[0.04] blur-[80px] pointer-events-none rounded-full" />

      <div className="max-w-[1200px] mx-auto relative z-[1]" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-3">What Our Alumni Say</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-bold text-primary-foreground leading-[1.12] tracking-tight">
            Alumni Messages <em className="italic text-teal">About Us</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-primary-foreground/[0.04] border border-primary-foreground/[0.1] hover:border-teal/30 rounded-2xl p-8 relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute top-6 right-6 font-display text-[80px] text-teal/10 leading-none pointer-events-none">"</div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-[72px] h-[72px] rounded-full border-2 border-teal/40 overflow-hidden flex-shrink-0">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="font-semibold text-primary-foreground text-sm">{t.name}</div>
                  <div className="text-[12px] text-primary-foreground/45 font-mono mt-0.5 leading-relaxed">{t.role}</div>
                </div>
              </div>

              <p className="text-[15px] text-primary-foreground/75 leading-[1.75] italic">
                "{t.text}"
              </p>

              <div className="flex gap-1 mt-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-teal text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
