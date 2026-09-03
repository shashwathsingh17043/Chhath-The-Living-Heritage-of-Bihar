import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeritageHero } from "../components/heritage/HeritageHero";
import { HeritageMuseum } from "../components/heritage/HeritageMuseum";
import { ArrowLeft, Layers, Users } from "lucide-react";

export const HeritagePage: React.FC = () => {
  // Set SEO tags on mount
  useEffect(() => {
    document.title = "Chhath Ki Heritage — Material Culture and Offerings | Bihar Ki Jeevit Virasat";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore the material culture, sacred vessels, and traditional objects of Chhath Puja, including Soop, Daura, and Thekua."
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#5C2E16] pb-24">
      {/* Hero */}
      <HeritageHero />

      {/* Museum Display Grid */}
      <HeritageMuseum />

      {/* Material Relationships Section (मिट्टी और बाँस की संस्कृति) */}
      <section className="py-16 border-t border-[#EADEC9] bg-[#FAF7F0] relative font-inter">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C221E]">
              Living Material Culture · <span className="font-yatra font-normal text-xl text-[#8E4A23]">मिट्टी और बाँस की संस्कृति</span>
            </h2>
            <p className="text-xs md:text-sm text-[#6B5B52] max-w-lg mx-auto leading-relaxed">
              Chhath Puja represents an organic communion of natural elements, agrarian abundance, and ancestral artisanal labor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-xs">
            {/* Bamboo */}
            <div className="p-6 bg-white border border-[#EADEC9] rounded-2xl space-y-3 shadow-sm text-center">
              <Layers className="w-8 h-8 text-[#8E4A23] mx-auto" />
              <h3 className="font-bold text-sm text-[#2C221E]">
                Bamboo Craft · <span className="font-yatra text-xs text-[#8E4A23]">बाँस शिल्प</span>
              </h3>
              <div className="space-y-2 text-[#6B5B52] text-xs">
                <div>
                  <p className="font-semibold text-[#2C221E]">Soop · सूप (Winnow)</p>
                  <p className="text-[11px]">Primary sacred vessel for presenting Arghya</p>
                </div>
                <div className="h-2 border-t border-[#EADEC9] mx-auto my-1 w-12" />
                <div>
                  <p className="font-semibold text-[#2C221E]">Daura · दउरा (Basket)</p>
                  <p className="text-[11px]">Handwoven basket carried to riverbanks</p>
                </div>
              </div>
            </div>

            {/* Clay */}
            <div className="p-6 bg-white border border-[#EADEC9] rounded-2xl space-y-3 shadow-sm text-center">
              <Layers className="w-8 h-8 text-[#8E4A23] mx-auto" />
              <h3 className="font-bold text-sm text-[#2C221E]">
                Earthen Ceramics · <span className="font-yatra text-xs text-[#8E4A23]">मिट्टी की कला</span>
              </h3>
              <div className="space-y-2 text-[#6B5B52] text-xs">
                <div>
                  <p className="font-semibold text-[#2C221E]">Diya · दीया (Clay Lamp)</p>
                  <p className="text-[11px]">Sacred illuminations along dark riverbanks</p>
                </div>
                <div className="h-2 border-t border-[#EADEC9] mx-auto my-1 w-12" />
                <div>
                  <p className="font-semibold text-[#2C221E]">Kosi · कोसी (Votive Elephant)</p>
                  <p className="text-[11px]">Terracotta shrine for night-long vigil</p>
                </div>
              </div>
            </div>

            {/* Grain */}
            <div className="p-6 bg-white border border-[#EADEC9] rounded-2xl space-y-3 shadow-sm text-center">
              <Layers className="w-8 h-8 text-[#8E4A23] mx-auto" />
              <h3 className="font-bold text-sm text-[#2C221E]">
                Sacred Harvest · <span className="font-yatra text-xs text-[#8E4A23]">अन्न एवं नैवेद्य</span>
              </h3>
              <div className="space-y-2 text-[#6B5B52] text-xs">
                <div>
                  <p className="font-semibold text-[#2C221E]">Thekua · ठेकुआ (Prasad)</p>
                  <p className="text-[11px]">Whole wheat flour, ghee, and desi jaggery</p>
                </div>
                <div className="h-2 border-t border-[#EADEC9] mx-auto my-1 w-12" />
                <div>
                  <p className="font-semibold text-[#2C221E]">Seasonal Produce · ऋतु फल</p>
                  <p className="text-[11px]">Whole sugarcane, coconut, and raw banana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Archive Section (Craft Archive — Coming Soon) */}
      <section className="py-16 border-t border-[#EADEC9] bg-white font-inter">
        <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-4 text-center">
          <Users className="w-10 h-10 text-[#8E4A23] mx-auto" />
          
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#2C221E]">
              Artisan &amp; Craft Registry · <span className="font-yatra font-normal text-xl text-[#8E4A23]">हस्तशिल्प पुरालेख</span>
            </h2>
            <p className="text-xs text-[#7D6B58] font-medium">
              Documenting Master Basket Weavers, Potters, and Toolmakers
            </p>
          </div>

          <p className="text-xs text-[#5C2E16] max-w-xl mx-auto leading-relaxed font-medium">
            An ethnographic register indexing verified interviews, weaving patterns, and terracotta methods of traditional artisans across Bihar. Only authentic field documentation is archived here.
          </p>
        </div>
      </section>

      {/* Concluding history linkages */}
      <div className="mt-12 flex justify-center font-inter">
        <Link
          to="/history"
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#8E4A23] text-[#8E4A23] hover:bg-[#FBEFEB] font-semibold text-xs rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Historical Continuity &amp; Origins · इतिहास देखें</span>
        </Link>
      </div>
    </div>
  );
};
