import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { featuredLocations } from "../../data/locations";
import { MapPin, Compass, HelpCircle, ArrowRight, X } from "lucide-react";
import type { HeritageLocation } from "../../types/heritage";

export const BiharHeritageMap: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<HeritageLocation | null>(null);

  // Geographic boundaries of Bihar for coordinate projection onto SVG box
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

  // Filter locations list
  const filteredLocations = useMemo(() => {
    return featuredLocations.filter((loc) => {
      if (activeFilter === "all") return true;
      if (activeFilter === "ghat") return loc.type === "ghat";
      if (activeFilter === "temple") return loc.type === "sun-temple";
      if (activeFilter === "river") return !!loc.river && loc.river !== "Surya Kund (Sacred Tank)" && loc.river !== "Kandaha Pokhar (Sacred Pond)";
      return true;
    });
  }, [activeFilter]);

  // Marker Color Codes
  const getMarkerColor = (type: string) => {
    switch (type) {
      case "sun-temple":
        return "bg-amber-500 border-amber-600 text-[#2C221E]"; // Sun Temples - Orange
      case "ghat":
        return "bg-[#8E4A23] border-[#8E4A23] text-white"; // Ghats - Terracotta
      case "river":
      default:
        return "bg-[#182A42] border-[#182A42] text-white"; // River Side
    }
  };

  return (
    <div className="w-full space-y-12 font-inter">
      {/* Filters Drawer Toggle */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
        <button
          onClick={() => { setActiveFilter("all"); setSelectedLocation(null); }}
          className={`px-4 py-2 rounded-lg border font-semibold transition-all ${
            activeFilter === "all"
              ? "bg-[#8E4A23] text-white border-[#8E4A23] shadow-md"
              : "bg-white text-[#5C2E16] border-[#EADEC9] hover:border-[#8E4A23]"
          }`}
        >
          All Sites · सभी
        </button>
        <button
          onClick={() => { setActiveFilter("ghat"); setSelectedLocation(null); }}
          className={`px-4 py-2 rounded-lg border font-semibold transition-all ${
            activeFilter === "ghat"
              ? "bg-[#8E4A23] text-white border-[#8E4A23] shadow-md"
              : "bg-white text-[#5C2E16] border-[#EADEC9] hover:border-[#8E4A23]"
          }`}
        >
          Ghats · घाट
        </button>
        <button
          onClick={() => { setActiveFilter("temple"); setSelectedLocation(null); }}
          className={`px-4 py-2 rounded-lg border font-semibold transition-all ${
            activeFilter === "temple"
              ? "bg-amber-500 text-[#2C221E] border-amber-500 shadow-md"
              : "bg-white text-[#5C2E16] border-[#EADEC9] hover:border-[#8E4A23]"
          }`}
        >
          Sun Temples · सूर्य मंदिर
        </button>
        <button
          onClick={() => { setActiveFilter("river"); setSelectedLocation(null); }}
          className={`px-4 py-2 rounded-lg border font-semibold transition-all ${
            activeFilter === "river"
              ? "bg-blue-600 text-white border-blue-600 shadow-md"
              : "bg-white text-[#5C2E16] border-[#EADEC9] hover:border-[#8E4A23]"
          }`}
        >
          Rivers &amp; Waters · नदियाँ
        </button>
      </div>

      {/* Map Layout Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
        
        {/* SVG Cartography View (Left panel) */}
        <div className="lg:col-span-8 p-4 border border-[#EADEC9] bg-white rounded-xl shadow-lg relative min-h-[400px] flex flex-col justify-between overflow-hidden">
          
          {/* Projection labels */}
          <div className="flex justify-between items-start text-[9px] text-[#7D6B58] font-mono select-none relative z-10">
            <span>GRID SYSTEM: MERCATOR COORDINATE PROJECTION</span>
            <span>Illustrative cartography — not to legal scale</span>
          </div>

          {/* Compass rose */}
          <div className="absolute top-8 right-8 opacity-25 select-none z-0 hidden md:block">
            <Compass className="w-16 h-16 text-[#8E4A23]" />
          </div>

          {/* Plotted Container Map Box */}
          <div className="relative flex-1 w-full bg-[#FDFBF7] border border-[#EADEC9]/50 rounded-lg overflow-hidden min-h-[320px] mt-4">
            
            {/* Outline Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none opacity-10">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#8E4A23]" />
              ))}
            </div>

            {/* Stylized Bihar River Ganges SVG flow path */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 52 Q 25 48, 40 54 T 70 51 T 100 53"
                fill="none"
                stroke="#1E3A8A"
                strokeWidth="2.5"
              />
            </svg>

            {/* Plotted Markers */}
            {filteredLocations.map((loc) => {
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
                  aria-label={`View ${loc.name}`}
                >
                  <div className={`p-1.5 rounded-full border-2 shadow-md flex items-center justify-center ${getMarkerColor(loc.type)}`}>
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-white/95 border border-[#EADEC9] text-[#2C221E] text-[10px] font-bold px-1.5 py-0.5 rounded shadow whitespace-nowrap hidden group-hover:block">
                    {loc.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center gap-1 text-[9px] text-[#7D6B58] select-none relative z-10 font-medium">
            <HelpCircle className="w-3.5 h-3.5 text-[#C87A53]" />
            <span>Click on any plotted marker to inspect local customs, riparian context, and GPS details.</span>
          </div>
        </div>

        {/* Display details overlay / panel (Right panel) */}
        <div className="lg:col-span-4 p-6 border border-[#EADEC9] bg-white rounded-xl shadow-lg relative flex flex-col justify-between min-h-[300px]">
          <AnimatePresence mode="wait">
            {selectedLocation ? (
              <motion.div
                key={selectedLocation.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col h-full justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#EADEC9] pb-3">
                    <div>
                      <h3 className="text-xl font-bold text-[#2C221E]">{selectedLocation.name}</h3>
                      <span className="font-yatra text-sm text-[#8E4A23] block">
                        {selectedLocation.hindiName}
                      </span>
                    </div>
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedLocation(null)}
                      className="p-1 text-[#7D6B58] hover:text-[#8E4A23]"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-[#5C2E16] leading-relaxed pt-2 font-medium">
                    {selectedLocation.description}
                  </p>

                  <div className="mt-4 p-3 bg-[#FDFBF7] border border-[#EADEC9] rounded-lg text-[10px] text-[#7D6B58] space-y-1 font-mono">
                    <div className="flex justify-between">
                      <span>DISTRICT:</span>
                      <span className="font-bold text-[#5C2E16]">{selectedLocation.district}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>COORDINATES:</span>
                      <span>{selectedLocation.latitude.toFixed(4)}°N, {selectedLocation.longitude.toFixed(4)}°E</span>
                    </div>
                    {selectedLocation.river && (
                      <div className="flex justify-between">
                        <span>WATER BODY:</span>
                        <span className="font-bold text-[#5C2E16]">{selectedLocation.river}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EADEC9]">
                  <Link
                    to={`/ghats/${selectedLocation.id}`}
                    className="flex items-center justify-between w-full px-4 py-2 bg-[#8E4A23] text-white hover:bg-[#C87A53] font-bold text-xs tracking-wider uppercase rounded-lg transition-colors shadow"
                  >
                    <span>Explore Site Details · विवरण</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center h-full py-16 opacity-75">
                <Compass className="w-10 h-10 text-[#C87A53] mb-3 animate-spin-slow" />
                <h4 className="font-bold text-base text-[#2C221E]">Location Inspector</h4>
                <p className="text-[11px] text-[#7D6B58] max-w-[200px] leading-relaxed mt-1 font-medium">
                  Select any site marker on the cartographic grid to view historical context, riparian connections, and arghya traditions.
                </p>
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Accessible location list below the map */}
      <div className="pt-8 space-y-6">
        <div className="border-b border-[#EADEC9] pb-3">
          <h3 className="text-xl md:text-2xl font-bold text-[#2C221E]">
            Sacred Geography Directory · <span className="font-yatra text-lg text-[#8E4A23] font-normal">बिहार के प्रमुख छठ स्थल</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {filteredLocations.map((loc) => (
            <div
              key={loc.id}
              className="border border-[#EADEC9] bg-white rounded-xl overflow-hidden hover:border-[#8E4A23]/60 transition-all duration-300 shadow hover:shadow-md flex flex-col md:flex-row items-stretch"
            >
              {/* Image Section */}
              {loc.image && (
                <div className="relative w-full md:w-56 lg:w-64 min-h-[160px] md:min-h-0 overflow-hidden bg-[#EADEC9]/20 flex-shrink-0">
                  <img
                    src={loc.image}
                    alt={loc.imageAlt || loc.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Context Label Badge overlay */}
                  <div className="absolute top-3 left-3 bg-[#080D24]/85 backdrop-blur-sm border border-[#EADEC9]/30 rounded px-2 py-0.5 text-[8px] font-mono tracking-wider text-white">
                    {loc.locationVerified ? "Verified Location" : "Bihar Regional Context"}
                  </div>
                </div>
              )}

              {/* Details & Metadata Section */}
              <div className="flex-1 p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EADEC9]/60 pb-2">
                    {/* Title */}
                    <div className="space-y-0.5">
                      <h4 className="text-xl font-bold text-[#2C221E]">{loc.name}</h4>
                      <div className="font-yatra text-base text-[#8E4A23]">
                        {loc.hindiName} · {loc.type === "sun-temple" ? "सूर्य मंदिर" : "ऐतिहासिक घाट"}
                      </div>
                    </div>

                    {/* GEOGRAPHIC LOCATION DATA (GPS Status) */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`px-2 py-0.5 text-[9px] font-bold rounded uppercase tracking-wider ${
                        loc.verified 
                          ? "bg-green-50 text-green-700 border border-green-200" 
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}>
                        {loc.verified ? "✓ GPS Verified" : "⚠ Coordinates Pending"}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#5C2E16] leading-relaxed font-medium">
                    {loc.description}
                  </p>
                </div>

                {/* Bottom row */}
                <div className="pt-3 border-t border-[#EADEC9]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] text-[#7D6B58] font-mono leading-relaxed">
                  
                  {/* Metadata fields */}
                  <div className="space-y-1 sm:space-y-0 sm:flex sm:items-center sm:gap-4 flex-wrap">
                    <div>
                      <span className="font-bold text-[#8E4A23]">District:</span> {loc.district} {loc.region && `(${loc.region})`}
                    </div>
                    {loc.river && (
                      <div>
                        <span className="font-bold text-[#8E4A23]">Water Body:</span> {loc.river}
                      </div>
                    )}
                    {/* IMAGE CONTEXT DATA */}
                    <div className="text-[#7D6B58]/70 italic">
                      Credit: {loc.imageCredit ? loc.imageCredit.split("/ Location:")[0] : "Archive"}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <Link
                    to={`/ghats/${loc.id}`}
                    className="self-end sm:self-auto px-4 py-2 bg-[#8E4A23] hover:bg-[#C87A53] text-white font-bold text-[10px] tracking-widest uppercase rounded transition-colors flex items-center gap-1.5 min-h-[44px] flex-shrink-0 shadow"
                    aria-label={`Explore details of ${loc.name}`}
                  >
                    <span>Explore Site Details · विवरण</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
