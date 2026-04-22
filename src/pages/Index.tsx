import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersCarousel from "@/components/PartnersCarousel";
import WhatsNew from "@/components/WhatsNew";
import Programs from "@/components/Programs";
import FullCircleApproach from "@/components/FullCircleApproach";
import StatsSection from "@/components/StatsSection";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => (
  <>
    <Navbar />
    <Hero />
    <PartnersCarousel />
    <Programs />
    <FullCircleApproach />
    <Certifications />
    <StatsSection />
    <WhatsNew />
    <Testimonials />
    <FinalCTA />
    <Footer />
    <ChatBot />
  </>
);

export default Index;
