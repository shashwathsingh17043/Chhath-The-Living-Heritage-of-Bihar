import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Utensils, Award, HelpCircle } from "lucide-react";
import { SourceMetadataCard } from "../../components/ui/SourceMetadataCard";

export const ThekuaPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#5C2E16] pb-24 pt-20 font-inter">
      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay opacity-15 pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        
        {/* Navigation back */}
        <Link
          to="/heritage"
          className="inline-flex items-center gap-1.5 text-xs text-[#8E4A23] hover:text-[#6E3214] font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Material Archive · विरासत दीर्घा</span>
        </Link>

        {/* Page Header */}
        <div className="space-y-2 border-b border-[#EADEC9] pb-6">
          <span className="text-xs text-[#8E4A23] font-semibold block">
            Exhibit CH-THEKUA · Culinary Heritage
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            The Sacred Thekua (Prasad Offering)
          </h1>
          <p className="font-yatra text-base text-[#8E4A23]">
            ठेकुआ · Sacred Whole-Wheat, Ghee &amp; Jaggery Mahaprasad
          </p>
        </div>

        {/* Core Prasad Description */}
        <div className="p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm text-xs leading-relaxed space-y-6">
          <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-1.5 border-b border-[#EADEC9] pb-2">
            <Award className="w-5 h-5 text-[#8E4A23]" />
            <span>Role as Sacred Offering · महाप्रसाद की महत्ता</span>
          </h3>
          <div className="space-y-3 text-[#5C2E16]">
            <p>
              Thekua is the revered signature prasad of Chhath Puja. Prepared in an exclusively sanctified domestic area, stone-ground coarse whole wheat flour is kneaded with molten jaggery (gur) or sugar syrup and generous amounts of pure cow ghee (moyen). The dough is shaped without excess moisture and deep-fried slowly in pure ghee until golden-brown and crisp.
            </p>
            <p>
              <strong>Household &amp; Regional Variations:</strong> While the foundational recipe requires wheat, ghee, and jaggery, variations abound across households. Some families incorporate chopped dry coconut, crushed green cardamom, or toasted fennel seeds (saunf), while others substitute jaggery with unrefined sugar.
            </p>
          </div>

          <div className="pt-2">
            <SourceMetadataCard
              claim="Thekua is the primary wheat-and-jaggery prasad cookie prepared for Chhath, with optional spices and variations depending on household tradition."
              hindiClaim="गेहूं के आटे, शुद्ध घी और गुड़ या चीनी से बना ठेकुआ छठ का मुख्य प्रसाद है। नारियल/सौंफ/इलायची जैसे वैकल्पिक मसाले पारिवारिक विधि के अनुसार जोड़े जा सकते हैं।"
              classification="OBSERVED PRACTICE"
              source="Bihar Tourism"
              sourceType="government"
              region="Bihar / Purvanchal"
              verificationStatus="Government Sourced"
              theme="light"
            />
          </div>
        </div>

        {/* Dedicated Saancha Section */}
        <div className="p-6 md:p-8 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl text-xs leading-relaxed space-y-4 relative shadow-sm">
          <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-1.5 border-b border-[#EADEC9] pb-2">
            <BookOpen className="w-5 h-5 text-[#8E4A23]" />
            <span>The Traditional Wooden Mould (Saancha) · लकड़ी का साँचा</span>
          </h3>

          <p className="text-[#5C2E16]">
            Before frying, raw dough portions are pressed firmly onto hand-carved wooden moulds known as <em>saancha</em>. These moulds are carved from seasoned mango wood or shisham by village carpenters.
          </p>

          <div className="p-4 bg-white border border-[#EADEC9] rounded-xl space-y-2">
            <h4 className="font-bold text-sm text-[#8E4A23]">Folk Motifs &amp; Patterns · साँचे की आकृतियाँ</h4>
            <p className="text-xs text-[#2C221E] font-semibold">
              &ldquo;Traditional geometric and floral designs appear on the face of the wooden press.&rdquo;
            </p>
            <p className="text-xs text-[#6B5B52] leading-relaxed">
              Common relief carvings include radiating sunbursts, pipal leaves, lotuses, and concentric grain ears. In many multi-generational homes, an heirloom wooden mould is preserved and handed down across generations of maternal matriarchs.
            </p>
          </div>

          <div className="p-3.5 bg-white border border-[#EADEC9] rounded-xl text-xs text-[#6B5B52] flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-[#8E4A23] flex-shrink-0 mt-0.5" />
            <p>
              <strong>Academic Context:</strong> While popular folklore assigns solar symbolism to the radiating carvings, ethnographers view them as artistic expressions of rural folk crafts rather than codified religious dogma.
            </p>
          </div>
        </div>

        {/* Link to Kitchen Recipes */}
        <div className="p-5 border border-[#EADEC9] bg-white rounded-2xl flex items-center justify-between gap-4 flex-wrap shadow-sm">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#2C221E]">
              Sacred Kitchen &amp; Recipe · <span className="font-yatra text-xs text-[#8E4A23]">पाक विधि</span>
            </h4>
            <p className="text-xs text-[#7D6B58]">View step-by-step preparation, clay chulha protocols, and ingredient proportions</p>
          </div>
          <Link
            to="/kitchen"
            className="flex items-center gap-1.5 px-4 py-2.5 bg-[#8E4A23] text-white hover:bg-[#6E3214] font-semibold rounded-xl text-xs transition-colors shadow-sm"
          >
            <Utensils className="w-4 h-4" />
            <span>View Kitchen Guide · रसोई विधि</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
