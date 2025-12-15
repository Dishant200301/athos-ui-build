const MissionVision = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-[100px] xl:px-[200px] py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
        {/* Mission Circle */}
        <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full bg-[#61B22C] flex flex-col items-center justify-center text-center p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-3">Mission</h3>
          <p className="text-white text-sm leading-relaxed">
            To become a pioneer in the field of Fish Collagen Peptide and Fish Gelatin.
          </p>
        </div>

        {/* Dashed line connector - hidden on mobile */}
        <div className="hidden lg:block w-16 border-t-2 border-dashed border-gray-300" />

        {/* Center Logo Circle */}
        <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full bg-[#F4F4F4] flex flex-col items-center justify-center text-center p-6 shadow-sm">
          <h3 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">
            <span className="text-athos-dark">AT</span>
            <span className="text-[#61B22C]">H</span>
            <span className="text-athos-teal">OS</span>
          </h3>
          <div className="text-[10px] text-gray-500 tracking-wider flex gap-2">
            <span>Authenticity</span>
            <span>Trust</span>
            <span className="text-[#61B22C]">Health</span>
            <span>Oblige</span>
            <span className="text-athos-teal">System</span>
          </div>
        </div>

        {/* Dashed line connector - hidden on mobile */}
        <div className="hidden lg:block w-16 border-t-2 border-dashed border-gray-300" />

        {/* Vision Circle */}
        <div className="w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full bg-athos-teal flex flex-col items-center justify-center text-center p-6 shadow-lg">
          <h3 className="text-lg font-bold text-white mb-3">Vision</h3>
          <p className="text-white text-sm leading-relaxed">
            Deliver high-quality Fish Collagen Peptide and Fish Gelatin by partnering with the global healthcare industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
