import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Team from "@/components/Team";
import AlumniTable from "@/components/AlumniTable";

const OurTeam = () => (
  <>
    <Navbar />
    <div className="pt-[68px]">
      <Team />
      <AlumniTable />
    </div>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default OurTeam;
