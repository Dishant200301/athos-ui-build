const certifications = [
  { name: "KOSHER", row: 1 },
  { name: "HALAL", row: 1 },
  { name: "FDA", row: 1 },
  { name: "SGS FSSC", row: 2 },
  { name: "SGS GMP", row: 2 },
  { name: "SGS ISO-9001", row: 2 },
  { name: "SGS ISO-22000", row: 2 },
  { name: "SGS HACCP", row: 2 },
  { name: "FSSAI", row: 3 },
  { name: "EIC", row: 3 },
  { name: "MPEDA", row: 3 },
  { name: "FIEO", row: 3 },
];

const AboutCertifications = () => {
  const row1 = certifications.filter(c => c.row === 1);
  const row2 = certifications.filter(c => c.row === 2);
  const row3 = certifications.filter(c => c.row === 3);

  return (
    <section className="w-full px-4 md:px-8 lg:px-[100px] xl:px-[200px] py-12 lg:py-16">
      <h2 className="text-[28px] md:text-[32px] font-bold text-athos-teal text-center mb-10">
        Globally Recognized Certifications
      </h2>

      <div className="space-y-8">
        {/* Row 1 - KOSHER, HALAL, FDA */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {row1.map((cert) => (
            <div
              key={cert.name}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-background rounded-lg flex items-center justify-center"
            >
              <span className="text-xs md:text-sm font-medium text-athos-text text-center">
                {cert.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 - SGS certifications */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          {row2.map((cert) => (
            <div
              key={cert.name}
              className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-background rounded-lg flex items-center justify-center"
            >
              <span className="text-xs font-medium text-athos-text text-center">
                {cert.name}
              </span>
            </div>
          ))}
        </div>

        {/* Row 3 - FSSAI, EIC, MPEDA, FIEO */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
          {row3.map((cert) => (
            <div
              key={cert.name}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-background rounded-lg flex items-center justify-center"
            >
              <span className="text-xs md:text-sm font-medium text-athos-text text-center">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCertifications;
