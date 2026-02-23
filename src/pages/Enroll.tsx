import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useReveal } from "@/hooks/useReveal";

const programOptions = [
  "CIM — Chartered Institute of Marketing",
  "ACCA — Accounting & Finance",
  "CPA Uganda",
  "CIPS — Procurement & Supply",
  "CILT — Logistics & Transport",
  "Short Course — Finance",
  "Short Course — Digital Marketing",
  "Short Course — Conventional Marketing",
  "Short Course — Supply Chain Management",
  "Short Course — Sales & Distribution",
  "Short Course — Regulatory & Compliance",
  "Other",
];

const Enroll = () => {
  const { ref, visible } = useReveal(0.1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const program = data.get("program") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`Enrollment Request: ${program}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:info@basewoodconsult.ac.ug?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <section className="pt-[120px] pb-[80px] min-h-screen" style={{
        background: "linear-gradient(160deg, #86efac 0%, #bbf7d0 15%, #a7f3d0 25%, #6ee7b7 35%, #7dd3fc 50%, #93c5fd 60%, #bae6fd 72%, #e0f2fe 82%, #ffffff 100%)",
        backgroundSize: "400% 400%",
        animation: "awsShift 10s ease-in-out infinite alternate",
      }}>
        <div className="max-w-[700px] mx-auto px-[7%]" ref={ref}>
          <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2.5">Enrollment</div>
            <h1 className="font-display text-[clamp(32px,4vw,48px)] font-semibold text-foreground leading-[1.12] tracking-tight">
              Start Your <em className="italic text-accent-foreground">Journey</em>
            </h1>
            <p className="text-muted-foreground mt-3 text-[15px] font-light">
              Fill in the form below and our team will get back to you with enrollment details.
            </p>
          </div>

          {submitted ? (
            <div className={`bg-background border border-border rounded-2xl p-12 text-center transition-all duration-500 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="text-5xl mb-4">✓</div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Email Client Opened!</h2>
              <p className="text-muted-foreground text-sm">
                Please send the email from your mail app. If it didn't open, you can email us directly at{" "}
                <a href="mailto:info@basewoodconsult.ac.ug" className="text-accent font-medium">info@basewoodconsult.ac.ug</a>
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm">
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={`bg-background border border-border rounded-2xl p-8 md:p-10 space-y-5 shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Full Name *</label>
                  <input name="name" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Email *</label>
                  <input name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Phone Number *</label>
                  <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all" placeholder="+256 7XX XXX XXX" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Program *</label>
                  <select name="program" required className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all">
                    <option value="">Select a program</option>
                    {programOptions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5 uppercase tracking-wide">Additional Message</label>
                <textarea name="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none" placeholder="Tell us about your goals, preferred schedule, etc." />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 bg-accent text-accent-foreground rounded-lg font-bold text-sm shadow-[0_4px_22px_hsl(var(--accent)/0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_36px_hsl(var(--accent)/0.4)] transition-all disabled:opacity-60"
              >
                {sending ? "Opening Email..." : "Submit Enrollment →"}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Or contact us directly: <a href="tel:+256773099672" className="text-accent font-medium">+256 773 099 672</a> · <a href="https://wa.me/256773099672" className="text-accent font-medium">WhatsApp</a>
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Enroll;
