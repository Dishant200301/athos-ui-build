import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CollagenInfoCTA from "@/components/collagen/CollagenInfoCTA";
import CollagenUniqueness from "@/components/collagen/CollagenUniqueness";
import AminoAcidComposition from "@/components/collagen/AminoAcidComposition";
import CollagenBenefits from "@/components/collagen/CollagenBenefits";
import CollagenApplications from "@/components/collagen/CollagenApplications";
import FooterCTA from "@/components/FooterCTA";

const FishCollagenPeptide = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Navbar />
      <main>
        <CollagenInfoCTA />
        <CollagenUniqueness />
        <AminoAcidComposition />
        <CollagenBenefits />
        <CollagenApplications />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default FishCollagenPeptide;
