import React, { useState } from "react";
import { Link } from "react-router-dom";
import { featuredLocations } from "../../data/locations";
import { MapPin, Compass, HelpCircle, ArrowRight } from "lucide-react";

export const BiharMapPreview: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<typeof featuredLocations[0] | null>(null);

  // Geographic boundaries of Bihar for coordinate projection
  const latMin = 24.0;
  const latMax = 27.5;
  const lngMin = 83.0;
  const lngMax = 88.5;

  const calculatePercentage = (lat: number, lng: number) => {
    const x = ((lng - lngMin) / (lngMax - lngMin)) * 100;
    // Y-axis is inverted in screen coordinates
    const y = ((latMax - lat) / (latMax - latMin)) * 100;
    return { x, y };
  };

  return (
    <section className="py-20 md:py-28 bg-[#FDFBF7] border-b border-[#EADEC9] text-[#2C221E] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EADEC9] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold block">
              SACRED GEOGRAPHY &amp; RIPARIAN NETWORK · क्षेत्रीय भूगोल
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C221E] font-bold leading-tight">
              Rivers, Ghats &amp; Sun Temples of Bihar
            </h2>
            <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
              From the historic stone ghats along the Ganga in Patna to the ancient west-facing Sun Temple of Deo, sacred water bodies form the geographic backbone of Chhath.
            </p>
          </div>

          <Link
            to="/ghats"
            className="px-5 py-2.5 border border-[#EADEC9] hover:border-[#8E4A23] bg-white text-xs font-mono uppercase tracking-wider text-[#8E4A23] transition-colors inline-flex items-center gap-2 self-start md:self-end flex-shrink-0"
          >
            <span>Interactive Geography Atlas · संपूर्ण मानचित्र</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 12-Column Cartographic Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Cartographic Canvas Panel (Left 8 cols) */}
          <div className="lg:col-span-8 p-6 border border-[#EADEC9] bg-white relative flex flex-col justify-between shadow-sm min-h-[440px]">
            
            {/* Grid Line Accents */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-15 z-0">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#8E4A23]" />
              ))}
            </div>

            {/* Compass Rose */}
            <div className="absolute top-4 right-4 z-10 opacity-25 select-none hidden md:block">
              <Compass className="w-16 h-16 text-[#8E4A23]" />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-between">
              
              {/* Map Title / Legend */}
              <div className="flex justify-between items-start text-[10px] font-mono text-[#7D6B58] mb-4">
                <span>PROJECTED MERCATOR COORDINATES · BIHAR RIPARIAN BASIN</span>
                <span className="hidden sm:inline">LAT 24.0°N–27.5°N | LNG 83.0°E–88.5°E</span>
              </div>

              {/* Plotted Markers Container */}
              <div className="relative flex-1 w-full border border-[#EADEC9] bg-[#FAF7F0] overflow-hidden min-h-[300px]">
                
                {/* Ganges River Flow SVG */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-35 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 52 Q 25 48, 40 54 T 70 51 T 100 53"
                    fill="none"
                    stroke="#1E3A8A"
                    strokeWidth="2"
                    strokeDasharray="3 2"
                  />
                </svg>

                {/* Plotting location markers */}
                {featuredLocations.map((loc) => {
                  const { x, y } = calculatePercentage(loc.latitude, loc.longitude);
                  const isSelected = selectedLocation?.id === loc.id;

                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedLocation(loc)}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20 transition-transform ${
                        isSelected ? "scale-125 z-30" : "hover:scale-110"
                      }`}
                      aria-label={`Inspect ${loc.name}`}
                    >
                      <div className={`p-1.5 border shadow-sm flex items-center justify-center ${
                        loc.type === "sun-temple"
                          ? "bg-amber-600 border-[#2C221E] text-white"
                          : "bg-[#8E4A23] border-[#2C221E] text-white"
                      }`}>
                        <MapPin className="w-3 h-3" />
                      </div>
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white border border-[#EADEC9] text-[#2C221E] text-[10px] font-mono px-1.5 py-0.5 whitespace-nowrap hidden group-hover:block shadow-sm">
                        {loc.name}
                      </span>
                    </button>
                  );
                })}

              </div>

              {/* Helper instruction */}
              <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-[#7D6B58]">
                <HelpCircle className="w-3 h-3 text-[#8E4A23]" />
                <span>CLICK ANY POINT ON THE CARTOGRAPHIC GRID TO INSPECT HISTORICAL GHAT DATA</span>
              </div>

            </div>
          </div>

          {/* Location Inspection Dossier (Right 4 cols) */}
          <div className="lg:col-span-4 border border-[#EADEC9] bg-white p-6 flex flex-col justify-between shadow-sm min-h-[440px]">
            {selectedLocation ? (
              <div className="space-y-4">
                <div className="border-b border-[#EADEC9] pb-3">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8E4A23] font-bold block">
                    SITE DOSSIER · {selectedLocation.type === "sun-temple" ? "SUN TEMPLE" : "RIVER GHAT"}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#2C221E] mt-1">
                    {selectedLocation.name}
                  </h3>
                  <span className="font-yatra text-base text-[#8E4A23] block">
                    {selectedLocation.hindiName}
                  </span>
                </div>

                <p className="text-xs text-[#5C2E16] leading-relaxed">
                  {selectedLocation.description}
                </p>

                <div className="p-3 bg-[#FAF7F0] border border-[#EADEC9] text-[10px] font-mono text-[#7D6B58] space-y-1.5">
                  <div className="flex justify-between">
                    <span>DISTRICT:</span>
                    <strong className="text-[#2C221E]">{selectedLocation.district}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>COORDINATES:</span>
                    <span>{selectedLocation.latitude.toFixed(4)}°N, {selectedLocation.longitude.toFixed(4)}°E</span>
                  </div>
                  {selectedLocation.river && (
                    <div className="flex justify-between">
                      <span>WATER BODY:</span>
                      <strong className="text-[#2C221E]">{selectedLocation.river}</strong>
                    </div>
                  )}
                  <div className="flex justify-between pt-1 border-t border-[#EADEC9]/60">
                    <span>GPS STATUS:</span>
                    <span className="text-emerald-700 font-bold">VERIFIED</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/ghats/${selectedLocation.id}`}
                    className="w-full py-2.5 px-4 bg-[#8E4A23] hover:bg-[#6E3214] text-white font-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-between"
                  >
                    <span>Read Full Site Record</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-12 space-y-3">
                <Compass className="w-10 h-10 text-[#C87A53] opacity-60 animate-spin-slow" />
                <h4 className="font-serif text-lg font-bold text-[#2C221E]">
                  Cartographic Inspector
                </h4>
                <p className="text-xs text-[#7D6B58] max-w-[220px] leading-relaxed font-normal">
                  Select any site marker across Bihar to reveal historical river access, temple origins, and Arghya traditions.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
