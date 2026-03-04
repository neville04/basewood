import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const programs = [
  {
    abbr: "ACCA",
    full: "Association of Chartered Certified Accountants",
    tag: "Approved Learning Partner",
    href: "/enroll",
  },
  {
    abbr: "CPA Uganda",
    full: "Institute of Certified Public Accountants of Uganda",
    tag: "Recognised Tuition Provider",
    href: "/enroll",
  },
  {
    abbr: "CILT",
    full: "Chartered Institute of Logistics & Transport",
    tag: "Accredited Study Centre",
    href: "/enroll",
  },
  {
    abbr: "CIM",
    full: "Chartered Institute of Marketing",
    tag: "UK Accredited",
    href: "/enroll",
  },
  {
    abbr: "CIPS",
    full: "Chartered Institute of Procurement & Supply",
    tag: "Levels 4 – 6",
    href: "/enroll",
  },
  {
    abbr: "FRM",
    full: "Financial Risk Manager — GARP",
    tag: "Professional Certification",
    href: "/enroll",
  },
];

const shortCourses = [
  { cat: "Finance", name: "IFRS — Financial Instruments" },
  { cat: "Finance", name: "IPSAS — Public Sector Accounting" },
  { cat: "Finance", name: "Finance for Non-Finance Managers" },
  { cat: "Finance", name: "Internal Control Systems" },
  { cat: "Digital", name: "AI Powered Marketing" },
  { cat: "Digital", name: "Social Media Marketing & Management" },
  { cat: "Digital", name: "Search Engine Optimization" },
  { cat: "Digital", name: "Mastering Digital Customer Experience" },
  { cat: "Marketing", name: "Strategic Brand Management" },
  { cat: "Marketing", name: "Campaign Planning & Execution" },
  { cat: "Supply Chain", name: "Sustainability & Circular Economy" },
  { cat: "Sales", name: "Sales Leadership & Team Management" },
];

const ProgramsPage = () => {
  return (
    <>
      <Navbar />

      {/* Page header — navy band */}
      <div className="bg-navy pt-[100px] pb-10">
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <p className="text-[11px] uppercase tracking-[0.16em] text-teal font-semibold mb-2">Basewood Institute</p>
          <h1 className="font-display text-[clamp(28px,3vw,42px)] font-bold text-white leading-tight">
            Professional Certification Programs
          </h1>
          <p className="text-white/60 text-[14px] mt-2">
            Internationally recognised qualifications — designed for working professionals.
          </p>
        </div>
      </div>

      {/* Programs grid */}
      <section className="bg-background py-14 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border">
            {programs.map((p) => (
              <a
                key={p.abbr}
                href={p.href}
                className="border-b border-r border-border bg-background hover:bg-secondary transition-colors p-8 flex flex-col items-center text-center no-underline group"
              >
                {/* Abbr as display */}
                <div className="font-display text-[clamp(28px,4vw,40px)] font-bold text-navy mb-3 group-hover:text-teal-dark transition-colors">
                  {p.abbr}
                </div>
                <div className="text-[13px] text-foreground font-medium leading-snug mb-3">
                  {p.full}
                </div>
                <div className="mt-auto">
                  <span className="inline-block text-[10px] uppercase tracking-[0.1em] font-semibold text-teal-dark border border-teal-dark/40 px-2.5 py-1">
                    {p.tag}
                  </span>
                </div>
                <div className="mt-4 text-[12px] font-bold uppercase tracking-[0.08em] text-navy/40 group-hover:text-navy transition-colors">
                  View Program →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Short Courses */}
      <section className="bg-secondary py-14 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-[7%]">
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal-dark font-semibold mb-1">Executive & Short Programs</p>
            <h2 className="font-display text-[clamp(22px,2.5vw,32px)] font-bold text-navy">Short Courses</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border bg-background">
            {shortCourses.map((sc) => (
              <div key={sc.name} className="border-b border-r border-border p-5 hover:bg-secondary transition-colors">
                <div className="text-[10px] font-bold text-teal-dark uppercase tracking-[0.1em] mb-1">{sc.cat}</div>
                <div className="text-[14px] font-medium text-navy leading-snug">{sc.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14">
        <div className="max-w-[1200px] mx-auto px-[7%] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-teal font-semibold mb-1">Not sure where to start?</p>
            <h3 className="font-display text-[clamp(20px,2.2vw,30px)] font-bold text-white">
              Speak with an Enrollment Advisor
            </h3>
            <p className="text-white/60 text-sm mt-1">We'll match you to the right program based on your career goals.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="/enroll" className="px-6 py-3 bg-white text-navy font-bold text-sm uppercase tracking-[0.06em] no-underline hover:bg-teal hover:text-white transition-colors">
              Enroll Now
            </a>
            <a href="https://wa.me/256773099672" className="px-6 py-3 border-2 border-white/40 text-white font-bold text-sm uppercase tracking-[0.06em] no-underline hover:border-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </>
  );
};

export default ProgramsPage;
