import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { useReveal } from "@/hooks/useReveal";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Contact = () => {
  const { ref, visible } = useReveal(0.2);

  return (
    <>
      <Navbar />
      <section className="pt-[120px] pb-[100px] min-h-screen bg-cream" ref={ref}>
        <div className="max-w-[900px] mx-auto px-[7%]">
          <div className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2.5">Contact Us</div>
            <h1 className="font-display text-[clamp(32px,3.6vw,48px)] font-semibold text-foreground leading-[1.12] tracking-tight">
              Get in <em className="italic text-accent-foreground">Touch</em>
            </h1>
            <p className="text-muted-foreground mt-3 text-[15px] font-light max-w-[500px] mx-auto">
              Reach out to us for enrollment inquiries, corporate training, or any questions about our programs.
            </p>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            {/* Contact Info */}
            <div className="bg-background border border-border rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-xl font-semibold text-foreground">Basewood Consult Uganda Limited</h3>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">Plot 106, Kanjokya Street, Kampala, Uganda</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground">+256 744 488 316</p>
                  <p className="text-sm text-muted-foreground">+256 769 013 080</p>
                  <p className="text-sm text-muted-foreground">+256 773 099 672</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a href="mailto:info@basewoodconsult.ac.ug" className="text-sm text-accent hover:underline">info@basewoodconsult.ac.ug</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-foreground">Website</p>
                  <a href="https://www.basewoodconsult.ac.ug" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">www.basewoodconsult.ac.ug</a>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <div className="bg-[#1E3A5F] text-white p-8 rounded-2xl text-center shadow-[0_18px_38px_rgba(15,23,42,0.25)]">
                <h3 className="font-display text-xl font-semibold text-white mb-2">Enroll Now</h3>
                <p className="text-sm text-[#CBD5E1] mb-6">
                  Start your professional certification journey today
                </p>
                <a
                  href="/enroll"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#2DD4BF] text-white font-semibold text-[13px] uppercase tracking-[0.08em] rounded-full no-underline shadow-[0_10px_24px_rgba(7,44,90,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Begin Application
                </a>
              </div>

              <a
                href="https://wa.me/256773099672"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-background border border-border p-8 text-center no-underline hover:border-navy transition-colors"
              >
                <h3 className="font-display text-xl font-semibold text-navy mb-2">WhatsApp Us</h3>
                <p className="text-sm text-muted-foreground">Chat with our admissions team directly</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </>
  );
};

export default Contact;
