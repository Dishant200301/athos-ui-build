import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import UniquenessSection from "@/components/UniquenessSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExportSection from "@/components/ExportSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Manufacturer and Exporter of Fish Collagen and Fish Gelatin</title>
        <meta name="description" content="Leading manufacturer and exporter of premium quality Fish Collagen Peptide and Fish Gelatin. World-class marine collagen products for health and wellness globally." />
      </Helmet>
      <TopHeader />
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <UniquenessSection />
        <BenefitsSection />
        <ExportSection />
        {/* <CertificationsSection /> */}
      </main>
      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Index;
