import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <Navbar />
      <main>
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
