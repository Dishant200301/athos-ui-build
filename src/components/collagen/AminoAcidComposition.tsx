const AminoAcidComposition = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-athos-light">
      <div className="max-w-[1300px] mx-auto px-4">
        <h2 className="text-[24px] md:text-[32px] font-bold text-primary text-center leading-[120%] mb-12 md:mb-16">
          Athos Fish Collagen Peptide Amino Acid Composition
        </h2>

        <div className="flex justify-center">
          <img
            src="/image/pychart.webp"
            alt="Amino Acid Composition Chart"
            className="w-full max-w-[900px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AminoAcidComposition;
