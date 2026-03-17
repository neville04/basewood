import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { useReveal } from "@/hooks/useReveal";
import { Target, Eye, Star, Users, Lightbulb, Heart } from "lucide-react";
import officeImg from "@/assets/office-location.png";
import marketingSummitImg from "@/assets/sponsors/marketing-summit-sponsors.png";
import strategicPartnersImg from "@/assets/sponsors/strategic-partners-new.png";

const values = [
  { icon: Star, label: "Excellence" },
  { icon: Heart, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Users, label: "Collaboration" },
  { icon: Target, label: "Client-Centric Approach" },
];

const About = () => {
  const { ref, visible } = useReveal(0.2);

  return (
    <>
      <Navbar />
      {/* Hero banner with office image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img src={officeImg} alt="Basewood Institute office on Kanjokya Street, Kampala" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/40 to-transparent" />
        <div className="absolute bottom-8 left-[7%] z-[1]">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-teal mb-2">Know Us Better</div>
          <h1 className="font-display text-[clamp(32px,3.6vw,50px)] font-bold text-primary-foreground leading-[1.12] tracking-tight">About Us</h1>
        </div>
      </div>
      <section className="pt-16 pb-[100px] bg-cream" ref={ref}>
        <div className="max-w-[1200px] mx-auto px-[7%]">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h2 className="font-display text-[clamp(28px,3vw,42px)] font-semibold text-foreground leading-[1.12] tracking-tight">
              A Professional Training Institute<br />to <em className="italic text-accent-foreground">Experience</em>
            </h2>
          </div>

          {/* Summary */}
          <div className={`max-w-[800px] mx-auto text-center mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <p className="text-[15px] text-muted-foreground leading-[1.8] font-light">
              Basewood Institute is a global professional organisation offering diverse Educational, Training & Learning solutions catering to students, working Executives & Corporate Organisations. We aim to create a knowledge-based Center of Excellence in Consultancy, Training and Professional Development.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.8] font-light mt-4">
              We focus on building a platform for professionals and organisations to give them the best in education. We offer various programs & certifications in Marketing & Sales, Accounting and Finance, Transport and Logistics, Procurement and Supply, Customer Experience, ICT, Executive Short Courses, Data Analytics, General Consultancy, Skills Development and Master Classes — with professional courses such as CILT, CIM, CPA, CTA, ACCA & CIPS.
            </p>
          </div>

          {/* Mission & Vision cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className={`bg-background border border-border rounded-2xl p-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Our Mission</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed font-light">
                To empower individuals and organizations with the knowledge, skills and expertise through comprehensive training programs, research and top-notch Consultancy services.
              </p>
            </div>
            <div className={`bg-background border border-border rounded-2xl p-10 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Our Vision</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed font-light">
                To be the foremost and most trusted institution for training, research and consultancy globally.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className={`mb-16 transition-all duration-700 delay-[350ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">Why Basewood?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Flexibility — online and in-person learning options",
                "Globally recognized certifications",
                "Practical, career-oriented training",
                "ACCA CBE digital exam centre",
                "Structured progression from foundational to advanced levels",
                "Expert practitioners, not just academics",
              ].map((f) => (
                <div key={f} className="flex items-start gap-3 bg-background border border-border rounded-xl px-5 py-4">
                  <span className="text-accent mt-0.5">✔</span>
                  <span className="text-sm text-foreground font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className={`transition-all duration-700 delay-[400ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">Our Values</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((v, i) => (
                <div
                  key={v.label}
                  className="flex items-center gap-3 bg-background border border-border rounded-full px-6 py-3 hover:border-accent/40 hover:shadow-md transition-all"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <v.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{v.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Summit Sponsors */}
          <div className={`mt-20 transition-all duration-700 delay-[450ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <img
              src={marketingSummitImg}
              alt="Our official Marketing Summit Sponsors"
              className="w-full max-w-[900px] mx-auto rounded-2xl"
            />
          </div>

          {/* Strategic Partners */}
          <div className={`mt-16 transition-all duration-700 delay-[500ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <img
              src={strategicPartnersImg}
              alt="Our Strategic Partners"
              className="w-full max-w-[900px] mx-auto rounded-2xl"
            />
          </div>
        </div>
      </section>
      <Footer />
      <ChatBot />
    </>
  );
};

export default About;
