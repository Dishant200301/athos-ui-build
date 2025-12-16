const uniquenessPoints = [
  "Protein % is more than 97%.",
  "Odorless, Tasteless, & 100% Soluble in water.",
  "The presence of Glycine, Proline and Hydroxyproline (GPH) with a maximum percentage makes it Collagen Tripeptide (CTP).",
  "Ultra Low Molecular Weight.",
  "Fully dedicated facility for Fish Sources only.",
  "Accredited by globally recognized certification bodies."
];

const CollagenUniqueness = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Text */}
          <div>
            <h2 className="text-2xl md:text-[32px] font-bold text-primary leading-[120%] mb-8">
              Uniqueness of Athos Fish Collagen Peptide
            </h2>
            
            <ul className="space-y-4">
              {uniquenessPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span className="text-base leading-[150%]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column - Certification Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-4 border-primary flex items-center justify-center bg-background">
              <div className="text-center">
                <div className="text-primary font-bold text-lg md:text-2xl">CLINICALLY</div>
                <div className="text-primary font-bold text-lg md:text-2xl">TESTED</div>
                <div className="text-primary text-xs mt-2">✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollagenUniqueness;
