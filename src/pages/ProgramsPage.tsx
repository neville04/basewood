import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Programs from "@/components/Programs";

const ProgramsPage = () => (
  <>
    <Navbar />
    <Programs />

    <section className="bg-primary py-16 text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="text-secondary font-black uppercase tracking-widest text-xs mb-2">Not sure where to start?</p>
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
            Speak with an Enrollment Advisor
          </h3>
          <p className="text-white/60 text-sm mt-2 max-w-md">
            We'll match you to the right program based on your career goals.
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <Link to="/enroll" className="px-8 py-4 bg-secondary text-primary font-black text-xs uppercase tracking-widest no-underline hover:bg-white transition-colors">
            Enroll Now
          </Link>
          <a href="https://wa.me/256773099672" className="px-8 py-4 border-2 border-white/40 text-white font-black text-xs uppercase tracking-widest no-underline hover:border-white hover:bg-white/5 transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>

    <Footer />
    <ChatBot />
  </>
);

export default ProgramsPage;
