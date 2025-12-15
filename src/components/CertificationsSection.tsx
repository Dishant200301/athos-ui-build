const certifications = [
  { name: "HALAL", abbr: "حلال" },
  { name: "FSSC 22000", abbr: "FSSC" },
  { name: "GMP", abbr: "GMP" },
  { name: "ISO 9001", abbr: "9001" },
  { name: "ISO 22000", abbr: "22000" },
  { name: "HACCP", abbr: "HACCP" },
];

const CertificationsSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-athos-dark">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary text-center mb-12">
          Globally Recognized Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 justify-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] bg-card rounded-[10px] border border-[#D6EAF1] flex flex-col items-center justify-center p-4"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {cert.abbr}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground text-center">
                {cert.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
