import { Link } from "react-router-dom";

const CobrandingSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-[#ecf5f8]">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-1 lg:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#1D7AA3] mb-6">
              Cobranding Opportunities
            </h2>
            <p className="text-base text-athos-text leading-[27px] max-w-[636px] mb-8 font-sans">
              Partner with Athos collagen pvt ltd. to deliver premium branded marine collagen peptide. Our co-branding program includes access to a respected brand name, marketing collateral, and established scientific research
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-[#1D7AA3] text-[#1D7AA3] text-base font-medium rounded-[6px_0px] px-8 py-2.5 hover:bg-[#1D7AA3] hover:text-white transition-all duration-300 group"
            >
              Contact us
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Product Image */}
          <div className="flex items-center justify-center order-2 lg:order-2">
            <img
              src="/images/athos_product.png"
              alt="Athos Collagen Products - Cobranding"
              className="w-full max-w-[600px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CobrandingSection;
