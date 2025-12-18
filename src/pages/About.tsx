import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import MissionVision from "@/components/about/MissionVision";
import FacilitiesSection from "@/components/about/FacilitiesSection";
import RDSection from "@/components/about/RDSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import AboutCertifications from "@/components/about/AboutCertifications";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Helmet>
        <title>About Us - Athos Collagen | Leading Fish Collagen Manufacturer</title>
        <meta name="description" content="Learn about Athos Collagen Pvt. Ltd., India's leading manufacturer of premium Fish Collagen Peptide and Fish Gelatin. Our mission, vision, facilities, and certifications." />
      </Helmet>
      <TopHeader />
      <Navbar />

      <main className="flex-1">
        <div className="max-w-[1290px] mx-auto px-4 xl:px-0 md:py-8">
          <AboutHero />
        </div>
        <AboutContent />
        <MissionVision />
        <FacilitiesSection />
        <AboutCertifications />
        <RDSection />
      </main>

      <FooterCTA />
      <Footer />
    </div>
  );
};

export default About;
