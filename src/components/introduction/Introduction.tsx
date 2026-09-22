import React from "react";
import { Home, Flame, Utensils, Music, ShoppingBag, Waves, Sun, Users } from "lucide-react";

export const Introduction: React.FC = () => {
  const continuumStages = [
    {
      step: "01",
      name: "The Domestic Sanctum",
      hindi: "घर की शुचिता",
      desc: "Complete washing, purification, and spiritual dedication of the household.",
      icon: <Home className="w-4 h-4 text-[#B9653B]" />
    },
    {
      step: "02",
      name: "The Clay Hearth",
      hindi: "मिट्टी का चूल्हा",
      desc: "Sculpting earthen stoves fueled exclusively by sun-dried mango firewood.",
      icon: <Flame className="w-4 h-4 text-[#E97824]" />
    },
    {
      step: "03",
      name: "The Consecrated Prasad",
      hindi: "पवित्र ठेकुआ",
      desc: "Kneading stone-ground wheat, jaggery syrup, and pure cow ghee on wooden saanchas.",
      icon: <Utensils className="w-4 h-4 text-[#B9653B]" />
    },
    {
      step: "04",
      name: "The Choral Geets",
      hindi: "पारंपरिक लोकगीत",
      desc: "Generational hymns sung by women, guiding every movement from kitchen to water.",
      icon: <Music className="w-4 h-4 text-[#A93120]" />
    },
    {
      step: "05",
      name: "The Bamboo Daura",
      hindi: "दउरा यात्रा",
      desc: "Carrying nested offerings atop head in ceremonial procession toward the river.",
      icon: <ShoppingBag className="w-4 h-4 text-[#B9653B]" />
    },
    {
      step: "06",
      name: "The Riparian Ghat",
      hindi: "पवित्र घाट",
      desc: "Community leveling of mud banks, planting sugarcane arches, and lighting clay diyas.",
      icon: <Waves className="w-4 h-4 text-[#173E4F]" />
    },
    {
      step: "07",
      name: "The Celestial Arghya",
      hindi: "सूर्य अर्घ्य",
      desc: "Standing waist-deep in cold river water to salute the departing and rising sun.",
      icon: <Sun className="w-4 h-4 text-[#E97824]" />
    },
    {
      step: "08",
      name: "The Democratic Communion",
      hindi: "लोक प्रसाद",
      desc: "Breaking the 36-hour nirjala fast and distributing prasad universally without hierarchy.",
      icon: <Users className="w-4 h-4 text-[#A93120]" />
    }
  ];

  return (
    <section id="introduction" className="py-20 md:py-28 bg-[#FFF8EC] border-b border-[#D8C5AF] text-[#2B1B16] font-sans scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16">
        
        {/* Curatorial Essay Section (Editorial Split Spread) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* Left Column: Thesis, Image & Pull Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-b border-[#D8C5AF] pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A93120] font-bold block">
                CURATORIAL ESSAY · संपादकीय दृष्टिकोण
              </span>
            </div>

            <div className="space-y-2">
              <span className="font-hindi text-lg text-[#A93120] block font-semibold leading-normal py-0.5">
                छठ क्या है? प्रकृति और लोक का पावन समन्वय
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2B1B16] font-bold leading-tight">
                An Unmediated Communion with Nature
              </h2>
            </div>

            <p className="text-base text-[#2B1B16] leading-relaxed font-normal">
              Unlike temple-centric rituals, Chhath requires no priests, no enclosed shrines, and no institutional mediators. Every devotee becomes their own officiant, standing directly in the living current of the river under an open autumn sky.
            </p>

            {/* Documentary Image */}
            <div className="border border-[#D8C5AF] bg-white p-3 shadow-sm rounded-xs">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#2B1B16]/5">
                <img
                  src="/assets/images/images (1).jpg"
                  alt="Community members gathering and preparing the river ghats together"
                  className="w-full h-full object-cover object-center filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-2 text-[11px] font-mono text-[#5C4A3E] flex justify-between items-center px-1">
                <span>DOCUMENTARY IMAGE: Ghat Gathering</span>
                <span className="text-[#A93120]">BIHAR ARCHIVE</span>
              </div>
            </div>

            {/* Editorial Pull Quote */}
            <div className="p-5 border-l-3 border-[#E97824] bg-white border-y border-r border-[#D8C5AF] shadow-xs space-y-2">
              <p className="font-serif italic text-base sm:text-lg text-[#2B1B16] leading-relaxed">
                &ldquo;In Chhath, nature is not a backdrop to prayer — the river, the earth, and the cosmic sun are themselves the living sanctum.&rdquo;
              </p>
              <span className="font-mono text-[11px] text-[#5C4A3E] block uppercase tracking-wider font-medium">
                — Ethnomusicology &amp; Heritage Field Notes, Bihar
              </span>
            </div>
          </div>

          {/* Right Column: Four Attributes with Distinct Visual Identities (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-[#D8C5AF] pb-3 flex justify-between items-center">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5C4A3E] font-semibold">
                LIVING HERITAGE ATTRIBUTES
              </span>
              <span className="font-mono text-xs text-[#A93120] font-bold">
                4 PILLARS · मुख्य स्तंभ
              </span>
            </div>

            {/* 4 Distinct Identity Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Attribute 1: Solar Duality (Saffron Identity) */}
              <div className="p-6 bg-white border border-[#D8C5AF] border-t-4 border-t-[#E97824] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E97824]">
                      01 / SOLAR DUALITY
                    </span>
                    <div className="p-2 bg-[#E97824]/10 rounded text-[#E97824]">
                      <Sun className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2B1B16]">
                      Gratitude to Sunset &amp; Dawn
                    </h3>
                    <span className="font-hindi text-xs text-[#E97824] block mt-0.5 leading-normal py-0.5">
                      संध्या और उषा अर्घ्य का संतुलन
                    </span>
                  </div>
                  <p className="text-sm text-[#2B1B16]/85 leading-relaxed font-normal">
                    The only major festival honoring the setting sun before welcoming the dawn, affirming that beginnings and endings are equal celestial cycles.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D8C5AF]/40 text-[11px] font-mono text-[#5C4A3E]">
                  FOCUS: COSMIC BALANCE
                </div>
              </div>

              {/* Attribute 2: Egalitarian Space (River Blue Identity) */}
              <div className="p-6 bg-white border border-[#D8C5AF] border-t-4 border-t-[#173E4F] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#173E4F]">
                      02 / EGALITARIAN SPACE
                    </span>
                    <div className="p-2 bg-[#173E4F]/10 rounded text-[#173E4F]">
                      <Waves className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2B1B16]">
                      Casteless Riverbanks
                    </h3>
                    <span className="font-hindi text-xs text-[#173E4F] block mt-0.5 leading-normal py-0.5">
                      नदी तट पर समतामूलक सहभागिता
                    </span>
                  </div>
                  <p className="text-sm text-[#2B1B16]/85 leading-relaxed font-normal">
                    All devotees share the same bank, stand in the same current, and receive the identical prasad from bamboo trays regardless of social hierarchy.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D8C5AF]/40 text-[11px] font-mono text-[#5C4A3E]">
                  FOCUS: COLLECTIVE COMMUNION
                </div>
              </div>

              {/* Attribute 3: Organic Materiality (Clay Terracotta Identity) */}
              <div className="p-6 bg-white border border-[#D8C5AF] border-t-4 border-t-[#B9653B] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#B9653B]">
                      03 / ORGANIC MATERIALITY
                    </span>
                    <div className="p-2 bg-[#B9653B]/10 rounded text-[#B9653B]">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2B1B16]">
                      Earth, Bamboo &amp; Grain
                    </h3>
                    <span className="font-hindi text-xs text-[#B9653B] block mt-0.5 leading-normal py-0.5">
                      माटी, बाँस और कृषि उपज
                    </span>
                  </div>
                  <p className="text-sm text-[#2B1B16]/85 leading-relaxed font-normal">
                    No artificial compounds or synthetic goods. Ritual items are crafted exclusively from woven river bamboo, raw terracotta, and season harvest fruits.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D8C5AF]/40 text-[11px] font-mono text-[#5C4A3E]">
                  FOCUS: NATURAL PURITY
                </div>
              </div>

              {/* Attribute 4: Austere Tapasya (Vermilion Identity) */}
              <div className="p-6 bg-white border border-[#D8C5AF] border-t-4 border-t-[#A93120] shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#A93120]">
                      04 / AUSTERE TAPASYA
                    </span>
                    <div className="p-2 bg-[#A93120]/10 rounded text-[#A93120]">
                      <Flame className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-[#2B1B16]">
                      The 36-Hour Nirjala Vow
                    </h3>
                    <span className="font-hindi text-xs text-[#A93120] block mt-0.5 leading-normal py-0.5">
                      36 घंटे का अखंड निर्जला व्रत
                    </span>
                  </div>
                  <p className="text-sm text-[#2B1B16]/85 leading-relaxed font-normal">
                    Devotees (vrati) observe 36 continuous hours of fast without a drop of water, displaying unmatched endurance, mental fortitude, and serene prayer.
                  </p>
                </div>
                <div className="pt-2 border-t border-[#D8C5AF]/40 text-[11px] font-mono text-[#5C4A3E]">
                  FOCUS: SPIRITUAL ENDURANCE
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* The 8-Stage Spatial Continuum Flow */}
        <div className="space-y-6 pt-6 border-t border-[#D8C5AF]">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-[#D8C5AF] pb-3">
            <div>
              <span className="font-hindi text-sm text-[#A93120] font-semibold block leading-normal py-0.5">
                घर से घाट और सूर्य तक की पावन यात्रा
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1B16]">
                The Spatial Continuum: From Hearth to the Sun
              </h3>
            </div>
            <span className="font-mono text-xs text-[#5C4A3E] uppercase tracking-wider font-semibold">
              8-STAGE LITURGICAL SEQUENCE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {continuumStages.map((st) => (
              <div
                key={st.step}
                className="p-5 bg-white border border-[#D8C5AF] shadow-xs flex flex-col justify-between space-y-3 hover:border-[#A93120] transition-colors group"
              >
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center border-b border-[#D8C5AF]/50 pb-2">
                    <span className="font-mono text-xs font-bold text-[#A93120]">
                      STAGE {st.step}
                    </span>
                    <div className="p-1.5 bg-[#FFF8EC] rounded border border-[#D8C5AF]/60">
                      {st.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#2B1B16] group-hover:text-[#A93120] transition-colors">
                      {st.name}
                    </h4>
                    <span className="font-hindi text-xs text-[#A93120] block mt-0.5 font-medium leading-normal py-0.5">
                      {st.hindi}
                    </span>
                  </div>
                  <p className="text-[#2B1B16]/80 text-xs leading-relaxed font-normal">
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
