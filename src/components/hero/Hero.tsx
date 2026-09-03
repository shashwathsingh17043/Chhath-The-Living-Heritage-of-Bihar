import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FDFBF7] text-[#2C221E] pt-28 pb-16 md:pt-32 md:pb-24 border-b border-[#EADEC9] overflow-hidden font-inter">
      {/* Subtle tactile paper texture */}
      <div className="absolute inset-0 grain-overlay opacity-25 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        {/* Asymmetric 12-Column Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Curatorial Header & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Museum Accession & Tithi Metadata */}
            <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono text-[#7D6B58] border-b border-[#EADEC9] pb-3">
              <span className="text-[#8E4A23] font-bold uppercase tracking-widest">
                ARCHIVE PLATE 01
              </span>
              <span className="text-[#EADEC9]">•</span>
              <span className="uppercase tracking-wider">
                LIVING HERITAGE DOCUMENTATION
              </span>
              <span className="text-[#EADEC9]">•</span>
              <span className="text-[#5C2E16] font-noto font-normal">
                कार्तिक शुक्ल षष्ठी (Kartik Shukla)
              </span>
            </div>

            {/* Asymmetric English Title with Devanagari Pair */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-4 flex-wrap">
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#2C221E] tracking-tight leading-[0.95]">
                  Chhath
                </h1>
                <span className="font-yatra text-4xl sm:text-5xl text-[#8E4A23] font-normal select-none -translate-y-1">
                  छठ
                </span>
              </div>
              <p className="font-serif italic text-2xl sm:text-3xl text-[#8E4A23] font-normal tracking-wide">
                Bihar Ki Jeevit Virasat
              </p>
            </div>

            {/* Architectural Rule */}
            <div className="h-[1.5px] bg-[#8E4A23] w-16" />

            {/* Primary Curatorial Statement */}
            <div className="space-y-3 max-w-2xl">
              <p className="text-base sm:text-lg text-[#2C221E] leading-relaxed font-normal">
                A living digital heritage archive dedicated to the Sun, ancient riparian ghats, austere fasting vows, and the priestless, democratic devotion of Bihar and Purvanchal.
              </p>
              <p className="font-noto text-xs sm:text-sm text-[#7D6B58] leading-relaxed italic">
                सूर्य, नदी, घाट, व्रत, महाप्रसाद और लोक आस्था को समर्पित एक प्रामाणिक एवं सार्वजनिक पुरालेख।
              </p>
            </div>

            {/* Editorial Navigation Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-mono">
              <Link
                to="/four-days"
                className="px-6 py-3.5 bg-[#8E4A23] hover:bg-[#6E3214] text-white font-semibold tracking-wider uppercase transition-colors inline-flex items-center gap-2 border border-[#8E4A23]"
              >
                <span>Enter the Exhibition · चार दिन</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/heritage"
                className="px-6 py-3.5 bg-white hover:bg-[#FAF7F0] text-[#2C221E] font-semibold tracking-wider uppercase transition-colors inline-flex items-center gap-2 border border-[#EADEC9] hover:border-[#8E4A23]"
              >
                <span>Explore Artifacts · सामग्री दीर्घा</span>
              </Link>
            </div>

            {/* Curatorial metadata marginalia */}
            <div className="pt-4 flex items-center gap-6 text-[10px] font-mono text-[#7D6B58] uppercase tracking-wider">
              <div>STATUS: VERIFIED FIELD ARCHIVE</div>
              <div>LOCATIONS: PATNA · DEO · KANDAHAS</div>
              <div>ERA: LIVING CONTINUUM</div>
            </div>

          </div>

          {/* Right Column: Authentic Archival Plate (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-[#EADEC9] bg-[#FAF7F0] p-3 sm:p-4 shadow-sm">
              
              {/* Unwashed, authentic photographic crop */}
              <div className="relative aspect-[4/5] overflow-hidden border border-[#EADEC9] bg-[#2C221E]/5">
                <img
                  src="/assets/images/chhath-puja-lake.webp"
                  alt="Devotees offering Sandhya Arghya at sunset standing chest-deep in water"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] brightness-[0.98]"
                />
                <div className="absolute top-3 right-3 bg-[#2C221E]/80 text-white px-2 py-0.5 text-[9px] font-mono uppercase tracking-widest backdrop-blur-xs">
                  PLATE I · EVENING ARGHYS
                </div>
              </div>

              {/* Museum catalog caption */}
              <div className="mt-3.5 px-1 space-y-1">
                <div className="flex justify-between items-baseline text-[10px] font-mono text-[#7D6B58]">
                  <span className="font-bold text-[#8E4A23]">FIG. 01: ARGHYS OFFERING</span>
                  <span>PATNA, BIHAR</span>
                </div>
                <p className="font-serif italic text-xs text-[#5C2E16] leading-relaxed">
                  &ldquo;Standing in holy river current holding the bamboo soop adorned with harvested grains and earthen lamps, offering prayers to the setting sun.&rdquo;
                </p>
                <div className="text-[9px] font-mono text-[#7D6B58]/80 pt-1 border-t border-[#EADEC9]/60">
                  ACCESSION ID: CH-ARCH-001 · LIVING HERITAGE DOCUMENTATION
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
