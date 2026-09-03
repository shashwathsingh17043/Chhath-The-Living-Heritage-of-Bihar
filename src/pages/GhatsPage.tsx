import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiharHeritageMap } from "../components/map/BiharHeritageMap";
import { RiverJourney } from "../components/map/RiverJourney";
import { SunriseSunsetInteraction } from "../components/map/SunriseSunsetInteraction";
import { ArrowLeft, Layers, Globe } from "lucide-react";

export const GhatsPage: React.FC = () => {
  // Set SEO tags on mount
  useEffect(() => {
    document.title = "Sacred Geography — Ghats, Rivers & Sun Temples | Chhath Heritage Archive";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Explore the sacred geography of Chhath Puja in Bihar. Discover the interactive map, ghat organization, river connections, and sun temples."
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#5C2E16] pb-24 pt-28 font-inter">
      {/* Texture grain overlay */}
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none z-0" />

      <div className="max-w-6xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-[#EADEC9] pb-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-xs font-semibold text-[#8E4A23] hover:text-[#6E3214] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Return Home · मुखपृष्ठ</span>
          </Link>
          <span className="text-xs text-[#7D6B58] font-semibold">
            Geographic Archives · <span className="font-noto font-normal">भौगोलिक संग्रह</span>
          </span>
        </div>

        {/* Hero Section */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs text-[#8E4A23] font-semibold block">
            Sacred Geography &amp; Water Heritage · <span className="font-noto font-normal">छठ का भूगोल</span>
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            Rivers, Ghats &amp; Sacred Waters
          </h1>
          <span className="font-yatra text-2xl text-[#8E4A23] block -mt-1">
            नदी, घाट और लोकजीवन
          </span>
          <p className="text-base md:text-lg text-[#2C221E] leading-relaxed font-medium">
            Standing chest-deep in running river water offering Arghya to the sun is not merely visual ritual — it is a profound living engagement with Bihar's hydrology, riparian geography, and community ecology.
          </p>
          <p className="text-xs text-[#6B5B52] leading-relaxed max-w-2xl font-medium">
            While Chhath is traditionally celebrated along running riverfronts like the Ganga, Gandak, and Kosi, regional adaptations across history have also centered around historic temple kunds, ponds, stepwells, and family rainwater tanks.
          </p>
        </div>

        {/* SECTION 1: THE INTERACTIVE BIHAR HERITAGE MAP */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 text-[#8E4A23]">
            <Layers className="w-5 h-5" />
            <h2 className="text-2xl font-bold text-[#2C221E]">
              Interactive Heritage Map · <span className="font-yatra font-normal text-xl text-[#8E4A23]">धरोहर मानचित्र</span>
            </h2>
          </div>
          <BiharHeritageMap />
        </section>

        {/* SECTION 2: RIVER JOURNEY VISUALIZATION */}
        <section className="space-y-6">
          <RiverJourney />
        </section>

        {/* SECTION 3: SUNRISE SUNSET DYNAMIC INTERACTION */}
        <section className="space-y-6">
          <SunriseSunsetInteraction />
        </section>

        {/* SECTION 4: THEMATIC ESSAYS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 text-xs leading-relaxed">
          
          {/* Essay 1: Rivers as Sacred Ecology */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
            <h3 className="font-bold text-base text-[#2C221E]">
              Rivers as Sacred Ecology · <span className="font-yatra text-sm text-[#8E4A23] font-normal">नदी केवल पृष्ठभूमि नहीं है</span>
            </h3>
            <p className="text-[#5C2E16] font-medium leading-relaxed">
              In Chhath, the river is never a passive backdrop. This festival is fundamentally synchronized with the post-monsoon agricultural cycle, riparian flow, and community water management. Devotees standing waist-deep in water embody deep ecological reverence and living commitment to preserving clean river bodies.
            </p>
          </div>

          {/* Essay 2: Ghat Preparation */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
            <h3 className="font-bold text-base text-[#2C221E]">
              Ghat Preparation &amp; Civic Labor · <span className="font-yatra text-sm text-[#8E4A23] font-normal">घाट कैसे तैयार होता है?</span>
            </h3>
            <p className="text-[#5C2E16] font-medium leading-relaxed">
              Preparation of the ghat begins weeks before the festival. Communal voluntary labor (shram daan) desilts the banks, levels stone and mud steps, erects banana leaf and sugarcane canopies, constructs lamp holders, and sweeps pathways across miles.
            </p>
            <div className="p-3 bg-[#FAF7F0] border-l-2 border-[#8E4A23] text-xs text-[#7D6B58] leading-normal italic rounded-r-lg">
              <strong className="text-[#8E4A23]">Contemporary Civic Role:</strong> In modern urban centers like Patna, civic administrations and neighborhood committees deploy pontoon barricades, water aeration, and floodlights.
            </div>
          </div>

          {/* Essay 3: From Home to Sacred Waters */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
            <h3 className="font-bold text-base text-[#2C221E]">
              From Domestic Hearth to Sacred Waters · <span className="font-yatra text-sm text-[#8E4A23] font-normal">घर से घाट तक</span>
            </h3>
            <p className="text-[#5C2E16] font-medium leading-relaxed">
              Chhath demonstrates an extraordinary outward expansion of sacred space: from the intimate purity of the domestic kitchen, to familial labor, to neighborhood lane sanitation, culminating in the democratic communal fraternity of the riverbank.
            </p>
            <div className="text-[11px] text-[#8E4A23] space-y-1.5 pl-2 font-semibold">
              <div>Kitchen Sanctity → Extended Family Labor → Neighborhood Cleaning → Riverbank Gathering → Universal Community Arghya</div>
            </div>
          </div>

          {/* Essay 4: The Diaspora Observance */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl shadow-sm space-y-3">
            <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#8E4A23]" />
              <span>The Global Diaspora Observance · <span className="font-yatra text-sm text-[#8E4A23] font-normal">प्रवास में छठ</span></span>
            </h3>
            <p className="text-[#5C2E16] font-medium leading-relaxed">
              With migratory journeys, Chhath has expanded far beyond Bihar. Across global metropolises from Delhi, Mumbai, and Bengaluru to London, New Jersey, and the Gulf, diaspora communities gather along local rivers, artificial water bodies, and rooftops, demonstrating the resilient, adaptable spirit of this ancient solar festival.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
