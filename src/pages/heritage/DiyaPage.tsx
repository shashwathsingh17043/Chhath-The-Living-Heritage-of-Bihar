import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Layers, Info } from "lucide-react";
import { SourceMetadataCard } from "../../components/ui/SourceMetadataCard";

export const DiyaPage: React.FC = () => {
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
            Exhibit CH-DIYA · Museum Record
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            The Earthen Clay Lamp (Diya)
          </h1>
          <p className="font-yatra text-base text-[#8E4A23]">
            माटी का दीया · Terracotta Oil Lamp of the Riverbanks
          </p>
        </div>

        {/* Observable Practice */}
        <div className="p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm text-xs leading-relaxed space-y-6">
          <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-1.5 border-b border-[#EADEC9] pb-2">
            <BookOpen className="w-5 h-5 text-[#8E4A23]" />
            <span>Observable Ritual Practice · प्रत्यक्ष व्यावहारिक अभ्यास</span>
          </h3>
          <p className="text-[#5C2E16]">
            During Chhath Puja, hundreds of small terracotta oil lamps (diyas) illuminate the ghats during Sandhya Arghya and Usha Arghya. Filled with pure cow ghee or cold-pressed mustard oil and fitted with hand-rolled cotton wicks, these lamps line the mud altars (vedis) along the water’s edge and blaze under the overnight Kosi canopy.
          </p>

          <div className="pt-2">
            <SourceMetadataCard
              claim="Clay oil lamps (diyas) are lit by the riverbank and sugarcane canopies during evening and dawn rituals."
              hindiClaim="घाटों पर शाम और सुबह प्रकाश करने तथा कोसी भरने के समय मिट्टी के दीये प्रज्ज्वलित किए जाते हैं।"
              classification="OBSERVED PRACTICE"
              source="Bihar Tourism"
              sourceType="government"
              region="Universal"
              verificationStatus="Government Sourced"
              theme="light"
            />
          </div>
        </div>

        {/* Symbolic Interpretations vs Folk Belief */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
          {/* Box 1 */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-3 shadow-sm">
            <h4 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#8E4A23]" />
              <span>Cultural &amp; Elemental Resonance · सांस्कृतिक व्याख्या</span>
            </h4>
            <p className="text-[#5C2E16]">
              In folk philosophy, the earthen diya embodies the harmony of the classical natural elements (panch-tattva). Crafted from riverbank clay (Earth), molded with river water (Water), ignited into flame (Fire), sustained by oxygen (Air), and open to the vast celestial sky (Space/Ether).
            </p>
            <p className="text-[11px] text-[#7D6B58] italic border-l-2 border-[#EADEC9] pl-2.5">
              Note: This philosophical synthesis is recognized in cultural anthropology as an interpretive worldview rather than a rigid liturgical decree.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-6 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl space-y-3 shadow-sm">
            <h4 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
              <Info className="w-4 h-4 text-[#8E4A23]" />
              <span>Pottery Guilds &amp; Living Community · कुम्भकारी शिल्प</span>
            </h4>
            <p className="text-[#5C2E16]">
              The immense requirement for earthen lamps places rural potters (kumhars) at the core of festival preparation. Months before Chhath, potters harvest river silt and shape thousands of lamps on manually spun wooden wheels.
            </p>
            <p className="text-[#5C2E16]">
              The gentle, flickering flame offers humble human gratitude toward the immense solar source that animates all planetary life.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
