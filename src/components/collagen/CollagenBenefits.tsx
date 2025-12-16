const benefits = [
  {
    title: "Skin Health",
    items: [
      "Improve skin hydration, elasticity, roughness, and density.",
      "Reduce wrinkles and fine lines."
    ]
  },
  {
    title: "Hair and nail health",
    items: ["Strengthen hair and nails, reducing brittleness."]
  },
  {
    title: "Anti-aging",
    items: ["Rejuvenation of the skin and reversal of skin aging."]
  },
  {
    title: "Joint Health",
    items: [
      "Support joint function.",
      "Reduce the symptoms of arthritis and joint pain."
    ]
  },
  {
    title: "Bone Health",
    items: ["Enhance bone density and strength."]
  },
  {
    title: "Anti-inflammatory",
    items: ["Possess anti-inflammatory properties, which can help reduce inflammation throughout the body."]
  },
  {
    title: "Muscle Mass",
    items: ["It aids in muscle repair and growth, which is beneficial for athletes and active individuals."]
  },
  {
    title: "Gut Health",
    items: ["Support the integrity of the gut lining, which can help with digestive issues."]
  },
  {
    title: "Heart health support",
    items: ["Improve cardiovascular health."]
  },
  {
    title: "Brain Health",
    items: [
      "It helps to improve sleep.",
      "It has inhibitory functions that take action against excessive excitation in the brain.",
      "Reduce anxiety symptoms."
    ]
  },
  {
    title: "Provide antioxidant properties",
    items: ["Reduce oxidative stress."]
  }
];

const CollagenBenefits = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-custom">
        <h2 className="text-2xl md:text-[32px] font-bold text-primary leading-[120%] mb-12">
          Benefits of the Athos Fish Collagen Peptide
        </h2>
        
        <div className="space-y-8">
          {benefits.map((benefit, index) => (
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

export default CollagenBenefits;
