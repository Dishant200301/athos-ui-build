import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import MissionVision from "@/components/about/MissionVision";
import FacilitiesSection from "@/components/about/FacilitiesSection";
import AboutCertifications from "@/components/about/AboutCertifications";
import RDSection from "@/components/about/RDSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Navbar />
      <main>
        <AboutHero />
        <AboutContent />
        <MissionVision />
        <FacilitiesSection />
        <AboutCertifications />
        <RDSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
