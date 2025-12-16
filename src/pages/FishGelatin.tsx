import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GelatinInfoCTA from "@/components/gelatin/GelatinInfoCTA";
import GelatinPharmaceutical from "@/components/gelatin/GelatinPharmaceutical";
import GelatinFoodIndustry from "@/components/gelatin/GelatinFoodIndustry";
import GelatinApplications from "@/components/gelatin/GelatinApplications";
import FooterCTA from "@/components/FooterCTA";

const FishGelatin = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Navbar />
      <main>
        <GelatinInfoCTA />
        <GelatinPharmaceutical />
        <GelatinFoodIndustry />
        <GelatinApplications />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FishGelatin;
