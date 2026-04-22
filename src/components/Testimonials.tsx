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

const Testimonials = () => (
  <section className="py-20 bg-white border-t border-slate-100">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">What Our Alumni Say</p>
        <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
          Alumni Voices
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
        {testimonials.map((t) => (
          <div key={t.name} className="border-r border-b border-slate-200 p-10 bg-white hover:bg-slate-50 transition-colors flex flex-col">
            <div className="text-secondary text-5xl font-black mb-6 leading-none">"</div>
            <p className="text-slate-700 leading-relaxed mb-8 flex-1">{t.text}</p>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="w-12 h-12 overflow-hidden border-2 border-secondary">
                <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-black text-primary uppercase tracking-tight">{t.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-400 font-black">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
