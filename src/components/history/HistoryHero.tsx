import React from "react";
import { Landmark } from "lucide-react";

export const HistoryHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-[#FDFBF7] text-[#2C221E] border-b border-[#EADEC9] overflow-hidden font-inter">
      {/* Texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full space-y-8">
        
        {/* Archival metadata register */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADEC9] pb-3 text-[10px] font-mono text-[#7D6B58]">
          <div className="flex items-center gap-2">
            <span className="text-[#8E4A23] font-bold uppercase tracking-widest">
              MONOGRAPH SECTION 01
            </span>
            <span>•</span>
            <span className="uppercase tracking-wider">
              CRITICAL HISTORIOGRAPHY &amp; VEDIC ROOTS
            </span>
          </div>
          <div className="uppercase">
            METHODOLOGY: ARCHAEOLOGICAL &amp; ETHNOGRAPHIC SYNTHESIS
          </div>
        </div>

        {/* 12-Column Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Scholarly Thesis (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C221E] tracking-tight leading-[1.05]">
                The History of Chhath
              </h1>
              <span className="font-yatra text-2xl sm:text-3xl text-[#8E4A23] block mt-1 font-normal">
                छठ का इतिहास एवं लोक परंपरा
              </span>
            </div>

            <div className="h-[1.5px] bg-[#8E4A23] w-16 my-4" />

            <p className="text-base sm:text-lg text-[#2C221E] leading-relaxed font-normal">
              An ancient living tradition where solar reverence, sacred riparian waters, communal devotion, and ancestral memory converge without priestly mediation.
            </p>

            <p className="font-noto text-xs sm:text-sm text-[#7D6B58] leading-relaxed italic">
              सूर्य, वैदिक उषा, पवित्र नदियाँ और सदियों से चली आ रही लोक आस्था का निरंतर ऐतिहासिक प्रवाह।
            </p>

            <div className="p-4 bg-[#FAF7F0] border border-[#EADEC9] text-xs space-y-1.5 max-w-xl">
              <div className="flex items-center gap-2 text-[#8E4A23] font-bold font-mono text-[10px] uppercase tracking-wider">
                <Landmark className="w-3.5 h-3.5" />
                <span>EPIGRAPHIC &amp; VEDIC CORPUS</span>
              </div>
              <p className="text-[#5C2E16] text-[11px] leading-relaxed">
                Documentation cross-references hymns from the <em>Rigveda Mandala 10</em>, ancient sun temples (Deo, Kandaha, Konark), and colonial ethnographies of the Bengal-Bihar Presidency.
              </p>
            </div>
          </div>

          {/* Right Column: Museum Archival Image Plate (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-[#EADEC9] bg-[#FAF7F0] p-4 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#EADEC9] bg-stone-100">
                <img
                  src="/assets/images/chhath-puja-lake.webp"
                  alt="Historic riverbank congregation during morning arghya"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                />
                <div className="absolute top-2 right-2 bg-[#2C221E]/80 text-white px-2 py-0.5 text-[9px] font-mono tracking-widest">
                  DOCUMENTARY PLATE · GHAT GATHERING
                </div>
              </div>

              <div className="mt-3 px-1 space-y-1 text-[10px] font-mono text-[#7D6B58]">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-[#8E4A23]">FIG. 02: HISTORIC PATNA GHATS</span>
                  <span>RIVER GANGA</span>
                </div>
                <p className="font-serif italic text-xs text-[#5C2E16]">
                  &ldquo;A congregation gathered on natural silt banks before dawn to offer the final Usha Arghya to the rising sun.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
