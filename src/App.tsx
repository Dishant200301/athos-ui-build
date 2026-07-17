import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppFloating from "./components/WhatsAppFloating";
import Index from "./pages/Index";
import About from "./pages/About";
import FishCollagenPeptide from "./pages/FishCollagenPeptide";
import FishGelatin from "./pages/FishGelatin";
import ApplicationsFishCollagenPeptide from "./pages/ApplicationsFishCollagenPeptide";
import ApplicationsFishGelatin from "./pages/ApplicationsFishGelatin";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";
import ProductCategory from "./pages/ProductCategory";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";
import { MAINTENANCE_MODE } from "./config/maintenance";

const queryClient = new QueryClient();

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <WhatsAppFloating />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route 
                path="/fish-collagen-peptide" 
                element={MAINTENANCE_MODE ? <Maintenance /> : <FishCollagenPeptide />} 
              />
              <Route 
                path="/fish-gelatin" 
                element={MAINTENANCE_MODE ? <Maintenance /> : <FishGelatin />} 
              />
              <Route 
                path="/applications/fish-collagen-peptide" 
                element={MAINTENANCE_MODE ? <Maintenance /> : <ApplicationsFishCollagenPeptide />} 
              />
              <Route 
                path="/applications/fish-gelatin" 
                element={MAINTENANCE_MODE ? <Maintenance /> : <ApplicationsFishGelatin />} 
              />
              <Route path="/products/:categorySlug" element={<ProductCategory />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
