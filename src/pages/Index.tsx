import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import UniquenessSection from "@/components/UniquenessSection";
import BenefitsSection from "@/components/BenefitsSection";
import ExportSection from "@/components/ExportSection";
import CertificationsSection from "@/components/CertificationsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopHeader />
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <UniquenessSection />
        <BenefitsSection />
        <ExportSection />
        <CertificationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
