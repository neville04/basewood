const testimonials = [
  {
    name: "Natasha Nyonyozi",
    role: "Accountant · Miss World Uganda 2024–25",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80",
    text: "At Basewood Institute, integrity in the accounting profession is instilled and this drives compliance which is of great help in my career.",
  },
  {
    name: "Michael Okello",
    role: "CFO · Nimbus Logistics",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&q=80",
    text: "The advisory sessions and mock boards sharpened both my technical knowledge and the executive presence I needed to lead a regional finance team.",
  },
  {
    name: "Sarah Kintu",
    role: "Head of Procurement · UG Power",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
    text: "Basewood's CIPS pathway translated directly into supplier savings — their facilitators bring real tenders into the classroom.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-[7%] bg-[#F0F4FA] border-t border-black/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-b-2 border-navy/60 pb-6 mb-12">
          <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">What Our Alumni Say</p>
          <h2 className="font-display text-[clamp(32px,3.2vw,46px)] font-bold text-navy leading-tight tracking-tight">
            Alumni Messages About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-black/5 p-8 rounded-2xl shadow-[0_16px_45px_rgba(15,23,42,0.08)] flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-[#EEF2F8]">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E3A5F] text-sm">{t.name}</div>
                  <div className="text-[11px] uppercase tracking-[0.08em] text-[#6B7280]">{t.role}</div>
                </div>
              </div>

              <div className="border-l-4 border-[#2DD4BF] pl-5 flex-1">
                <p className="font-display text-[17px] text-[#1A2E50] leading-relaxed italic">“{t.text}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
