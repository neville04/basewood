import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import Team from "@/components/Team";
import AlumniTable from "@/components/AlumniTable";
import Consultants from "@/components/Consultants";

const OurTeam = () => (
  <>
    <Navbar />
    <div className="pt-[68px] bg-black min-h-screen">
      <Team />
      <Consultants />
      <AlumniTable />
    </div>
    <Footer />
    <ChatBot />
  </>
);

export default OurTeam;
