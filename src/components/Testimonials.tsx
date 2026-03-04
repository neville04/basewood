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
    text: "The blended approach programme coupled with experienced world class facilitators provided me with a lot of professional marketing and strategic skills that are very relevant and resonates well with my daily work.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-[7%] bg-secondary border-b border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-b-2 border-navy pb-5 mb-10">
          <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">What Our Alumni Say</p>
          <h2 className="font-display text-[clamp(26px,3vw,40px)] font-bold text-navy leading-tight tracking-tight">
            Alumni Messages About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background border border-border p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[64px] h-[64px] border-2 border-navy overflow-hidden flex-shrink-0">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <div className="font-bold text-navy text-sm">{t.name}</div>
                  <div className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">{t.role}</div>
                </div>
              </div>

              <p className="text-[14px] text-foreground/80 leading-[1.8] italic border-l-4 border-teal-dark pl-4">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
