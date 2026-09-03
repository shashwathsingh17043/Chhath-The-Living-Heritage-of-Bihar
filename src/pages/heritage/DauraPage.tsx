import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Music, CheckCircle, Home, ShoppingBag, Landmark } from "lucide-react";
import { SourceMetadataCard } from "../../components/ui/SourceMetadataCard";

export const DauraPage: React.FC = () => {
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
            Exhibit CH-DAURA · Museum Record
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-[#2C221E] leading-tight">
            The Bamboo Daura (Processional Basket)
          </h1>
          <p className="font-yatra text-base text-[#8E4A23]">
            दउरा · Handwoven Deep Bamboo Vessel for River Processions
          </p>
        </div>

        {/* Visual Journey: Home -> Daura -> Ghat */}
        <div className="p-6 md:p-8 border border-[#EADEC9] bg-white rounded-2xl shadow-sm text-center space-y-6">
          <h3 className="font-bold text-base text-[#2C221E]">
            The Physical Journey of Prasad · <span className="font-yatra text-sm text-[#8E4A23]">प्रसाद की शारीरिक यात्रा</span>
          </h3>

          <div className="grid grid-cols-3 gap-4 items-center max-w-lg mx-auto text-xs">
            {/* Step 1 */}
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#EADEC9] flex items-center justify-center mx-auto text-[#8E4A23]">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#8E4A23]">1. Home · घर</h4>
                <p className="text-[11px] text-[#6B5B52]">Purified preparation</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FBEFEB] border-2 border-[#8E4A23] flex items-center justify-center mx-auto text-[#8E4A23]">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#8E4A23]">2. Daura · दउरा</h4>
                <p className="text-[11px] text-[#6B5B52]">Carried on head</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#FAF7F0] border border-[#EADEC9] flex items-center justify-center mx-auto text-[#8E4A23]">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#8E4A23]">3. River Ghat · घाट</h4>
                <p className="text-[11px] text-[#6B5B52]">Solar Arghya offering</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#5C2E16] max-w-md mx-auto leading-relaxed border-t border-[#EADEC9] pt-4 font-medium">
            The Daura is the sacred physical vessel uniting domestic kitchen sanctification with the communal riverbank, safeguarding offerings across the barefoot pilgrimage.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
          {/* Column 1: Material and Craft */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-4 shadow-sm">
            <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#8E4A23]" />
              <span>Craft &amp; Architecture · हस्तशिल्प और संरचना</span>
            </h3>
            
            <div className="space-y-2.5 text-[#5C2E16]">
              <p>
                The Daura is a deep, circular basket handwoven from resilient green bamboo strips. Its flexible yet sturdy construction allows it to bear substantial weight, containing multiple laden soops, fresh fruits, and oil lamps without deforming.
              </p>
              <p>
                <strong>Artisanal Stewardship:</strong> Handcrafted primarily by generational bamboo-weaving communities across rural Bihar, the seasonal production of dauras stimulates local village artisan economies before the festival begins.
              </p>
              <p className="text-[11px] text-[#7D6B58] italic border-l-2 border-[#EADEC9] pl-2.5">
                Note: The basketry weave techniques have been passed down orally across generations with no mechanized intervention, preserving indigenous folk knowledge.
              </p>
            </div>
          </div>

          {/* Column 2: Carrying Tradition */}
          <div className="p-6 border border-[#EADEC9] bg-white rounded-2xl space-y-4 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-bold text-sm text-[#2C221E] border-b border-[#EADEC9] pb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-[#8E4A23]" />
                <span>The Bearing Tradition · वहन परंपरा</span>
              </h3>
              
              <div className="space-y-2.5 mt-3 text-[#5C2E16]">
                <p>
                  Traditionally, family members (frequently male relatives, though regional practices and family preferences vary) balance the heavy daura upon their heads while walking barefoot toward the riverbank.
                </p>
                <p>
                  Carrying the basket atop the head signifies devotion, voluntary physical service (shram daan), and familial solidarity. Throughout the march, the entourage sings devotional choruses in unison.
                </p>
              </div>
            </div>
            
            <div className="space-y-3 pt-2">
              <div className="p-3 bg-[#FAF7F0] border border-[#EADEC9] rounded-xl text-[11px] text-[#5C2E16]">
                <strong>Archival Classification:</strong> Folk Tradition &amp; Regional Practice · <span className="font-yatra">लोक परंपरा</span>
              </div>
              <SourceMetadataCard
                claim="Daura is typically carried on the head by family members (often male relatives, but variation exists by region)."
                hindiClaim="दउरा में प्रसाद को रखकर घाट तक ले जाया जाता है। परिवार के सदस्य इसे सिर पर वहन करते हैं और व्यवहार में भिन्नता हो सकती है।"
                classification="REGIONAL PRACTICE"
                source="Bihar Tourism"
                sourceType="government"
                region="Bihar / Purvanchal"
                verificationStatus="Government Sourced"
                theme="light"
              />
            </div>
          </div>
        </div>

        {/* Dynamic Songs Link */}
        <div className="p-5 border border-[#EADEC9] bg-[#FAF7F0] rounded-2xl flex items-center justify-between gap-4 flex-wrap shadow-sm">
          <div className="space-y-1">
            <h4 className="font-bold text-sm text-[#2C221E]">
              Songs of the Daura &amp; Bahangi · <span className="font-yatra text-xs text-[#8E4A23]">दउरा से जुड़े लोकगीत</span>
            </h4>
            <p className="text-xs text-[#7D6B58]">Listen to timeless anthems like "Kanch Hi Baans Ke Bahangiya" celebrating the march to the ghat</p>
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
