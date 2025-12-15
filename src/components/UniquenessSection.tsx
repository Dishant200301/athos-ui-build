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
    <section className="py-16 md:py-20 lg:py-24 bg-athos-light-bg relative overflow-hidden">
      {/* Fish Pattern Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 15c-5 0-10 5-15 10 5 5 10 10 15 10s10-5 15-10c-5-5-10-10-15-10z' fill='%231D7AA3' fill-opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-10">
          Uniqueness of Athos Fish Collagen Peptide
        </h2>

        <ul className="space-y-5 max-w-3xl">
          {uniqueFeatures.map((feature, index) => (
            <li key={index} className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <p className="text-base text-foreground/80 leading-[26px]">{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UniquenessSection;
