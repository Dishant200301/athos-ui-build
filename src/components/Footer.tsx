import { Mail, Youtube, Instagram, Facebook, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const usefulLinks = [
  { label: "About Us", href: "/about" },
  { label: "Fish Collagen Peptide", href: "/fish-collagen-peptide" },
  { label: "Fish Gelatin", href: "/fish-gelatin" },
  { label: "Contact Us", href: "/contact" },
];

const Footer = () => {
  return (
    <footer id="contact">
      {/* CTA Section with Animated Fish Pattern */}
      <section className="py-12 md:py-16 bg-athos-light relative overflow-hidden">
        {/* Animated Fish Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left fish group - moving right */}
          <div 
            className="absolute inset-0 animate-[swim-right_20s_linear_infinite]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M60 20c-8 0-15 5-20 10 5 5 12 10 20 10 5 0 10-3 15-8l-5-6 5-6c-5-5-10-8-15 0z' fill='%231D7AA3' fill-opacity='0.08'/%3E%3Ccircle cx='65' cy='18' r='2' fill='%231D7AA3' fill-opacity='0.15'/%3E%3C/svg%3E")`,
              backgroundSize: '160px 80px',
            }}
          />
          {/* Right fish group - moving left */}
          <div 
            className="absolute inset-0 animate-[swim-left_25s_linear_infinite]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M20 20c8 0 15 5 20 10-5 5-12 10-20 10-5 0-10-3-15-8l5-6-5-6c5-5 10-8 15 0z' fill='%231D7AA3' fill-opacity='0.06'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 100px',
              backgroundPosition: '50px 20px',
            }}
          />
          {/* Floating bubbles */}
          <div 
            className="absolute inset-0 animate-[float-up_15s_ease-in-out_infinite]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='20' cy='80' r='3' fill='%231D7AA3' fill-opacity='0.1'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%231D7AA3' fill-opacity='0.08'/%3E%3Ccircle cx='85' cy='75' r='4' fill='%231D7AA3' fill-opacity='0.06'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6 animate-fade-in">
            Get in touch for a better connection.
          </h2>
          <Link to="/contact">
            <Button className="btn-primary text-base px-8 py-3 hover-scale">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Animated Wave Separator */}
      <div className="relative h-20 md:h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-[200%] h-full animate-[wave_8s_ease-in-out_infinite]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V60C120 20 240 80 360 60C480 40 600 80 720 60C840 40 960 80 1080 60C1200 40 1320 80 1440 60V120H0Z"
            fill="hsl(var(--secondary))"
          />
          <path
            d="M0 120V70C120 90 240 50 360 70C480 90 600 50 720 70C840 90 960 50 1080 70C1200 90 1320 50 1440 70V120H0Z"
            fill="hsl(var(--secondary))"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Useful Links */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-lg font-bold text-secondary-foreground mb-6">
                Useful Links
              </h3>
              <ul className="space-y-4">
                {usefulLinks.map((link, index) => (
                  <li key={link.label} style={{ animationDelay: `${0.2 + index * 0.1}s` }} className="animate-fade-in">
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-secondary-foreground/90 hover:text-secondary-foreground transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-secondary-foreground after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-lg font-bold text-secondary-foreground mb-6">
                Get In Touch
              </h3>
              
              <a
                href="mailto:inquiry@athoscollagen.com"
                className="group flex items-center gap-3 text-secondary-foreground/90 hover:text-secondary-foreground transition-all duration-300 mb-6"
              >
                <Mail className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-secondary-foreground after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  inquiry@athoscollagen.com
                </span>
              </a>

              <div>
                <p className="text-secondary-foreground/90 mb-4">Follow Us:</p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#FF0000] hover:scale-110 group"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-secondary-foreground transition-colors duration-300 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:scale-110 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-secondary-foreground transition-colors duration-300 group-hover:text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[#1877F2] hover:scale-110 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-secondary-foreground transition-colors duration-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Factory Address */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-lg font-bold text-secondary-foreground mb-6">
                Factory Address
              </h3>
              <p className="text-secondary-foreground/90 leading-[27px]">
                Plot No. B-19, Gujarat Agro Infrastructure Mega Food Park, Village Shah & Vasravi,
                Tal. Mangrol, Dist. Surat-394410, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section className="h-[43px] bg-athos-footer flex items-center justify-center">
        <p className="text-sm text-secondary-foreground/80">
          © 2024 Athos Collagen Pvt. Ltd. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
