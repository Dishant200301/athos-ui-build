import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* WhatsApp / Call */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-athos-green/10 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-athos-green" />
            </div>
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
              WHATSAPP / CALL
            </h3>
            <a 
              href="tel:+918780321239" 
              className="text-foreground hover:text-primary transition-colors"
            >
              +91 87803 21239
            </a>
          </div>
          
          {/* Email */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-athos-green/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-athos-green" />
            </div>
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
              EMAIL
            </h3>
            <a 
              href="mailto:inquiry@athoscollagen.com" 
              className="text-foreground hover:text-primary transition-colors"
            >
              inquiry@athoscollagen.com
            </a>
          </div>
          
          {/* Factory Address */}
          <div className="flex flex-col items-center md:col-span-3 lg:col-span-1">
            <div className="w-12 h-12 rounded-full bg-athos-green/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-athos-green" />
            </div>
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
              FACTORY ADDRESS
            </h3>
            <p className="text-foreground text-center max-w-md">
              Plot No. B-19, Gujarat Agro Infrastructure Mega Food Park, Village Shah & Vasravi, 
              Tal. Mangrol, Dist. Surat-394410, Gujarat, India
            </p>
          </div>
        </div>
        
        {/* Separator */}
        <div className="mt-12 border-t border-muted-foreground/25" />
      </div>
    </section>
  );
};

export default ContactInfo;
