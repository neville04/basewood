import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Team from "@/components/Team";
import AlumniTable from "@/components/AlumniTable";
import Consultants from "@/components/Consultants";

const OurTeam = () => (
  <>
    <Navbar />
    <div className="pt-[68px]">
      <Team />
      <Consultants />
      <AlumniTable />
    </div>
    <Footer />
    <FloatingWhatsApp />
  </>
);

export default OurTeam;
