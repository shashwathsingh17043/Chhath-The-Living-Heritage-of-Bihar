import React from "react";

export const HeritageHero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 bg-[#FDFBF7] text-[#2C221E] overflow-hidden border-b border-[#EADEC9] font-inter">
      {/* Delicate paper texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-20 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-8">
        
        {/* Archival metadata header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EADEC9] pb-3 text-[10px] font-mono text-[#7D6B58]">
          <div className="flex items-center gap-2">
            <span className="text-[#8E4A23] font-bold uppercase tracking-widest">
              COLLECTION 03 · MATERIAL CULTURE
            </span>
            <span>•</span>
            <span className="uppercase tracking-wider">
              ORGANIC CRAFTSMANSHIP &amp; HARVEST PRASAD
            </span>
          </div>
          <div className="uppercase">
            ETHNOGRAPHIC INVENTORY: 6 SACRED ARTIFACTS
          </div>
        </div>

        {/* 12-Column Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Curatorial Description (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2C221E] tracking-tight leading-[1.05]">
                The Material Heritage of Chhath
              </h1>
              <span className="font-yatra text-2xl sm:text-3xl text-[#8E4A23] block mt-1 font-normal">
                छठ की भौतिक संस्कृति एवं पवित्र सामग्री
              </span>
            </div>

            <div className="h-[1.5px] bg-[#8E4A23] w-16 my-4" />

            <p className="text-base sm:text-lg text-[#2C221E] leading-relaxed font-normal">
              An unbroken living heritage forged from handwoven river bamboo, raw terracotta earth, freshly harvested grains, and solar light — requiring no synthetic or plastic components.
            </p>

            <p className="font-noto text-xs sm:text-sm text-[#7D6B58] leading-relaxed italic">
              बाँस, मिट्टी, अन्न और सूर्य से जुड़ी एक पवित्र और स्वावलंबी लोक संस्कृति।
            </p>

            {/* Core Philosophy Banner */}
            <div className="p-5 border-l-2 border-[#8E4A23] bg-[#FAF7F0] border-y border-r border-[#EADEC9] space-y-1.5 max-w-xl">
              <h3 className="font-serif italic font-bold text-sm text-[#2C221E]">
                &ldquo;Chhath is not merely observed — it is handcrafted and shared.&rdquo;
              </h3>
              <p className="font-noto text-xs text-[#7D6B58] leading-relaxed">
                &ldquo;छठ को केवल देखा नहीं जाता — उसे सूप, दउरा, चूल्हे और प्रसाद से रचा जाता है।&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Authentic Exhibition Specimen Case (5 cols) */}
          <div className="lg:col-span-5">
            <div className="border border-[#EADEC9] bg-[#FAF7F0] p-4 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden border border-[#EADEC9] bg-stone-100">
                <img
                  src="/assets/images/soop.webp"
                  alt="Traditional woven bamboo soop prepared with offerings"
                  className="w-full h-full object-cover filter contrast-[1.02]"
                />
                <div className="absolute top-2 right-2 bg-[#2C221E]/80 text-white px-2 py-0.5 text-[9px] font-mono tracking-widest">
                  EXHIBIT SPECIMEN · HANDWOVEN SOOP
                </div>
              </div>

              <div className="mt-3 px-1 space-y-1 text-[10px] font-mono text-[#7D6B58]">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-[#8E4A23]">CAT. REF: CH-SOOP-01</span>
                  <span>MATERIAL: SPLIT BAMBOO &amp; VERMILION</span>
                </div>
                <p className="font-serif italic text-xs text-[#5C2E16]">
                  &ldquo;A winnowing tray hand-split from fresh green bamboo, holding the seasonal agricultural offerings presented directly to the Sun.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
