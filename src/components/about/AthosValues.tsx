const athosValues = [
  {
    title: "Authenticity",
    description:
      "We defines our foundation where precision sourcing meets uncompromising global standards",
  },
  {
    title: "Trust",
    description:
      "Trust is not claimed it is earned through unwavering precision, absolute transparency, and a legacy of excellence",
  },
  {
    title: "Health",
    description:
      "Health, engineered with precision and elevated through science.",
  },
  {
    title: "Oblige",
    description:
      "We operate with a deep sense of obligation to excellence and integrity. Delivering not just ingredients, but long-term reliability and accountability.",
  },
  {
    title: "System",
    description:
      "Built on structured precision, our systems ensure consistency at every stage. Delivering seamless quality through advanced processes and controlled environments.",
  },
];

const AthosValues = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column - Centered Logo */}
          <div className="lg:col-span-5 flex items-center justify-start self-center py-4">
            <img
              src="/images/logo.webp"
              alt="Athos Collagen"
              className="h-[50px] md:h-[70px] lg:h-[80px] w-auto object-contain mx-auto"
            />
          </div>

          {/* Right Column - Brand Values List */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {athosValues.map((item, index) => (
              <div
                key={item.title}
                className={`pb-6 md:pb-8 ${
                  index !== athosValues.length - 1
                    ? "border-b border-[#d8ebf5]"
                    : ""
                }`}
              >
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#1D7AA3] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#555555] text-sm md:text-base leading-[26px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AthosValues;
