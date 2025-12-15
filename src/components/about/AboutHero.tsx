const AboutHero = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[100px] xl:px-[200px] pt-6">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[20px] overflow-hidden">
        {/* Placeholder background - replace with actual facility image */}
        <div className="absolute inset-0 bg-gradient-to-br from-athos-teal to-athos-dark">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23257FA6%22%20width%3D%22100%22%20height%3D%22100%22/%3E%3Ctext%20x%3D%2250%22%20y%3D%2250%22%20font-size%3D%228%22%20fill%3D%22white%22%20text-anchor%3D%22middle%22%20dominant-baseline%3D%22middle%22%3EATHOS%3C/text%3E%3C/svg%3E')] bg-cover bg-center opacity-20" />
        </div>

        {/* Text overlay on right side */}
        <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-12 lg:pr-20">
          <div className="text-right">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              World's Best Premium Quality
              <br />
              Fish Collagen Peptide
            </h1>
          </div>
        </div>

        {/* ATHOS logo watermark */}
        <div className="absolute left-8 md:left-12 lg:left-20 top-1/2 -translate-y-1/2">
          <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/30 tracking-wider">
            ATHOS
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
