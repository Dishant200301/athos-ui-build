import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const GelatinInfoCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container-custom text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-[160%] max-w-4xl mx-auto mb-8">
          World's Best Premium Quality Fish Gelatin
        </h1>
        
        <Link to="/inquiry">
          <Button variant="secondary" className="bg-background text-primary hover:bg-background/90">
            Inquiry
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default GelatinInfoCTA;
