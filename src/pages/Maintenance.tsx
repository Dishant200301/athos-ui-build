import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterCTA from "@/components/FooterCTA";

const Maintenance = () => {
  useEffect(() => {
    console.warn("Website is currently in Maintenance Mode due to new product launches.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-hidden">
      <Helmet>
        <title>Under Maintenance | Athos Collagen</title>
        <meta name="description" content="Athos Collagen is currently undergoing scheduled maintenance for exciting new product launches. We will be back online shortly." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <TopHeader />
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 bg-accent/30">
        <div className="container-custom text-center py-16">
          {/* Logo container */}
          <div className="mb-10 flex justify-center animate-fade-in">
            <img 
              src="/images/athos-logo-full-form.webp" 
              alt="Athos Collagen Pvt. Ltd." 
              className="h-20 md:h-24 w-auto drop-shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Glowing launcher graphic */}
          <div className="mb-8 inline-flex items-center justify-center p-6 rounded-full bg-primary/10 text-primary relative animate-pulse">
            <div className="absolute inset-0 rounded-full bg-primary/5 animate-ping opacity-75"></div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-12 h-12"
            >
              <path d="m2 22 1-1c1.4-1.4 2.4-3.2 3-5.2l.5-1.8L5 12.5l-.8-.8c-.8-.8-.8-2 0-2.8L8.7 4.4c.8-.8 2-.8 2.8 0l.8.8 1.5-1.5 1.8.5c2 .6 3.8 1.6 5.2 3l1 1-6.5 6.5-1.5-1.5-1.8-.5c-2-.6-3.8-1.6-5.2-3l-1-1 6.5-6.5" />
              <path d="m19 11-8 8" />
              <path d="m16 8-8 8" />
              <circle cx="19" cy="5" r="2" />
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Under Scheduled Maintenance
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Launching New Products Soon!
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-lg mx-auto text-base md:text-lg leading-relaxed mb-4">
            We are currently updating our website to introduce our brand new range of premium quality Fish Collagen Peptide and Fish Gelatin products. We apologize for any inconvenience caused and will be back online very shortly!
          </p>
        </div>
      </main>

      <FooterCTA />
      <Footer />
    </div>
  );
};

export default Maintenance;
