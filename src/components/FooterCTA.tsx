import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FooterCTA = () => {
  return (
    <section className="py-16 bg-athos-light relative overflow-hidden">
      {/* Fish pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 15c-5 0-10 3-12 8-1-2-3-3-5-3-4 0-7 3-7 7s3 7 7 7c2 0 4-1 5-3 2 5 7 8 12 8s10-3 12-8c1 2 3 3 5 3 4 0 7-3 7-7s-3-7-7-7c-2 0-4 1-5 3-2-5-7-8-12-8z' fill='%231D7AA3' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />
      <div className="container-custom text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
          Get in touch for a better connection.
        </h2>
        <Link to="/contact">
          <Button className="btn-primary">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FooterCTA;
