const ExportSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-athos-light-bg">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-2">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-primary mb-6">
              Exporting Worldwide
            </h2>

            <p className="text-base text-athos-text leading-[27px] max-w-[636px] mb-6">
              Athos Collagen Pvt. Ltd. supplies a diversified range of functional ingredients to manufacturers and distributors across North America, South America, Europe, the United Kingdom, the Middle East, CIS nations, East Asia, Southeast Asia, and numerous other international markets. Our product portfolio serves the nutraceutical, food & beverage, pharmaceutical, personal care, and animal nutrition industries with carefully developed ingredient solutions designed for modern formulations.
            </p>
            <p className="text-base text-athos-text leading-[27px] max-w-[636px]">
              We enable customers to secure reliable ingredient solutions for both established and emerging product lines. With a strong emphasis on long-term collaboration, regulatory compliance, and consistent supply, Athos Collagen continues to support businesses seeking trusted ingredients for worldwide distribution.
            </p>
          </div>

          {/* World Map Image */}
          <div className="flex items-center justify-center order-1 lg:order-1">
            <img
              src="/images/athos-map-1.webp"
              alt="World Map - Export Destinations"
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportSection;
