import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { useReveal } from "@/hooks/useReveal";
import { supabase } from "@/lib/supabase";

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
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const program = data.get("program") as string;
    const message = data.get("message") as string;

    const logoUrl = typeof window !== "undefined" ? `${window.location.origin}/email-logo.png` : "/email-logo.png";

    const formPayload = new FormData();
    formPayload.append("_subject", `Enrollment Request: ${program}`);
    formPayload.append("_template", "table");
    formPayload.append(
      "Basewood",
      `<div style="text-align:center;">
        <img src="${logoUrl}" alt="Basewood Logo" style="height:52px;margin-bottom:6px;" />
        <div style="font-weight:600;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#0d1b2a;">Basewood Institute Enrollment</div>
      </div>`
    );
    formPayload.append("Applicant Name", name);
    formPayload.append("Email Address", email);
    formPayload.append("Phone Number", phone);
    formPayload.append("Program Interest", program);
    formPayload.append("Additional Message", message?.trim() || "(No additional message provided)");
    formPayload.append("Submitted On", new Date().toLocaleString());

    try {
      // Save to Supabase
      const { error: dbError } = await supabase.from("enrollments").insert([{
        name,
        email,
        phone,
        program,
        message: message?.trim() || null,
      }]);

      if (dbError) throw dbError;

      // Also send email via FormSubmit (fire-and-forget, non-blocking)
      fetch("https://formsubmit.co/ajax/elijahmukiibi18@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formPayload,
      }).catch(() => {});

      form.reset();
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("We couldn't send your request. Please try again or email info@basewoodconsult.ac.ug.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="pt-[120px] pb-[80px] min-h-screen bg-cream">
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
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">Request Received!</h2>
              <p className="text-muted-foreground text-sm">
                Thank you for contacting Basewood Institute. Our enrollment advisors will reach out to the email you provided within one business day.
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-2.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm">
                Submit Another
              </button>
              <p className="text-xs text-muted-foreground mt-4">
                Need immediate help? Email <a href="mailto:info@basewoodconsult.ac.ug" className="text-accent font-medium">info@basewoodconsult.ac.ug</a> or call <a href="tel:+256773099672" className="text-accent font-medium">+256 773 099 672</a>.
              </p>
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
                {sending ? "Sending..." : "Submit Enrollment →"}
              </button>

              {error && (
                <div className="text-center text-xs text-red-600 bg-red-50 border border-red-100 rounded-md py-2 px-3">
                  {error}
                </div>
              )}

              <p className="text-center text-xs text-muted-foreground">
                Or contact us directly: <a href="tel:+256773099672" className="text-accent font-medium">+256 773 099 672</a> · <a href="https://wa.me/256773099672" className="text-accent font-medium">WhatsApp</a>
              </p>
            </form>
          )}
        </div>
      </section>
      <Footer />
      <ChatBot />
    </>
  );
};

export default Enroll;
