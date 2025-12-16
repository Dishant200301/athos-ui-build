import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/inquiry/InquiryForm";
import FooterCTA from "@/components/FooterCTA";

const Inquiry = () => {
  return (
    <div className="min-h-screen bg-background">
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
