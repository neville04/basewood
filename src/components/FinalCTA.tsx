import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone } from "lucide-react";

const FinalCTA = () => (
  <section className="bg-primary text-white relative overflow-hidden">
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-10 border-b border-white/10 pb-12 mb-12">
        <div>
          <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">Start Today</p>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.95] mb-4">
            Ready to Advance <br />Your Career?
          </h2>
          <p className="text-white/70 max-w-xl leading-relaxed">
            Speak with our enrollment team today. We'll help you choose the right program,
            understand the schedule, and plan your path to certification.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link
            to="/enroll"
            className="px-10 py-5 bg-secondary text-primary font-black text-xs uppercase tracking-widest text-center no-underline hover:bg-white transition-all transform hover:scale-105 shadow-2xl"
          >
            Apply Now
          </Link>
          <a
            href="https://wa.me/256773099672"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 border-2 border-white/40 text-white font-black text-xs uppercase tracking-widest text-center no-underline hover:border-white hover:bg-white/5 transition-colors"
          >
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-white/10">
        <a href="mailto:info@basewoodconsult.ac.ug" className="flex items-start gap-4 p-8 border-r border-b border-white/10 no-underline hover:bg-white/5 transition-colors group">
          <Mail className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-white font-black text-xs uppercase tracking-widest mb-1">Email Us</div>
            <div className="text-white/60 text-sm">info@basewoodconsult.ac.ug</div>
          </div>
        </a>
        <a href="https://wa.me/256773099672" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-8 border-r border-b border-white/10 no-underline hover:bg-white/5 transition-colors group">
          <MessageCircle className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-white font-black text-xs uppercase tracking-widest mb-1">WhatsApp</div>
            <div className="text-white/60 text-sm">+256 773 099 672</div>
          </div>
        </a>
        <a href="tel:+256744488316" className="flex items-start gap-4 p-8 border-r border-b border-white/10 no-underline hover:bg-white/5 transition-colors group">
          <Phone className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform" />
          <div>
            <div className="text-white font-black text-xs uppercase tracking-widest mb-1">Call Us</div>
            <div className="text-white/60 text-sm">+256 744 488 316</div>
          </div>
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
