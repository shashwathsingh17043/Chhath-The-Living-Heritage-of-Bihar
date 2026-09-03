import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Music, CheckCircle } from "lucide-react";
import { SourceMetadataCard } from "../../components/ui/SourceMetadataCard";

export const SoopPage: React.FC = () => {
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
            Exhibit CH-SOOP · Museum Record
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            The Sacred Soop (Bamboo Winnowing Tray)
          </h1>
          <p className="font-yatra text-base text-[#8E4A23]">
            सूप · Sacred Handcrafted Bamboo Offering Vessel
          </p>
        </div>

        {/* Slow CSS Rotation Display Case */}
        <div className="flex justify-center py-6">
          <div className="relative w-72 h-72 rounded-2xl bg-white border border-[#EADEC9] shadow-sm p-4 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8E4A23]/5 to-[#C87A53]/5 opacity-60" />
            
            {/* Spinning/Slowly rotating visual plate representing the bamboo weave */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="w-48 h-48 rounded-full border-4 border-dashed border-[#8E4A23]/40 bg-[#FAF7F0] flex flex-col items-center justify-center text-[#8E4A23] shadow-inner select-none"
            >
              <span className="font-bold text-sm">Bamboo Weave</span>
              <span className="font-yatra text-base">बाँस बुनाई</span>
            </motion.div>
            <div className="absolute bottom-4 text-[11px] text-[#7D6B58] font-semibold">
              Handcrafted Bamboo Weave · बाँस शिल्प
            </div>
          </div>
        </div>

        {/* Content Tabs / Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
          {/* Column 1: Observed Practice & Materials */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#8E4A23]" />
                <span>Material &amp; Traditional Practice · सामग्री और प्रचलन</span>
              </h3>
              
              <div className="space-y-2.5 mt-3 text-[#5C2E16]">
                <p>
                  In the folk tradition of Chhath, the handwoven bamboo winnowing tray (soop) serves as the primary ceremonial vessel for bearing sacred offerings. Standing chest-deep in running river water, the devotee (vrati) holds the laden soop with both hands to offer Arghya to the setting and rising sun.
                </p>
                <p>
                  <strong>Agrarian Symbolism:</strong> Originating from the rural agricultural implement used to separate grain from chaff, the soop embodies simplicity, natural harvest gratitude, and household sanctification.
                </p>
                <p className="text-[11px] text-[#7D6B58] italic border-l-2 border-[#EADEC9] pl-2.5">
                  Note: While brass or copper winnowing vessels have appeared in some contemporary urban households, organic bamboo remains universally preferred across traditional folk communities.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-[#EADEC9]/55 mt-auto">
              <SourceMetadataCard
                claim="Soop is traditionally woven from bamboo and used to hold offerings during Arghya, though metal alternatives may be used."
                hindiClaim="सूप का उपयोग अर्घ्य देने के लिए किया जाता है और यह पारंपरिक रूप से बाँस का बना होता है, यद्यपि आधुनिक संदर्भों में पीतल/तांबे के सूप का प्रयोग भी देखा गया है।"
                classification="OBSERVED PRACTICE"
                source="Bihar Tourism"
                sourceType="government"
                region="Bihar / Purvanchal"
                verificationStatus="Government Sourced"
                theme="light"
              />
            </div>
          </div>

          {/* Column 2: Arrangement & Journey */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-4 shadow-sm">
            <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#8E4A23]" />
              <span>Offering Arrangement &amp; Procession · प्रसाद की व्यवस्था</span>
            </h3>
            
            <div className="space-y-2.5 text-[#5C2E16]">
              <p>
                Each family arranges their soop according to cherished generational customs. Offerings typically include freshly fried ghee thekua, round rice-flour laddu (kasaar), coconuts, sacred pomelo (dhab nimbu), water chestnuts (singhara), and fresh seasonal autumn produce.
              </p>
              <p>
                <strong>Procession to the River:</strong> Prepared at home under strict domestic sanctity, individual soops are nested safely inside the larger daura basket and borne aloft toward the riverbanks accompanied by devotional singing.
              </p>
              <div className="p-3.5 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl text-[11px] text-[#5C2E16]">
                <strong>Archival Classification:</strong> Folk Tradition &amp; Material Culture · <span className="font-yatra">लोक परंपरा</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Songs Link */}
        <div className="p-5 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl flex items-center justify-between gap-4 flex-wrap shadow-sm">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#2C221E]">
              Songs of the Soop &amp; Arghya · <span className="font-yatra text-xs text-[#8E4A23]">सूप से जुड़े लोकगीत</span>
            </h4>
            <p className="text-xs text-[#7D6B58]">Explore traditional folk geet narrating the decoration of offerings and riverbank Arghya</p>
          </div>
          <Link
            to="/songs?ritual=sandhya-arghya"
            className="flex items-center gap-1.5 text-xs text-[#8E4A23] hover:text-[#6E3214] font-semibold"
          >
            <Music className="w-4 h-4 text-[#8E4A23]" />
            <span>Listen to Folk Songs · गीत सुनें</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
