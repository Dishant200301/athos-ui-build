const benefits = [
  {
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop",
    title: "Anti Aging",
    description: "Minimize fine lines and wrinkles.",
  },
  {
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
    title: "Bones and Joints",
    description: "Increase bone density and reduce joint pain.",
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    title: "Hair Growth",
    description: "Promotes hair growth and reduces hair loss.",
  },
  {
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=300&fit=crop",
    title: "Skin Care",
    description: "Rise the strength and elasticity of the skin.",
  },
  {
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    title: "Nail Strength",
    description: "Prevents brittleness and increase nail strength.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
    title: "Wound Healing",
    description: "Able to cure wounds on the skin of different intensities.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-20 lg:py-24 bg-athos-dark">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary text-center mb-12">
          Benefits of Fish Collagen Peptide
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card rounded-[34px] overflow-hidden border border-athos-card-border"
            >
              {/* Image */}
              <div className="h-[200px] md:h-[250px] lg:h-[310px] overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Bar */}
              <div className="h-[74px] bg-secondary flex flex-col items-center justify-center px-4">
                <h3 className="text-lg font-bold text-secondary-foreground">
                  {benefit.title}
                </h3>
                <p className="text-sm text-secondary-foreground/90 text-center leading-6">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
