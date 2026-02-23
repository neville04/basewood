import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import AboutUs from "@/components/AboutUs";
import Programs from "@/components/Programs";
import WhyBasewood from "@/components/WhyBasewood";
import StatsSection from "@/components/StatsSection";
import Certifications from "@/components/Certifications";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import AlumniTable from "@/components/AlumniTable";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <AboutUs />
      <Programs />
      <WhyBasewood />
      <StatsSection />
      <Certifications />
      <Team />
      <Testimonials />
      <AlumniTable />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
