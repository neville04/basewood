import { useReveal } from "@/hooks/useReveal";
import abdulHameedImg from "@/assets/abdul-hameed.png";

const testimonials = [
  {
    name: "Natasha Nyonyozi",
    role: "Accountant\nMiss World Uganda 2024–25",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
    text: "At Basewood Institute, integrity in the accounting profession is instilled and this drives compliance which is of great help in my career.",
  },
  {
    name: "Abdul Hameed (MCIM)",
    role: "Chief Marketing Officer –\nMETRO CEMENT",
    img: abdulHameedImg,
    text: "The blended approach programme coupled with experienced world class facilitators provided me with a lot of professional marketing and strategic skills that are very relevant and resonates well with my daily work and organisation's strategic intent.",
  },
];

const Testimonials = () => {
  const { ref, visible } = useReveal();

  return (
    <section className="py-[100px] px-[7%] bg-navy relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="max-w-[1200px] mx-auto relative z-[1]" ref={ref}>
        <div
          className={`text-center mb-[52px] transition-all duration-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-primary-foreground leading-[1.12] tracking-tight">
            Alumni Messages <em className="italic text-teal">about us</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[900px] mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`flex flex-col items-center text-center transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Circular photo */}
              <div className="w-[130px] h-[130px] rounded-full border-4 border-teal overflow-hidden mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Quote card */}
              <div className="bg-teal/20 border border-teal/30 rounded-2xl p-6 relative">
                <div className="font-display text-[48px] text-navy-deep leading-[0.8] mb-2 opacity-70">
                  "
                </div>
                <p className="text-[15px] text-primary-foreground/90 leading-relaxed italic mb-5">
                  {t.text}
                </p>
                <strong className="block text-sm font-bold text-primary-foreground font-display">
                  {t.name}
                </strong>
                <span className="text-[12px] text-primary-foreground/60 font-mono whitespace-pre-line leading-relaxed">
                  {t.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
