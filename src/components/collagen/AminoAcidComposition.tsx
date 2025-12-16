const aminoAcids = [
  { name: "Arginine", color: "#4A90A4" },
  { name: "Alanine", color: "#6B8E23" },
  { name: "Valine", color: "#4682B4" },
  { name: "Histidine", color: "#20B2AA" },
  { name: "Isoleucine", color: "#5F9EA0" },
  { name: "Glutamic Acid", color: "#32CD32" },
  { name: "Other amino acids", color: "#A9A9A9" },
  { name: "Aspartic Acid", color: "#228B22" },
];

const majorAminoAcids = [
  { name: "GLYCINE", color: "#FFA500", percentage: "22%" },
  { name: "PROLINE", color: "#4169E1", percentage: "13%" },
  { name: "HYDROXYPROLINE", color: "#DC143C", percentage: "12%" },
];

const AminoAcidComposition = () => {
  return (
    <section className="py-12 md:py-20 bg-athos-light">
      <div className="container-custom">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary text-center mb-12 md:mb-16">
          Athos Fish Collagen Peptide Amino Acid Composition
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Labels */}
          <div className="hidden lg:flex flex-col gap-3 text-right">
            {aminoAcids.slice(0, 4).map((acid, index) => (
              <div key={index} className="flex items-center justify-end gap-2">
                <span className="text-sm" style={{ color: acid.color }}>{acid.name}</span>
                <div className="w-8 h-px" style={{ backgroundColor: acid.color }} />
              </div>
            ))}
          </div>
          
          {/* Center Chart */}
          <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px]">
            {/* Pie Chart Placeholder */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-green-400 to-orange-400 relative overflow-hidden">
              {/* Inner white circle */}
              <div className="absolute inset-[30%] rounded-full bg-white flex items-center justify-center">
                <div className="text-4xl">🧬</div>
              </div>
              
              {/* Pie segments simulation */}
              <div className="absolute inset-0 rounded-full" style={{
                background: `conic-gradient(
                  #FFA500 0deg 80deg,
                  #4169E1 80deg 127deg,
                  #DC143C 127deg 170deg,
                  #4A90A4 170deg 200deg,
                  #6B8E23 200deg 230deg,
                  #20B2AA 230deg 260deg,
                  #32CD32 260deg 290deg,
                  #228B22 290deg 320deg,
                  #A9A9A9 320deg 360deg
                )`
              }} />
              <div className="absolute inset-[25%] rounded-full bg-white flex items-center justify-center">
                <div className="text-3xl md:text-4xl">🧬</div>
              </div>
            </div>
          </div>
          
          {/* Right Labels */}
          <div className="hidden lg:flex flex-col gap-3">
            {aminoAcids.slice(4).map((acid, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-8 h-px" style={{ backgroundColor: acid.color }} />
                <span className="text-sm" style={{ color: acid.color }}>{acid.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Major Amino Acids */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
          {majorAminoAcids.map((acid, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-lg md:text-xl font-bold uppercase"
                style={{ color: acid.color }}
              >
                {acid.name}
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Labels */}
        <div className="lg:hidden mt-8 grid grid-cols-2 gap-2 text-sm">
          {aminoAcids.map((acid, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: acid.color }} />
              <span style={{ color: acid.color }}>{acid.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AminoAcidComposition;
