import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useReveal } from "@/hooks/useReveal";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

const Contact = () => {
  const { ref, visible } = useReveal(0.2);

  return (
    <>
      <Navbar />
      <section className="pt-[120px] pb-[100px] min-h-screen" style={{
        background: "linear-gradient(160deg, #e0f2fe 0%, #f0f9ff 18%, #ffffff 38%, #bae6fd 55%, #f8fafc 72%, #e0f2fe 88%, #ffffff 100%)",
        backgroundSize: "400% 400%",
        animation: "awsShift 10s ease-in-out infinite alternate",
      }} ref={ref}>
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
              <a
                href="/enroll"
                className="block bg-accent text-accent-foreground rounded-2xl p-8 text-center no-underline hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-display text-xl font-semibold mb-2">Enroll Now</h3>
                <p className="text-sm opacity-80">Start your professional certification journey today</p>
              </a>

              <a
                href="https://wa.me/256773099672"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-background border border-border rounded-2xl p-8 text-center no-underline hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">WhatsApp Us</h3>
                <p className="text-sm text-muted-foreground">Chat with our admissions team directly</p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Contact;
