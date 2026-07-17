import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Maintenance = () => {
  useEffect(() => {
    console.warn("Website is currently in Maintenance Mode due to new product launches.");
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between font-sans bg-gradient-to-br from-white via-[#EDF5F8] to-[#D5E6EE] relative overflow-hidden">
      {/* Decorative background elements for premium feel */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

      <Helmet>
        <title>Under Maintenance | Athos Collagen</title>
        <meta name="description" content="Athos Collagen is currently undergoing scheduled maintenance for exciting new product launches. We will be back online shortly." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* Navbar */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 sticky top-0">
        <div className="max-w-[1290px] mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.webp" alt="Athos Collagen" className="h-[40px] md:h-[50px] w-auto" />
          </Link>
          <Link to="/inquiry">
            <Button className="btn-primary rounded-[6px_0px] text-sm px-6 py-2.5">
              Inquiry
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center relative z-10">
          {/* Logo container */}
          {/* <div className="mb-10 flex justify-center animate-fade-in">
            <img 
              src="/images/logo.webp" 
              alt="Athos Collagen Pvt. Ltd." 
              className="h-20 md:h-24 w-auto transition-transform duration-300"
            />
          </div> */}

          {/* Glowing launcher graphic */}
          <div className="mb-8 inline-flex items-center justify-center p-6 rounded-full bg-primary/10 text-primary relative">
            <div className="absolute inset-0 rounded-full bg-primary/5 opacity-75"></div>
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

    
    </div>
  );
};

export default Maintenance;

