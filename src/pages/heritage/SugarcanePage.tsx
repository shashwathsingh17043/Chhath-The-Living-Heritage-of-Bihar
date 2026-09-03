import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Layers, CheckCircle } from "lucide-react";
import { SourceMetadataCard } from "../../components/ui/SourceMetadataCard";

export const SugarcanePage: React.FC = () => {
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
            Exhibit CH-SUGARCANE · Agrarian Heritage
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            The Sacred Sugarcane (Whole Stalks with Leaves)
          </h1>
          <p className="font-yatra text-base text-[#8E4A23]">
            ईख (गन्ना) · Agricultural Offering &amp; Votive Canopy Pillar
          </p>
        </div>

        {/* Agricultural Context */}
        <div className="p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm text-xs leading-relaxed space-y-4">
          <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-1.5 border-b border-[#EADEC9] pb-2">
            <BookOpen className="w-5 h-5 text-[#8E4A23]" />
            <span>Agricultural Context &amp; Autumn Harvest · कृषि संदर्भ</span>
          </h3>
          <div className="space-y-3 text-[#5C2E16]">
            <p>
              Sugarcane (<em>Eekh</em> or <em>Ganna</em>) is among the most prominent agricultural offerings of Chhath Puja. Celebrated during the lunar month of Kartika (October–November), Chhath coincides with the beginning of the northern Indian sugarcane harvest. Devotees offer the very first harvest of their fields to the Sun and nature before consuming any part of it themselves.
            </p>
            <p>
              Offered whole—with roots, nodes, and lush green leaves intact—the sugarcane symbolizes unbroken life, agrarian fertility, and gratitude for sustaining irrigation waters.
            </p>
          </div>
        </div>

        {/* Observed Practices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
          {/* Box 1 */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-3 shadow-sm">
            <h4 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#8E4A23]" />
              <span>Ghat Altar &amp; Daura Placement · वेदी पर सजावट</span>
            </h4>
            <div className="space-y-2.5 text-[#5C2E16]">
              <p>
                Tall sugarcane stalks are stood upright beside family riverbank altars (vedis) and bound around daura baskets. Their green tops shelter the offerings, demarcating each family’s sacred space along crowded riverfronts.
              </p>
              <p className="text-[11px] text-[#7D6B58] italic border-l-2 border-[#EADEC9] pl-2.5">
                Note: This practice reflects unadulterated agrarian thanksgiving without requiring mythological intermediaries.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="p-6 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl space-y-3 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#8E4A23]" />
                <span>Pillars of the Kosi Canopy · कोसी का छत्र</span>
              </h4>
              <div className="space-y-2 mt-2 text-[#5C2E16]">
                <p>
                  During the overnight votive Kosi vigil, several whole stalks (commonly 5 or 7, though counts vary by family vow) are tied together at their leaf tips to construct an open-air pyramidal tent.
                </p>
                <p>
                  This living green structure shelters flickering terracotta lamps against autumn breezes, creating an intimate sanctuary of golden illumination.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <SourceMetadataCard
                claim="Sugarcane stalks are used as offerings and to build canopy structures during the Kosi ritual."
                hindiClaim="साबुत गन्ने का उपयोग अर्घ्य में और कोसी मंडप बनाने के लिए किया जाता है।"
                classification="OBSERVED PRACTICE"
                source="Bihar Tourism"
                sourceType="government"
                region="Bihar / Purvanchal"
                verificationStatus="Government Sourced"
                theme="light"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
