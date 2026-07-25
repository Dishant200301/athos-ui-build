const strengths = [
  { icon: "🤝", text: "Integrity" },
  { icon: "🤞", text: "Honesty" },
  { icon: "🎖️", text: "Authenticity" },
];

const commitments = [
  { icon: "👌", text: "Best Quality" },
  { icon: "💼", text: "Better Service" },
  { icon: "💲", text: "Competitive Price" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/images/about-img.webp"
              alt="Athos Collagen facility"
              className="w-full h-[300px] md:h-[500px] object-cover rounded-tl-[36px] rounded-br-[36px]"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-6">
              Welcome to Athos Collagen Pvt. Ltd.
            </h2>

            <p className="text-base text-athos-text leading-[27px] mb-8">
             Athos Collagen Pvt. Ltd. is an India-based manufacturer and global supplier of specialty ingredients developed for the nutraceutical, food & beverage, pharmaceutical, personal care, and animal nutrition industries. we serve customers across domestic and international markets with solutions that meet evolving industry requirements.Our focus extends beyond supplying ingredients we strive to build long-term business relationships through transparent communication, reliable deliveries, regulatory compliance, and dedicated customer support. As our product range continues to grow, Athos Collagen remains committed to delivering trusted ingredient solutions that help brands innovate and succeed in competitive global markets.
            </p>


            {/* Lists */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {/* Our Strength */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-4">Our Strength</h3>
                <ul className="space-y-4">
                  {strengths.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-athos-text">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Commitment */}
              <div>
                <h3 className="text-base font-bold text-foreground mb-4">Our Commitment</h3>
                <ul className="space-y-4">
                  {commitments.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-athos-text">
                      <span className="text-base">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
