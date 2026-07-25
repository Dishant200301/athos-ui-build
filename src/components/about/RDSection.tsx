const RDSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-[1290px] mx-auto px-4 xl:px-0">
        <h2 className="text-[32px] font-bold text-[#1D7AA3] mb-8 text-left">
          R&D
        </h2>

        <div className="w-full overflow-hidden rounded-xl shadow-sm">
          <img
            src="/images/R&D.png"
            alt="Research and Development"
            className="w-full h-[500px] md:h-[700px] object-cover block"
          />
        </div>
      </div>
    </section>
  );
};

export default RDSection;
