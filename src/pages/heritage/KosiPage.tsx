import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, AlertCircle, HelpCircle } from "lucide-react";
import { SourceMetadataCard } from "../../components/ui/SourceMetadataCard";

export const KosiPage: React.FC = () => {
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
            Exhibit CH-KOSI · Museum Record
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            The Kosi Ritual (Votive Canopy &amp; Night Vigil)
          </h1>
          <p className="font-yatra text-base text-[#8E4A23]">
            कोसी भरना · Sugarcane Canopy, Earthen Elephants &amp; Night Vigil
          </p>
        </div>

        {/* Core Description */}
        <div className="p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm text-xs leading-relaxed space-y-6">
          <h3 className="font-bold text-base text-[#2C221E] flex items-center gap-1.5 border-b border-[#EADEC9] pb-2">
            <BookOpen className="w-5 h-5 text-[#8E4A23]" />
            <span>Introduction to the Kosi Ritual · अनुष्ठान का परिचय</span>
          </h3>
          <div className="space-y-3 text-[#5C2E16]">
            <p>
              <em>Kosi Bharna</em> is an elaborate, heartfelt votive rite undertaken during Chhath. It is not an obligatory requirement for all observers; rather, families perform it in gratitude for fulfilled vows (such as the safe birth of a child, recovery from severe illness, or a deep personal wish).
            </p>
            <p>
              <strong>Sacred Architecture:</strong> Following the evening Sandhya Arghya on Day 3, a canopy (mandap) is erected in the central courtyard or at the riverbank using tall, leafy sugarcane stalks (traditionally 5, 7, or more tied together at the top). Beneath this leafy vault, devotees assemble terracotta lamps, earthen kalash, and sculptured clay elephants (hathiya) bathed in vermilion.
            </p>
          </div>

          <div className="pt-2">
            <SourceMetadataCard
              claim="Votive Kosi setups are conducted overnight under a sugarcane canopy with clay lamps and earthen pots."
              hindiClaim="मन्नत के तहत गन्ने के तनों और मिट्टी के बरतनों व दीयों के साथ रातभर कोसी का अनुष्ठान किया जाता है।"
              classification="FOLK TRADITION"
              source="Bihar Tourism"
              sourceType="government"
              region="Bihar"
              verificationStatus="Government Sourced"
              theme="light"
            />
          </div>
        </div>

        {/* Variations & Folk Believes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
          {/* Box 1 */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-3 shadow-sm">
            <h4 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#8E4A23]" />
              <span>Regional &amp; Family Variations · प्रथागत भिन्नता</span>
            </h4>
            <p className="text-[#5C2E16]">
              The specific structure of the Kosi varies by locality and family pledge. In some regions, a precise count of miniature clay pots (kaili) is tiered around the central vessel, while other families decorate twin terracotta elephants with hand-spun threads and turmeric pastes.
            </p>
            <p className="text-[#5C2E16]">
              It is classified as a <strong>Folk Tradition &amp; Regional Practice</strong> because ornamentation and ritual execution adapt to familial vows and ancestral custom.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-6 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl space-y-3 shadow-sm">
            <h4 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#8E4A23]" />
              <span>The Night Vigil &amp; Folk Choruses · रात्रि जागरण</span>
            </h4>
            <p className="text-[#5C2E16]">
              Throughout the dark night between Day 3 and Day 4, neighborhood women and family elders gather around the illuminated canopy to sing traditional <em>Kosi geet</em>. The lamps remain constantly fed with ghee until the congregation marches to the water before dawn.
            </p>
            <p className="text-[11px] text-[#7D6B58] leading-normal italic">
              The continuous glow of the earthen lamps symbolizes the persistence of life, hope, and spiritual consciousness waiting for the solar dawn.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
