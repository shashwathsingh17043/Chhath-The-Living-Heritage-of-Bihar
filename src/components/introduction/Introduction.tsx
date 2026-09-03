import React from "react";
import { Home, Flame, Utensils, Music, ShoppingBag, Waves, Sun, Users } from "lucide-react";

export const Introduction: React.FC = () => {
  const continuumStages = [
    {
      step: "01",
      name: "The Domestic Sanctum",
      hindi: "घर की शुचिता",
      desc: "Complete washing, purification, and spiritual dedication of the household.",
      icon: <Home className="w-4 h-4 text-[#8E4A23]" />
    },
    {
      step: "02",
      name: "The Clay Hearth",
      hindi: "मिट्टी का चूल्हा",
      desc: "Sculpting earthen stoves fueled exclusively by sun-dried mango firewood.",
      icon: <Flame className="w-4 h-4 text-[#8E4A23]" />
    },
    {
      step: "03",
      name: "The Consecrated Prasad",
      hindi: "पवित्र ठेकुआ",
      desc: "Kneading stone-ground wheat, jaggery syrup, and pure cow ghee on wooden saanchas.",
      icon: <Utensils className="w-4 h-4 text-[#8E4A23]" />
    },
    {
      step: "04",
      name: "The Choral Geets",
      hindi: "पारंपरिक लोकगीत",
      desc: "Generational hymns sung by women, guiding every movement from kitchen to water.",
      icon: <Music className="w-4 h-4 text-[#8E4A23]" />
    },
    {
      step: "05",
      name: "The Bamboo Daura",
      hindi: "दउरा यात्रा",
      desc: "Carrying nested offerings atop head in ceremonial procession toward the river.",
      icon: <ShoppingBag className="w-4 h-4 text-[#8E4A23]" />
    },
    {
      step: "06",
      name: "The Riparian Ghat",
      hindi: "पवित्र घाट",
      desc: "Community leveling of mud banks, planting sugarcane arches, and lighting clay diyas.",
      icon: <Waves className="w-4 h-4 text-[#8E4A23]" />
    },
    {
      step: "07",
      name: "The Celestial Arghya",
      hindi: "सूर्य अर्घ्य",
      desc: "Standing waist-deep in cold river water to salute the departing and rising sun.",
      icon: <Sun className="w-4 h-4 text-[#8E4A23]" />
    },
    {
      step: "08",
      name: "The Democratic Communion",
      hindi: "लोक प्रसाद",
      desc: "Breaking the 36-hour nirjala fast and distributing prasad universally without hierarchy.",
      icon: <Users className="w-4 h-4 text-[#8E4A23]" />
    }
  ];

  return (
    <section id="introduction" className="py-20 md:py-28 bg-[#FAF7F0] border-b border-[#EADEC9] text-[#2C221E] font-inter">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Curatorial Essay Section (2-Column Editorial Spread) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* Left Column: Thesis & Pull Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-[#EADEC9] pb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#8E4A23] font-bold">
                CURATORIAL STATEMENT · संपादकीय दृष्टिकोण
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#2C221E] font-bold leading-tight">
              An Unmediated Communion with Nature
            </h2>

            {/* Editorial Pull Quote */}
            <div className="p-6 border-l-2 border-[#8E4A23] bg-white border-y border-r border-[#EADEC9] space-y-2">
              <p className="font-serif italic text-base sm:text-lg text-[#5C2E16] leading-relaxed">
                &ldquo;In Chhath, nature is not a backdrop to prayer — the river, the earth, and the cosmic sun are themselves the living sanctum.&rdquo;
              </p>
              <span className="font-mono text-[10px] text-[#7D6B58] block uppercase tracking-wider">
                — Ethnomusicology &amp; Heritage Field Notes, Bihar
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5C2E16] leading-relaxed">
              Unlike temple-centric rituals, Chhath requires no priests, no enclosed shrines, and no institutional mediators. Every devotee becomes their own officiant, standing directly in the living current of the river under an open autumn sky.
            </p>
          </div>

          {/* Right Column: Historical Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#EADEC9] pb-3 flex justify-between items-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#7D6B58]">
                LIVING HERITAGE ATTRIBUTES
              </span>
              <span className="font-mono text-[10px] text-[#8E4A23]">
                4 PILLARS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-5 bg-white border border-[#EADEC9] space-y-2">
                <span className="font-mono text-[10px] text-[#8E4A23] font-bold uppercase">01 / SOLAR DUALITY</span>
                <h3 className="font-bold text-[#2C221E] text-sm">Gratitude to Sunset &amp; Dawn</h3>
                <p className="text-[#5C2E16] leading-relaxed font-normal">
                  The only major festival honoring the setting sun before welcoming the dawn, affirming that beginnings and endings are equal celestial cycles.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#EADEC9] space-y-2">
                <span className="font-mono text-[10px] text-[#8E4A23] font-bold uppercase">02 / EGALITARIAN SPACE</span>
                <h3 className="font-bold text-[#2C221E] text-sm">Casteless Riverbanks</h3>
                <p className="text-[#5C2E16] leading-relaxed font-normal">
                  All devotees share the same bank, stand in the same current, and receive the identical prasad from bamboo trays regardless of social hierarchy.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#EADEC9] space-y-2">
                <span className="font-mono text-[10px] text-[#8E4A23] font-bold uppercase">03 / ORGANIC MATERIALITY</span>
                <h3 className="font-bold text-[#2C221E] text-sm">Earth, Bamboo &amp; Grain</h3>
                <p className="text-[#5C2E16] leading-relaxed font-normal">
                  No artificial compounds or synthetic goods. Ritual items are crafted exclusively from woven river bamboo, raw terracotta, and season harvest fruits.
                </p>
              </div>

              <div className="p-5 bg-white border border-[#EADEC9] space-y-2">
                <span className="font-mono text-[10px] text-[#8E4A23] font-bold uppercase">04 / AUSTERE TAPASYA</span>
                <h3 className="font-bold text-[#2C221E] text-sm">The 36-Hour Nirjala Vow</h3>
                <p className="text-[#5C2E16] leading-relaxed font-normal">
                  Devotees (vrati) observe 36 continuous hours of fast without a drop of water, displaying unmatched endurance, mental fortitude, and serene prayer.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* The 8-Stage Ritual Continuum (Architectural Horizontal Flow) */}
        <div className="space-y-6 pt-4 border-t border-[#EADEC9]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#EADEC9] pb-3">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2C221E]">
                The Spatial Continuum: From Hearth to the Sun
              </h3>
              <span className="font-yatra text-sm text-[#8E4A23] block">
                घर से घाट और सूर्य तक की यात्रा
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#7D6B58] uppercase tracking-wider">
              8-STAGE ARCHIVAL CHRONOLOGY
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {continuumStages.map((st) => (
              <div
                key={st.step}
                className="p-4 bg-white border border-[#EADEC9] flex flex-col justify-between space-y-3 hover:border-[#8E4A23] transition-colors group"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center border-b border-[#EADEC9]/60 pb-2">
                    <span className="font-mono text-[11px] font-bold text-[#8E4A23]">
                      STAGE {st.step}
                    </span>
                    {st.icon}
                  </div>
                  <h4 className="font-bold text-[#2C221E] text-sm group-hover:text-[#8E4A23] transition-colors">
                    {st.name}
                  </h4>
                  <span className="font-noto text-xs text-[#8E4A23] block">
                    {st.hindi}
                  </span>
                  <p className="text-[#5C2E16] text-[11px] leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
