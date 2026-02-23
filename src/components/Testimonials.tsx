import { useReveal } from "@/hooks/useReveal";

const testimonials = [
  {
    name: "Natasha Nyonyozi",
    role: "Accountant · Miss World Uganda 2024–25",
    company: "NSSF",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
    text: "Integrity in the accounting profession is instilled at Basewood — this drives the compliance mindset that has been critical to my career.",
  },
  {
    name: "Geofrey Ssajjabi",
    role: "Chief Commercial Officer, NSSF",
    company: "NSSF",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    text: "The real-world approach to marketing education gave me the strategic foundation needed to lead at the highest level of a national institution.",
  },
  {
    name: "Sandrah Rhodah Namutebi",
    role: "Head of Marketing, Uganda Airlines",
    company: "Uganda Airlines",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80",
    text: "CIM through Basewood connected me with a powerful network of professionals and equipped me with tools that make a real difference every day.",
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
          backgroundImage: "linear-gradient(rgba(255,255,255,0.016) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.016) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="max-w-[1200px] mx-auto relative z-[1]" ref={ref}>
        <div className={`text-center mb-[52px] transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-2.5">Alumni Voices</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-primary-foreground leading-[1.12] tracking-tight">
            Trusted by <em className="italic text-teal-dark">Leaders</em><br />Across East Africa
          </h2>
          <p className="text-[15px] text-primary-foreground/[0.48] leading-relaxed font-light max-w-[440px] mx-auto mt-3">
            Our graduates hold senior positions at Uganda's most respected organisations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-primary-foreground/[0.04] border border-primary-foreground/[0.07] rounded-[14px] overflow-hidden hover:bg-primary-foreground/[0.07] hover:-translate-y-1 transition-all duration-250 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-full h-[190px] bg-cover bg-center bg-top relative" style={{ backgroundImage: `url('${t.img}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/[0.88] to-transparent via-transparent via-[60%]" />
                <span className="absolute top-3 right-3 bg-black/50 backdrop-blur-md border border-primary-foreground/[0.14] rounded-md px-2.5 py-1 text-[11px] font-bold text-primary-foreground z-[2]">
                  {t.company}
                </span>
                <div className="absolute bottom-3 left-4 z-[2]">
                  <strong className="block text-sm font-semibold text-primary-foreground font-display">{t.name}</strong>
                  <span className="text-[11px] text-primary-foreground/50 font-mono">{t.role}</span>
                </div>
              </div>
              <div className="p-[18px_20px_22px]">
                <div className="font-display text-[44px] text-teal leading-[0.85] mb-2 opacity-50">"</div>
                <p className="font-display text-base text-primary-foreground/80 leading-relaxed italic">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
