import { useReveal } from "@/hooks/useReveal";
import { Target, Eye, Star, Users, Lightbulb, Heart } from "lucide-react";

const values = [
  { icon: Star, label: "Excellence" },
  { icon: Heart, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: Users, label: "Collaboration" },
  { icon: Target, label: "Client-Centric Approach" },
];

const AboutUs = () => {
  const { ref, visible } = useReveal(0.2);

  return (
    <section id="about" className="py-[100px] bg-cream" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-[7%]">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent mb-2.5">About Us</div>
          <h2 className="font-display text-[clamp(32px,3.6vw,50px)] font-semibold text-foreground leading-[1.12] tracking-tight">
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
      </div>
    </section>
  );
};

export default AboutUs;
