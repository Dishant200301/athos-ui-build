const foodBenefits = [
  {
    title: "Compatibility with Halal and Kosher Diets",
    items: ["Fish gelatin is acceptable in Halal and Kosher diets, making it a preferred choice for consumers adhering to these dietary laws."]
  },
  {
    title: "Gelling Agent",
    items: ["Fish gelatin can form gels, making it useful in the production of various food products like jellies, desserts, and marshmallows."]
  },
  {
    title: "Stabilizer",
    items: ["It acts as a stabilizer in dairy products like yogurt, cream, and ice cream, helping to maintain texture and consistency."]
  },
  {
    title: "Thickening Agent",
    items: ["Fish gelatin can thicken sauces, soups, and gravies."]
  },
  {
    title: "Film-forming Properties",
    items: [
      "Edible films and coatings for food preservation.",
      "Encapsulation of vitamins, colorants, and nutrients."
    ]
  },
  {
    title: "Protein Source",
    items: ["Fish gelatin is a source of protein and can be added to food products to increase their protein content."]
  },
  {
    title: "Transparency and Clarity",
    items: ["Fish gelatin produces clearer gels compared to mammalian gelatins, which is desirable in some food applications."]
  },
  {
    title: "Mild Flavour",
    items: ["Fish gelatin typically has a milder flavor compared to other gelatins, making it more versatile in food applications."]
  },
  {
    title: "Cold Water Solubility",
    items: ["Some fish gelatins have better cold water solubility, making them easier to use in certain food applications."]
  },
  {
    title: "Low Allergenicity",
    items: ["Fish gelatin is considered to have a lower allergenicity profile compared to mammalian gelatins."]
  },
  {
    title: "Emulsifying Agent",
    items: ["Emulsified products like dressings and spreads."]
  },
  {
    title: "Texturizing",
    items: ["Texturizer in products like yogurt and cheese."]
  },
  {
    title: "Microencapsulation",
    items: ["Encapsulating flavors, colorants, and nutrients."]
  },
  {
    title: "Low-fat",
    items: ["Fat replacer in low-fat products like spreads and dressings."]
  },
  {
    title: "Protecting Jelly",
    items: ["Protective coating for cured meats and fish."]
  },
  {
    title: "Shelf Life",
    items: ["Extending the shelf life of various food products."]
  },
  {
    title: "Other Uses",
    items: [
      "Jelly desserts, marshmallows, gummy candies.",
      "Clarification of wines, beers, and juices.",
      "Meat products, bakery products.",
      "Low-fat spreads, sour cream, yogurt, cheese."
    ]
  }
];

const GelatinFoodIndustry = () => {
  return (
    <section className="py-12 md:py-16 bg-athos-light">
      <div className="container-custom">
        <h2 className="text-2xl md:text-[32px] font-bold text-primary leading-[120%] mb-10">
          Benefits of Athos Fish Gelatin in Food Industry
        </h2>
        
        <div className="space-y-8">
          {foodBenefits.map((benefit, index) => (
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

export default GelatinFoodIndustry;
