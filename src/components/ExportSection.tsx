const ExportSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-athos-light-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-6">
              Exporting Worldwide
            </h2>
            
            <p className="text-base text-athos-text leading-[27px] max-w-[636px]">
              Athos Collagen Pvt. Ltd. proudly exports premium Fish Collagen Peptide and Fish Gelatin 
              to markets across the globe. Our commitment to quality and compliance with international 
              standards has enabled us to build strong partnerships with clients in Asia, Europe, 
              North America, South America, Africa, and Oceania. We understand the unique requirements 
              of each market and deliver customized solutions that meet local regulations and 
              customer expectations. Our efficient logistics network ensures timely delivery to 
              destinations worldwide, making us a trusted global partner in the collagen industry.
            </p>
          </div>

          {/* World Map */}
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 800 400"
              className="w-full max-w-[500px] h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Simplified World Map */}
              <ellipse cx="400" cy="200" rx="380" ry="180" fill="hsl(var(--primary))" fillOpacity="0.1" />
              
              {/* Continents - simplified shapes */}
              {/* North America */}
              <path d="M80 80 L180 60 L200 120 L180 180 L120 200 L60 160 Z" fill="hsl(var(--primary))" fillOpacity="0.6" />
              
              {/* South America */}
              <path d="M140 220 L180 210 L200 280 L180 360 L140 340 L120 280 Z" fill="hsl(var(--primary))" fillOpacity="0.6" />
              
              {/* Europe */}
              <path d="M380 60 L440 50 L460 100 L420 140 L380 120 Z" fill="hsl(var(--primary))" fillOpacity="0.6" />
              
              {/* Africa */}
              <path d="M380 160 L440 150 L460 260 L420 320 L380 300 L360 220 Z" fill="hsl(var(--primary))" fillOpacity="0.6" />
              
              {/* Asia */}
              <path d="M480 40 L680 60 L720 160 L680 220 L580 200 L500 160 L480 100 Z" fill="hsl(var(--primary))" fillOpacity="0.6" />
              
              {/* Australia */}
              <path d="M640 280 L720 270 L740 320 L700 360 L640 340 Z" fill="hsl(var(--primary))" fillOpacity="0.6" />

              {/* Export Points */}
              <circle cx="140" cy="140" r="8" fill="hsl(var(--secondary))" />
              <circle cx="160" cy="280" r="8" fill="hsl(var(--secondary))" />
              <circle cx="420" cy="100" r="8" fill="hsl(var(--secondary))" />
              <circle cx="420" cy="240" r="8" fill="hsl(var(--secondary))" />
              <circle cx="580" cy="120" r="8" fill="hsl(var(--secondary))" />
              <circle cx="680" cy="320" r="8" fill="hsl(var(--secondary))" />
              
              {/* India - highlighted */}
              <circle cx="540" cy="180" r="12" fill="hsl(var(--primary))" stroke="hsl(var(--secondary))" strokeWidth="3" />
              
              {/* Connection Lines */}
              <line x1="540" y1="180" x2="140" y2="140" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              <line x1="540" y1="180" x2="160" y2="280" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              <line x1="540" y1="180" x2="420" y2="100" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              <line x1="540" y1="180" x2="420" y2="240" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              <line x1="540" y1="180" x2="580" y2="120" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
              <line x1="540" y1="180" x2="680" y2="320" stroke="hsl(var(--secondary))" strokeWidth="1" strokeDasharray="4" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportSection;
