import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Team from "@/components/Team";
import Consultants from "@/components/Consultants";
import AlumniTable from "@/components/AlumniTable";

const OurTeam = () => (
  <>
    <Navbar />
    <div className="bg-white">
      {/* Institutional breadcrumb header */}
      <div className="bg-primary py-12 text-white border-b-4 border-secondary">
        <div className="container mx-auto px-4">
          <p className="text-secondary font-black uppercase tracking-widest text-xs mb-3">Our People</p>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">Our Team</h1>
          <div className="flex items-center gap-2 text-sm font-bold text-secondary mt-3">
            <span>HOME</span><span>/</span><span>OUR TEAM</span>
          </div>
        </div>
      </div>

      <Team />
      <Consultants />
      <AlumniTable />
    </div>
    <Footer />
    <ChatBot />
  </>
);

export default OurTeam;
