import { Mail, Youtube, Instagram, Facebook, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const usefulLinks = [
  { label: "About Us", href: "#about" },
  { label: "Fish Collagen Peptide", href: "#benefits" },
  { label: "Fish Gelatin", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  return (
    <footer id="contact">
      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-athos-light-bg relative overflow-hidden">
        {/* Fish Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 15c-5 0-10 5-15 10 5 5 10 10 15 10s10-5 15-10c-5-5-10-10-15-10z' fill='%231D7AA3' fill-opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            Get in touch for a better connection.
          </h2>
          <Button className="btn-primary text-base px-8 py-3">
            Contact Us
          </Button>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="relative h-16 md:h-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z"
            fill="hsl(var(--secondary))"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-6">
                Useful Links
              </h3>
              <ul className="space-y-4">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-2 text-secondary-foreground/90 hover:text-secondary-foreground transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-6">
                Get In Touch
              </h3>
              
              <a
                href="mailto:inquiry@athoscollagen.com"
                className="flex items-center gap-3 text-secondary-foreground/90 hover:text-secondary-foreground transition-colors mb-6"
              >
                <Mail className="w-5 h-5" />
                inquiry@athoscollagen.com
              </a>

              <div>
                <p className="text-secondary-foreground/90 mb-4">Follow Us:</p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-5 h-5 text-secondary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5 text-secondary-foreground" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5 text-secondary-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Factory Address */}
            <div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-6">
                Factory Address
              </h3>
              <p className="text-secondary-foreground/90 leading-[27px]">
                Athos Collagen Pvt. Ltd.<br />
                Survey No. 123, Industrial Area,<br />
                GIDC Phase II, Veraval - 362265,<br />
                Gujarat, India
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
