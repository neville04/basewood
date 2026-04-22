import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-carousel-1.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[85vh] md:h-screen min-h-[700px] overflow-hidden bg-slate-900 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroBg}
          alt="Basewood Institute — leadership in professional training"
          className="w-full h-full object-cover opacity-80 pointer-events-none"
          data-priority="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow"
          >
            <div className="flex items-center gap-4 mb-10">
              <span className="w-12 h-[1px] bg-secondary" />
              <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">
                Center for Professional Courses
              </span>
            </div>

            <h1 className="text-6xl md:text-[8.5rem] font-black uppercase leading-[0.85] tracking-tighter mb-10 -translate-x-[0.05em] text-white">
              Advance <br />
              <span className="text-white">Your</span> <br />
              Career.
            </h1>

            <div className="max-w-xl">
              <p className="text-lg md:text-2xl text-slate-300 font-bold leading-tight mb-12">
                Uganda's premier institute for
                <span className="text-white"> globally accredited </span>
                professional certifications — CIM, ACCA, CPA, CIPS &amp; CILT.
              </p>

              <div className="flex flex-wrap gap-8 items-center">
                <Link
                  to="/programs"
                  className="px-12 py-5 bg-secondary text-primary font-black uppercase tracking-widest text-xs hover:bg-white transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(242,170,38,0.3)] no-underline inline-flex items-center gap-2"
                >
                  Explore Programmes
                  <ArrowRight className="h-3 w-3" />
                </Link>
                <Link to="/enroll" className="flex items-center gap-4 group no-underline">
                  <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all text-white">
                    <Play className="h-4 w-4 fill-current ml-1" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest border-b border-white/10 pb-1 group-hover:border-white transition-all text-white">
                    Enroll Now
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Vertical statistics */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="hidden xl:flex flex-col gap-12 border-l border-white/10 pl-12 pb-12"
          >
            <div className="space-y-1">
              <div className="text-5xl font-black text-secondary">15+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accredited Programs</div>
            </div>
            <div className="space-y-1">
              <div className="text-5xl font-black text-secondary">1K+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Certified Alumni</div>
            </div>
            <div className="space-y-1">
              <div className="text-5xl font-black text-secondary">25+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">C-Suite Alumni</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 hidden md:block">
        <p className="writing-mode-vertical rotate-180 text-[9px] font-black uppercase tracking-[0.5em] text-white/10 select-none">
          BASEWOOD INSTITUTE • KAMPALA • UGANDA • EAST AFRICA
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-4 hidden md:block">
        <div className="flex items-center gap-4 text-secondary rotate-90 origin-left">
          <span className="text-[10px] font-black uppercase tracking-widest">Scroll</span>
          <div className="w-12 h-[1px] bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
