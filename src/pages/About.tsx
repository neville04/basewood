import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
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

const features = [
  "Flexibility — online and in-person learning options",
  "Globally recognized certifications",
  "Practical, career-oriented training",
  "ACCA CBE digital exam centre",
  "Structured progression from foundational to advanced levels",
  "Expert practitioners, not just academics",
];

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        {/* Hero banner */}
        <div className="relative w-full h-[340px] md:h-[440px] overflow-hidden bg-primary">
          <img src={officeImg} alt="Basewood Institute office on Kanjokya Street, Kampala" className="w-full h-full object-cover object-center opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30" />
          <div className="absolute bottom-10 left-0 right-0">
            <div className="container mx-auto px-4">
              <p className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-3">Know Us Better</p>
              <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">About Us</h1>
              <div className="w-24 h-1 bg-secondary mt-4" />
            </div>
          </div>
        </div>

        {/* Intro */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight leading-tight">
                A Professional Training Institute to Experience
              </h2>
            </div>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Basewood Institute is a global professional organisation offering diverse Educational, Training & Learning solutions catering to students, working Executives & Corporate Organisations. We aim to create a knowledge-based Center of Excellence in Consultancy, Training and Professional Development.
              </p>
              <p>
                We focus on building a platform for professionals and organisations to give them the best in education. We offer various programs &amp; certifications in Marketing &amp; Sales, Accounting and Finance, Transport and Logistics, Procurement and Supply, Customer Experience, ICT, Executive Short Courses, Data Analytics, General Consultancy, Skills Development and Master Classes — with professional courses such as CILT, CIM, CPA, CTA, ACCA &amp; CIPS.
              </p>
            </div>
          </div>
        </section>

        {/* Mission / Vision */}
        <section className="bg-slate-50 py-20 border-y">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-12 border-l-4 border-secondary">
              <Target className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower individuals and organizations with the knowledge, skills and expertise through comprehensive training programs, research and top-notch Consultancy services.
              </p>
            </div>
            <div className="bg-white p-12 border-l-4 border-accent">
              <Eye className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-black uppercase text-primary mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the foremost and most trusted institution for training, research and consultancy globally.
              </p>
            </div>
          </div>
        </section>

        {/* Why Basewood */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">What Sets Us Apart</p>
              <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-tight">
                Why Basewood?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-200">
              {features.map((f) => (
                <div key={f} className="border-r border-b border-slate-200 p-8 hover:bg-slate-50 transition-colors">
                  <span className="text-secondary font-black text-2xl block mb-3">✔</span>
                  <p className="text-slate-700 font-bold leading-snug">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">Core Values</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-12">
              Our Values
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {values.map((v) => (
                <div key={v.label} className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 hover:bg-secondary hover:text-primary transition-all">
                  <v.icon className="w-4 h-4" />
                  <span className="text-sm font-black uppercase tracking-widest">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors / Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4 space-y-16">
            <div>
              <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3 text-center">Marketing Summit</p>
              <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight text-center mb-8">Our Official Sponsors</h3>
              <img src={marketingSummitImg} alt="Our official Marketing Summit Sponsors" className="w-full max-w-[900px] mx-auto" />
            </div>
            <div>
              <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3 text-center">Strategic Alliances</p>
              <h3 className="text-2xl md:text-3xl font-black text-primary uppercase tracking-tight text-center mb-8">Our Strategic Partners</h3>
              <img src={strategicPartnersImg} alt="Our Strategic Partners" className="w-full max-w-[900px] mx-auto" />
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ChatBot />
    </>
  );
};

export default About;
