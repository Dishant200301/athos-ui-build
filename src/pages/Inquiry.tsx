import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/inquiry/InquiryForm";
import FooterCTA from "@/components/FooterCTA";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Helmet>
        <title>Product Inquiry - Athos Collagen | Request Information</title>
        <meta name="description" content="Submit your inquiry for Athos Fish Collagen Peptide and Fish Gelatin products. Get detailed information and pricing for your business needs." />
      </Helmet>
      <TopHeader />
      <Navbar />
      <main>
        <InquiryForm />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Inquiry;
