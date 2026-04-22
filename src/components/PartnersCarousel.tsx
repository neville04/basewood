import { motion } from "motion/react";
import { PARTNERS, PARTNER_LOGOS } from "@/constants";

const PartnersCarousel = () => {
  const scrollingPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  const getPartnerLogo = (partner: string) => {
    if (PARTNER_LOGOS[partner]) return PARTNER_LOGOS[partner];
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(partner)}&background=f0f0f0&color=003366&bold=true&size=128`;
  };

  return (
    <section className="bg-white border-y py-12 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-8">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-primary/20" />
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
            Trusted by Industry Leaders &amp; Institutions
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {scrollingPartners.map((partner, index) => (
            <div key={`${partner}-${index}`} className="flex flex-col items-center flex-shrink-0 group">
              <div className="h-16 w-32 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 transform group-hover:scale-110">
                <img
                  src={getPartnerLogo(partner)}
                  alt={partner}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(partner)}&background=f0f0f0&color=003366&bold=true&size=128`;
                  }}
                />
              </div>
              <span className="mt-3 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
