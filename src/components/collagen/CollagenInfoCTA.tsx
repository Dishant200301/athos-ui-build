import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CollagenInfoCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-custom text-center">
        <h1 className="text-xl md:text-[27.2px] font-bold text-[#257FA6] leading-[160%] max-w-4xl mx-auto mb-8">
          Athos Collagen Pvt. Ltd. is leading Manufacturer and Exporter of Fish Collagen Peptide from India.
        </h1>
        
        <p className="text-lg md:text-2xl font-semibold text-primary leading-[160%] max-w-2xl mx-auto mb-10">
          Fish Collagen Peptide is also known as Marine Collagen or Hydrolyzed Collagen Peptide.
        </p>
        
        <Link to="/inquiry">
          <Button className="btn-primary">
            Inquiry
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CollagenInfoCTA;
