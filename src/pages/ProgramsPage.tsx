import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { useReveal } from "@/hooks/useReveal";

const ciltCourses = [
  { name: "International Diploma in Logistics & Transport", desc: "Advanced level qualification for logistics and transport leadership roles." },
  { name: "International Certificate in Logistics & Transport", desc: "Foundational training for beginners entering the logistics and transport industry." },
];

const ciltShortTopics = [
  "Sustainable Transport Systems", "Humanitarian Logistics", "Intelligent Transport System",
  "Urban Mass Movement Systems", "Congestion & Traffic Management", "Green Logistics",
  "Risk Management in Logistics", "Leadership and Team Building", "Project & Programme Management",
  "Human Resource Management", "Quality Management & Risk Assessment", "Public-Private Partnerships in Transport",
  "Logistics & Physical Distribution Management", "Disaster Preparedness & Relief in Transport & Logistics",
];

const accaLevels = [
  { name: "Applied Knowledge", desc: "Foundation stage — Business & Technology, Management Accounting, Financial Accounting." },
  { name: "Applied Skills", desc: "Corporate & Business Law, Performance Management, Taxation, Financial Reporting, Audit & Assurance, Financial Management." },
  { name: "Strategic Professional", desc: "Advanced level preparing students for senior strategic roles in accountancy and finance." },
  { name: "CBE Centre", desc: "Basewood operates an ACCA Computer Based Exam (CBE) Centre for digital exams.", highlight: true },
];

const cpaLevels = ["Level I", "Level II", "Level III", "Level IV"];

const ProgramsPage = () => {
  const { ref, visible } = useReveal(0.1);

  return (
    <>
      <Navbar />
      <section className="pt-[120px] pb-[100px] min-h-screen" style={{
        background: "linear-gradient(160deg, #ddd6fe 0%, #ede9fe 20%, #bae6fd 40%, #e0f2fe 60%, #f5f3ff 80%, #ffffff 100%)",
        backgroundSize: "400% 400%",
        animation: "awsShift 10s ease-in-out infinite alternate",
      }} ref={ref}>
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2.5">Our Programs</div>
            <h1 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-foreground leading-[1.12] tracking-tight">
              Professional Courses<br />Built for <em className="italic text-accent-foreground">Careers</em>
            </h1>
            <p className="text-accent-foreground font-semibold mt-2 text-base">Our Highly Praised Courses</p>
            <p className="text-muted-foreground mt-3 text-[15px] font-light max-w-[600px] mx-auto">
              Internationally recognised qualifications — designed for working professionals. Evenings, weekends, blended.
            </p>
          </div>

          {/* CILT Section */}
          <div className={`mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">CILT — Logistics & Transport</h2>
            <p className="text-sm text-muted-foreground mb-6">The Chartered Institute of Logistics and Transport — the world's leading professional body for logistics, transport, and supply chain professionals.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {ciltCourses.map((c) => (
                <div key={c.name} className="bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-xl p-6">
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">{c.name}</h4>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>

            <h4 className="font-semibold text-foreground mb-3">CILT Short Course Topics</h4>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {ciltShortTopics.map((t) => (
                <div key={t} className="text-sm text-foreground bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-lg px-4 py-2.5">{t}</div>
              ))}
            </div>

            <div className="mt-6 bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">Who Can Study CILT?</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>Undergraduates interested in transport & supply chain careers</li>
                <li>Graduates specializing in logistics & operations</li>
                <li>Working professionals seeking international qualifications</li>
                <li>People entering the logistics and transport sector</li>
              </ul>
            </div>
          </div>

          {/* ACCA Section */}
          <div className={`mb-16 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">ACCA — Accounting & Finance</h2>
            <p className="text-sm text-muted-foreground mb-6">Association of Chartered Certified Accountants — a UK-based globally recognized professional accountancy qualification.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {accaLevels.map((l) => (
                <div key={l.name} className={`border-2 rounded-xl p-6 ${l.highlight ? "bg-accent/5 border-accent/40" : "bg-background/80 backdrop-blur-sm border-muted-foreground/20"}`}>
                  <h4 className={`font-display text-lg font-semibold mb-2 ${l.highlight ? "text-accent" : "text-foreground"}`}>{l.name}</h4>
                  <p className="text-sm text-muted-foreground">{l.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-2">ACCA Entry Requirements</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                <li>2 passes in Uganda A-Level (UACE, grades A–E)</li>
                <li>3 passes in Uganda O-Level (UCE, grades A-C), including English & Mathematics</li>
                <li>Or a recognized university degree</li>
              </ul>
            </div>
          </div>

          {/* CPA Section */}
          <div className={`mb-16 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">CPA Uganda</h2>
            <p className="text-sm text-muted-foreground mb-6">Certified Public Accountant — recognized by the Institute of Certified Public Accountants of Uganda (ICPAU). CPA certification is required by law to practice professional accountancy in Uganda.</p>
            <div className="flex flex-wrap gap-3">
              {cpaLevels.map((l) => (
                <div key={l} className="bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-xl px-6 py-4 font-semibold text-foreground">{l}</div>
              ))}
            </div>
          </div>

          {/* FRM Section */}
          <div className={`mb-16 transition-all duration-700 delay-[350ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="font-display text-3xl font-semibold text-foreground mb-2">FRM — Financial Risk Manager</h2>
            <p className="text-sm text-muted-foreground mb-6">A globally recognized risk management qualification administered by the Global Association of Risk Professionals (GARP).</p>
          </div>

          {/* CIM & CIPS */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <div className="bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-xl p-6">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">CIM — Marketing</h2>
              <p className="text-sm text-muted-foreground mb-3">Chartered Institute of Marketing — UK Accredited</p>
              <div className="flex flex-wrap gap-2">
                {["Diploma", "Postgraduate", "Blended"].map((p) => (
                  <span key={p} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">{p}</span>
                ))}
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-xl p-6">
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">CIPS — Procurement & Supply</h2>
              <p className="text-sm text-muted-foreground mb-3">Chartered Institute of Procurement & Supply</p>
              <div className="flex flex-wrap gap-2">
                {["Level 4", "Level 5", "Level 6"].map((p) => (
                  <span key={p} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">{p}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`bg-background/80 backdrop-blur-sm border-2 border-muted-foreground/20 rounded-2xl p-10 text-center transition-all duration-700 delay-[450ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Ready to Start?</h3>
            <p className="text-sm text-muted-foreground mb-6">Speak with an advisor or enroll directly.</p>
            <div className="flex justify-center gap-3">
              <a href="/enroll" className="px-7 py-3 bg-accent text-accent-foreground rounded-lg font-bold text-sm no-underline hover:opacity-90 transition-opacity">Enroll Now →</a>
              <a href="https://wa.me/256773099672" className="px-7 py-3 bg-transparent border-2 border-muted-foreground/20 text-foreground rounded-lg font-medium text-sm no-underline hover:border-accent transition-colors">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </>
  );
};

export default ProgramsPage;
