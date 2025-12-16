const uniqueFeatures = [
  "Protein% is more than 97%.",
  "Odorless, Tasteless, and 100% Soluble in water.",
  "The presence of Glycine, Proline and Hydroxyproline (GPH) with a maximum percentage makes it Collagen Tripeptide (CTP).",
  "Ultra Low Molecular Weight.",
  "Fully dedicated facility for Fish Sources only.",
  "Accredited by globally recognized certification bodies.",
];

const UniquenessSection = () => {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{ backgroundImage: "url('/image/Uniqueness.jpg')" }}
    >

      <div className="max-w-[1200px] mx-auto relative z-10 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-10">
          Uniqueness of Athos Fish Collagen Peptide
        </h2>

        <ul className="space-y-5 max-w-3xl">
          {uniqueFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="text-[#66b036]">▲</span>
              <p className="text-base text-foreground/80 leading-[26px]">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UniquenessSection;
