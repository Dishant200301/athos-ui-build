const pharmaceuticalBenefits = [
  {
    title: "Encapsulation",
    items: ["Fish gelatin is used to manufacture soft and hard gel capsules for dietary supplements and pharmaceutical products."]
  },
  {
    title: "Gelling Agent",
    items: ["It serves as a gelling agent in various pharmaceutical formulations."]
  },
  {
    title: "Solubility and Absorption",
    items: ["Fish gelatin capsules dissolve quickly in the stomach, aiding in the rapid absorption of the active ingredients."]
  },
  {
    title: "Film-forming Properties",
    items: ["It is used to create thin films for wound dressings and transdermal patches."]
  },
  {
    title: "Biocompatibility and Biodegradability",
    items: ["Fish gelatin is biocompatible and biodegradable, making it suitable for use in medical devices and tissue engineering."]
  },
  {
    title: "Controlled Release",
    items: ["It can be used to develop controlled-release drug delivery systems."]
  },
  {
    title: "Stabilizer for Vaccines",
    items: ["Fish gelatin acts as a stabilizer in certain vaccines and biological products."]
  },
  {
    title: "Low Allergenicity",
    items: ["Fish gelatin is considered to have lower allergenicity compared to mammalian gelatins, making it suitable for individuals with allergies to pork or beef."]
  },
  {
    title: "Capsules",
    items: [
      "Hard and soft gel capsules.",
      "Enteric-coated capsules for targeted drug release."
    ]
  },
  {
    title: "Tablets",
    items: [
      "Binding agent in tablet formulations.",
      "Coating agent for tablets and pills."
    ]
  },
  {
    title: "Wound Care",
    items: [
      "Hydrogels for wound dressings.",
      "Bioactive wound healing products."
    ]
  },
  {
    title: "Other Uses",
    items: [
      "Microencapsulation of active ingredients.",
      "Drug delivery systems.",
      "Scaffolds for tissue engineering.",
      "Biodegradable implants.",
      "Cryoprotectant for cells and tissues during freezing."
    ]
  }
];

const GelatinPharmaceutical = () => {
  return (
    <section className="py-12 md:py-16 bg-athos-light">
      <div className="container-custom">
        <h2 className="text-2xl md:text-[32px] font-bold text-primary leading-[120%] mb-10">
          Benefits of Athos Fish Gelatin in Pharmaceutical Industry
        </h2>
        
        <div className="space-y-8">
          {pharmaceuticalBenefits.map((benefit, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-muted-foreground mb-3">
                {benefit.title}
              </h3>
              <ul className="space-y-2">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1">•</span>
                    <span className="text-base leading-[150%]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GelatinPharmaceutical;
